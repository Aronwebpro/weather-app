import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View
} from 'react-native';
//Components
import StyledText from './StyledText';

export default class Hour extends React.PureComponent {
    render() {
        const {hour, title, temp, icon,} = this.props;
        const tempString = Math.round(temp).toString();
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <StyledText style={styles.text}>
                        {hour}
                    </StyledText>
                </View>
                <View style={styles.section}>
                    <StyledText style={styles.text}>
                        {title}
                    </StyledText>
                </View>
                <View style={styles.section}>

                </View>
                <View style={styles.section}>
                    <StyledText style={styles.text}>
                        {tempString}
                    </StyledText>
                </View>
            </View>
        )
    }
}

Hour.propTypes = {
    title: PropTypes.string,
    temp: PropTypes.number,
    icon: PropTypes.string,
    hour: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        marginHorizontal: 5,
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 17,
    }
});