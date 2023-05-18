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

## Task
Create an REST API with 1 Endpoint. It shows the current Weather of the city of your choice and the forecast for the next few days. Please also provide the average Temperature during that timeframe. To provide Data within your API you must use mocked data. Hint : create mock data for 3 cities.

### General conditions
You have complete freedom in how you implement this whether in JavaScript or TypeScript. The choice of architecture patterns, frameworks, libraries are yours. Please prioritize the features you want to implement and think about this submission being a Portfolio of your skills. Show us what your strengths are –Architecture, Clean Code or Test Automation – whatever you want us to see.

If you miss important information in the requirements above, please feel free to make assumptions
that make sense to you and explain them in the interview and add them to the README.me file of your submission.

