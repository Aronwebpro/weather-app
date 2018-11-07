import {
    cities,
    weather,
} from '../settings';
import {
    parseWeatherDataForFiveDaysForecast,
    parseWeatherDataForTenHoursForecast,
    parseWeatherDataForCurrentMoment,
} from '../utils';


const fetchCityData = async (citySearch) => {
    if (citySearch === '') return;
    const params = {
        query: citySearch,
        searchby: 'city'
    };
    const queryString = Object.keys(params).map((key, i, a) => (i === 0 ? '?' : '') + key + '=' + params[key] + (i === a.length - 1 ? '' : '&')).join('');

    try {
        const respond = await fetch(cities.API_URI + queryString, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'X-Mashape-Key': cities.API_KEY,
            }),
        });
        let result = [];
        try {
            result = await respond.json();
        } catch (e) {

        }
        return result;
    } catch (e) {
        console.log('Error', e)
    }
};

const fetchWeatherDataForNowByCoord = async ({latitude, longitude}) => {
    const API_KEY = weather.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&lat=${latitude}&lon=${longitude}&units=metric`;
    try {
        const respond = await fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json'
            })
        });
        let result;
        try {
            result = await respond.json();
        } catch (e) {
            console.log(e);
        }
        return result;
    } catch (e) {
        console.log(e);
    }
};

const fetchWeatherData5daysByCoord = async ({latitude, longitude}) => {
    const API_KEY = weather.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&lat=${latitude}&lon=${longitude}&units=metric`;
    try {
        const respond = await fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json'
            })
        });
        let result;
        try {
            result = await respond.json();
        } catch (e) {
            console.log(e);
        }
        return result;
    } catch (e) {
        console.log(e);
    }
};


/**
 * Get Weather data By Coordinates
 * @param latitude
 * @param longitude
 * @returns Object -> {fiveDaysForecastData -> {}, tenHoursForecastData  -> {}, currentWeather  -> {}, city  -> {}}
 */
const getWeatherForcastDataByCoord = async ({latitude, longitude}) => {
    //Fetch Data from Weather API
    const [fiveDaysForecast, curretnWeatherStatus] = await Promise.all([
        fetchWeatherData5daysByCoord({latitude, longitude}),
        fetchWeatherDataForNowByCoord({latitude, longitude}),
    ]);
    const {list, city} = fiveDaysForecast;

    //Parse Weahter Data
    const dailyForecastData = parseWeatherDataForFiveDaysForecast(list);
    const hourlyForecastData = parseWeatherDataForTenHoursForecast(list);
    const currentWeatherData = parseWeatherDataForCurrentMoment(curretnWeatherStatus);

    return {
        cityName: city.name,
        data: {
            dailyForecastData,
            hourlyForecastData,
            currentWeatherData,
            city,
        }
    }
};

export {
    fetchCityData,
    fetchWeatherDataForNowByCoord,
    fetchWeatherData5daysByCoord,
    getWeatherForcastDataByCoord,
}