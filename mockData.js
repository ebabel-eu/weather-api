const countries = {
  france: null,
  italy: null,
  spain: null,
}

const forecast = {
  france: {
    today: {
      temperature: 18,
      wind: 'North West',
    },
    tomorrow: {
      temperature: 19,
      wind: 'West',
    },
    dayAfter: {
      temperature: 15,
      wind: 'North',
    },
    lastDay: {
      temperature: 16,
      wind: 'West',
    },
  },
  italy: {
    today: {
      temperature: 20,
      wind: 'South',
    },
    tomorrow: {
      temperature: 23,
      wind: null,
    },
    dayAfter: {
      temperature: 21,
      wind: 'South East',
    },
    lastDay: {
      temperature: 22,
      wind: 'South',
    },
  },
  spain: {
    today: {
      temperature: 25,
      wind: 'West',
    },
    tomorrow: {
      temperature: 24,
      wind: 'West',
    },
    dayAfter: {
      temperature: 26,
      wind: null,
    },
    lastDay: {
      temperature: 27,
      wind: 'South',
    },
  },
}

exports.data = {
  countries,
  forecast,
};
