import {
    cities,
    weather,
} from '../settings';


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
                "X-Mashape-Key": cities.API_KEY,
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

const fetchWeatherDataByCoord = async ({latitude, longitude}) => {
    const API_KEY = weather.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&lat=${latitude}&lon=${longitude}`;
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

export {
    fetchCityData,
    fetchWeatherDataByCoord,
}