import {
    cities,
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


export {
    fetchCityData,
}