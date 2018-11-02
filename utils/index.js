import moment from 'moment';

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