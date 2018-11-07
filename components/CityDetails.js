import React from 'react';
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

//Components
import CityDailyForecast from './CityDailyForecast';
import CityDetailsTable from './CityDetailsTable';

export default class CityDetails extends React.PureComponent {
    render() {
        const { dailyForecastData, currentWeatherData } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.dailyForceCastContainer}>
                    <CityDailyForecast {...{ dailyForecastData }}/>
                </View>
                <View styles={styles.currentWeather}>
                    <CityDetailsTable {...currentWeatherData} />
                </View>
            </ScrollView>
        )
    }
};

CityDetails.propTypes = {
    dailyForecastData: PropTypes.array.isRequired,
    currentWeatherData: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
    },
    dailyForceCastContainer: {
        marginBottom: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    currentWeather: {

    },
});