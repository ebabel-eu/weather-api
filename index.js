const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const mockData = require('./mockData');

const app = express();
const PORT = 3000;

const STATUS = {
  OK: '200',
  CREATED: '201',
  NOT_FOUND: '404',
  CONFLICT: '409',
};

const WINDS = ['North', 'North East', 'East', 'South East', 'South', 'South West', 'West', 'North West', null];

const getLink = () => Object.keys(mockData.data.countries).map(country => `/${country}`);

const handleError = (errorMessage) => {
  return {
    description: errorMessage,
    link: getLink(),
  };
};

const roundTwoDecimals = (toRound) => Number(toRound.toFixed(2));

const getAverageTemperature = (temperatures) => {
  const average = temperatures.reduce((a, b) => (a + b)) / temperatures.length;
  return roundTwoDecimals(average);
};

const randomTemperature = () => roundTwoDecimals(Math.random() * 20) + 5;

const randomWind = () => WINDS[Math.floor(Math.random() * WINDS.length)];

const generateRandomForecast = () => {
  return {
    today: {
      temperature: randomTemperature(),
      wind: randomWind(),
    },
    tomorrow: {
      temperature: randomTemperature(),
      wind: randomWind(),
    },
    dayAfter: {
      temperature: randomTemperature(),
      wind: randomWind(),
    },
    lastDay: {
      temperature: randomTemperature(),
      wind: randomWind(),
    }
  }
};

const capitalize = (anyString) => `${anyString.charAt(0).toUpperCase()}${anyString.slice(1)}`;

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.use(express.json());

app.post('/', (req, res) => {
  const countryName = req.body.countryName && req.body.countryName.toLowerCase();

  if (mockData.data.countries[countryName]) {
    res.statusCode = STATUS.CONFLICT;
    res.send(handleError('Country name already exists.'));
    return;
  }

  mockData.data.countries[countryName] = {};
  mockData.data.forecast[countryName] = generateRandomForecast();
  res.statusCode = STATUS.CREATED;
  res.send(req.body);
});

// Main endpoint to GET the weather and forecast of a given country.
app.get('/:countryName', (req, res) => {
  const countryName = req.params.countryName && req.params.countryName.toLowerCase();

  if (!countryName) {
    throw Error('countryName unexpected value.');
  }

  if (mockData.data.countries[countryName] === undefined) {
    res.statusCode = STATUS.NOT_FOUND;
    res.send(handleError('Unexpected country name not supported by this API.'));
    return;
  }

  if (mockData.data.forecast[countryName] === undefined) {
    res.statusCode = STATUS.NOT_FOUND;
    res.send(handleError('Forecast for given country cannot be found.'));
    return;
  }

  const temperatures = Object.values(mockData.data.forecast[countryName]).map(forecast => forecast.temperature);
  const averageTemperature = getAverageTemperature(temperatures);

  const result = {
    ...mockData.data.forecast[countryName],
    averageTemperature,
    description: `Weather forecast of ${capitalize(countryName)}.`,
    link: getLink().filter(country => country !== `/${countryName}`),
  };

  res.statusCode = STATUS.OK;
  res.send(result);
});

// Fallback endpoint.
// note: I know the challenge was to write a single end-point, but it feels like
// we should have a fallback for the root of the API that gives helpful links to the user.
app.get('/', (req, res) => {
  const result = {
    description: "Specify a country name to get its current weather and forecast.",
    link: getLink(),
  };

  res.statusCode = STATUS.OK;
  res.send(result);
})

app.listen(PORT, () => {
  console.log(`Weather API listening on port ${PORT}`);
});

exports.getLink = getLink;
exports.handleError = handleError;
exports.roundTwoDecimals = roundTwoDecimals;
exports.getAverageTemperature = getAverageTemperature;
exports.capitalize = capitalize;
