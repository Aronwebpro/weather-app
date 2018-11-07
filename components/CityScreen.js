import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

//Components
import CityDetails from './CityDetails';
import CityHourlyForecast from './CityHourlyForecast';
import CityHeader from './CityHeader';

export default class CityScreen extends React.Component {
    render() {
        const { data } = this.props;
        const { city, currentWeatherData, hourlyForecastData, dailyForecastData } = data;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <CityHeader {...currentWeatherData} {...city}/>
                </View>
                <View style={styles.dailyForceCastContainer}>
                    <CityHourlyForecast {...{ hourlyForecastData, currentWeatherData }}/>
                </View>
                <View style={styles.detailsScrollContainer}>
                    <CityDetails {...{ dailyForecastData, currentWeatherData }}/>
                </View>
            </View>
        )
    }
};

CityScreen.propTypes = {
    data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
});
