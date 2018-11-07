import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View
} from 'react-native';
//Components
import StyledText from './StyledText';

export default class Day extends React.PureComponent {
    render() {
        const { dayOfWeek, title, icon, tempMax, tempMin } = this.props;
        const tempMaxString = Math.round(tempMax).toString();
        const tempMinString = Math.round(tempMin).toString();

        return (
            <View style={styles.container}>
                <View style={styles.daySection}>
                    <StyledText style={styles.text}>
                        {dayOfWeek}
                    </StyledText>
                </View>
                <View style={styles.iconSection}>
                    {/*TODO: Add Icons*/}
                </View>
                <View style={styles.titleSection}>
                    <StyledText style={styles.text}>
                        {title}
                    </StyledText>
                </View>
                <View style={styles.tempSection}>
                    <StyledText style={styles.text}>
                        {tempMaxString}
                    </StyledText>
                </View>
                <View style={styles.tempSection}>
                    <StyledText style={styles.text}>
                        {tempMinString}
                    </StyledText>
                </View>
            </View>
        )
    }
}

Day.propTypes = {
    dayOfWeek: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    daySection: {
        flex: 1,
    },
    iconSection: {
        width: 40,
        alignItems: 'center',
    },
    titleSection: {
        width: 70,
        alignItems: 'flex-start',
    },
    tempSection: {
        width: 40,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 17,
    }
});