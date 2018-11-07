import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
} from 'react-native';

//Components
import StyledText from './StyledText';

//Constants
import Colors from '../constants/Colors';

class TableRow extends React.PureComponent {
    render() {
        const { cells } = this.props;
        return (
            <View style={styles.row}>
                {cells.map(({ title, value }) => (
                    <View style={styles.cell} key={title}>
                        <StyledText
                            size='subhead'
                            style={styles.cellText}
                        >
                            {title}
                        </StyledText>
                        <StyledText
                            size='title_1'
                            style={styles.cellText}
                        >
                            {value}
                        </StyledText>
                    </View>
                ))}
            </View>
        )
    }
}

TableRow.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    }))
};

export default class CityDetailsTable extends React.PureComponent {
    render() {
        const { humidity, pressure, temp, title, visibility, windSpeed } = this.props;
        const rows = [
            [{title: 'Wind Speed', value: `${windSpeed}kmh`}, {title: 'Pressure', value: `${pressure}hPa`}],
            [{title: 'Humidity', value: `${humidity}%`}, {title: 'Visibility', value: `${visibility}m`}],
            [{title: 'Temperature', value: temp}, {title: 'Conditions', value: title}],
        ];
        return (
            <View style={styles.container}>
                {rows.map((row, index) => (
                    <TableRow cells={row} key={index.toString()}/>
                ))}
            </View>
        )
    }
};

CityDetailsTable.propTypes = {
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    temp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    visibility: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#fff',
        height: 60,
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'flex-start',
    },
    cellText: {
        color: Colors.cityDetailsText,
    }
});