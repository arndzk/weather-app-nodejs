const request = require('request');

require('dotenv').config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_API_ACCESS_KEY}&query=Athens`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to the weather service!');
  } else if (response.body.error) {
    console.log('Unable to find the location!');
  } else {
    console.log(
      `It is currently ${
        response.body.current.temperature
      } degrees outside and it feels like ${
        response.body.current.feelslike
      } degrees.
      It is ${response.body.current.weather_descriptions[0].toLowerCase()} and there is a ${
        response.body.current.precip
      }% chance of rain.`
    );
  }
});
