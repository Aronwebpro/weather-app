import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Dimensions,
    ImageBackground,
    SafeAreaView,
} from 'react-native';
//Expo
import { LinearGradient } from 'expo';

//Components
import CityDetails from './CityDetails';
import CityHourlyForecast from './CityHourlyForecast';
import CityHeader from './CityHeader';
import HeaderImage from './HeaderImage';

//Utils
import {backgroundByWeatherConditions} from '../utils';

export default class CityScreen extends React.Component {
    render() {
        const { data } = this.props;
        const { city, currentWeatherData, hourlyForecastData, dailyForecastData } = data;
        return (
            <LinearGradient style={styles.container} colors={backgroundByWeatherConditions()}>
                <HeaderImage />
                <View style={styles.headerContainer}>
                    <CityHeader {...currentWeatherData} {...city}/>
                </View>
                <View style={styles.dailyForceCastContainer}>
                    <CityHourlyForecast {...{ hourlyForecastData, currentWeatherData }}/>
                </View>
                <View style={styles.detailsScrollContainer}>
                    <CityDetails {...{ dailyForecastData, currentWeatherData }}/>
                </View>
            </LinearGradient>
        )
    }
};

CityScreen.propTypes = {
    data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        width: Dimensions.get('window').width,
    },
    headerContainer: {
        height: 150,
    },
    dailyForceCastContainer: {
        height: 150,
    },
    detailsScrollContainer: {
        flex: 1,
    }
});
