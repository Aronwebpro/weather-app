import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
} from 'react-native';

// Expo
import { Entypo } from '@expo/vector-icons';

//Components
import StyledText from './StyledText';

export default class CityHeader extends React.PureComponent {
    render() {
        const { name, title, temp } = this.props;
        const tempString = Math.round(temp).toString();
        return (
            <View style={styles.container}>
                <View style={styles.cityNameContainer}>
                    <StyledText
                        size={'large_title'}
                        color={'#fff'}
                    >
                        {name}
                    </StyledText>
                </View>
                <View>
                    <StyledText
                        size={'subhead'}
                        color={'#fff'}
                    >
                        {title}
                    </StyledText>
                </View>
                <View style={styles.tempContainer}>
                    <StyledText
                        size={'xx_large'}
                        color={'#fff'}
                    >
                        {`${tempString} `}
                    </StyledText>
                    <Entypo
                        name='circle'
                        style={styles.degreeIcon}
                        size={14}
                        color={'#fff'}
                    />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityNameContainer: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tempContainer: {
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    degreeIcon: {
        position: 'absolute',
        top: 15,
        right: 2,
        fontWeight: 'bold',
    }
});

CityHeader.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
};