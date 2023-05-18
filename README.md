# Weather API
Node.js web API to query the current weather and forecast for the next few days of a given city.

## Install dependencies
Run `npm install`

## Run in development
First run `npm start` and then send a GET to http://localhost:3000/ as a starting point.

To query a specific country, send a GET to http://localhost:3000/:countryName where `:countryName` is the name of the country.

## Unit tests
```bash
npm test
```

To run tests continuously, use `npm run test:watch` instead.

## Test manually in Terminal

### `GET`ting data from the API.
```bash
curl localhost:3000
curl localhost:3000/france
curl localhost:3000/italy
curl localhost:3000/spain
```

### `POST`ing new data to the API.
```bash
curl -X POST http://localhost:3000 -H 'Content-Type: application/json' -d '{"countryName": "Poland"}'
```

It's now possible to get the randomly generated forecast of the newly created country, Poland, with `curl localhost:3000/poland`
