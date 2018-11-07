import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View
} from 'react-native';

//Components
import Day from './Day';

export default class CityDailyForecast extends React.PureComponent {
    render() {
        const { dailyForecastData } = this.props;
        return (
            <View style={styles.container}>
                {dailyForecastData.map((day, index) => (
                    <Day key={index.toString()} {...day} />
                ))}
            </View>
        )
    }
}


CityDailyForecast.propTypes = {
    fiveDaysForecastData: PropTypes.arrayOf(PropTypes.object),
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },

});