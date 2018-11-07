import moment from 'moment';

/**
 * Function to build right format of Weather data for Daily Forecast
 * @param data -> Object
 * @returns {Object|*|Uint8Array|BigInt64Array|{title: *, tempMax: *, tempMin: *, icon: *, dayOfWeek: string}[]|Float64Array|Int8Array|Float32Array|Int32Array|Uint32Array|Uint8ClampedArray|BigUint64Array|Int16Array|Uint16Array}
 */
const parseWeatherDataForFiveDaysForecast = (data) => {
    //const parsedData = data.filter((x) =>  )
    return data.filter((item) => {
        return moment(item.dt*1000).format('H') === '13' || moment(item.dt*1000).format('H') === '12';
    }).map((field) => {
        return {
            title: field.weather[0].main,
            tempMax: field.main.temp_max,
            tempMin: field.main.temp_min,
            icon: field.weather[0].icon,
            dayOfWeek: moment(field.dt*1000).format('dddd')
        }
    });

};

/**
 * Function to build right format of Weather data for Hourly Forecast
 * @param data
 * @returns {{title: *, temp: *, icon: *, hour: string}[]}
 */
const parseWeatherDataForTenHoursForecast = (data) => {
    return data.slice(0,9).map((field) => {
        return {
            title: field.weather[0].main,
            temp: field.main.temp,
            icon: field.weather[0].icon,
            hour: moment(field.dt*1000).format('H')
        }
    })
};

/**
 * Function to build right format of Weather data for Present Weather
 * @param data
 * @returns {{humidity: *, pressure: number, temp: *, visibility: string, description: *, icon: *, title: *, windSpeed: number}}
 */
const parseWeatherDataForCurrentMoment = (data) => {
    return {
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp: data.main.temp,
        visibility: data.visibility,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        title: data.weather[0].main,
        windSpeed: data.wind.speed,
    }
};

export {
    parseWeatherDataForFiveDaysForecast,
    parseWeatherDataForTenHoursForecast,
    parseWeatherDataForCurrentMoment,
}