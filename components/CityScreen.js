import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

//Components
import CityDetails from './CityDetails';
import CityHourlyForecast from './CityHourlyForecast';
import CityHeader from './CityHeader';

//Expo
import { LinearGradient} from 'expo';

export default class CityScreen extends React.Component {
    render() {
        const { data } = this.props;
        const { city, currentWeather, tenHoursForecastData, fiveDaysForecastData } = data;
        const { name } = city;
        //TODO: Implement boundaries for eacht City Page
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <CityHeader {...{ ...city, ...currentWeather }}/>
                </View>
                <View style={styles.dailyForceCastContainer}>
                    <CityHourlyForecast {...{ tenHoursForecastData, name }}/>
                </View>
                <View style={styles.detailsScrollContainer}>
                    <CityDetails {...{ fiveDaysForecastData, currentWeather }}/>
                </View>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: 'yellowgreen',
    },
    headerContainer: {
        height: 150,
    },
    dailyForceCastContainer: {
        height: 150,
    },
    detailsScrollContainer: {
        flex: 1,
    },
});