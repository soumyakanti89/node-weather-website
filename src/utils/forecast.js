const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/dfd87faf853d11d745e8d84408a7ed45/${latitude},${longitude}?units=si&lang=en`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. Today's lowest temparature is ${body.daily.data[0].temperatureLow} °C and the hightest temparature ${body.daily.data[0].temperatureHigh} °C. There is a ${body.currently.precipProbability} % chance of rain.`);
        }
    })
}

module.exports = forecast