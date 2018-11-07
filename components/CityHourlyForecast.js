import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

//Components
import Hour from './Hour';

export default class CityHourlyForecast extends React.PureComponent {
    render() {
        const { hourlyForecastData, currentWeatherData } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    contentContainerStyle={styles.scrollViewContainer}
                >
                    {hourlyForecastData.map((day, index) => {
                        return index === 0 ? (
                            <Hour key={index.toString()} hour='Now' {...currentWeatherData}/>
                        ) : (
                            <Hour key={index.toString()} {...day} />
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
};

CityHourlyForecast.propTypes = {
    tenHoursForecastData: PropTypes.arrayOf(PropTypes.shape({
        hour: PropTypes.string,
        title: PropTypes.string,
        temp: PropTypes.number,
        icon: PropTypes.string,
    })),
    currentWeather: PropTypes.shape({
        title: PropTypes.string,
        temp: PropTypes.number,
        icon: PropTypes.string,
    })
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#fff',
        zIndex: 2,
    },
    scrollViewContainer: {
        paddingVertical: 10,
    },
});