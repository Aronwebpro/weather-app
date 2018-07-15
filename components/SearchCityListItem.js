import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
// Expo
import {EvilIcons} from '@expo/vector-icons';
//Constants
import Colors from '../constants/Colors';
//Components
import StyledText from '../components/StyledText';


export default class SearchCityListItem extends React.PureComponent {
    render() {
        const {
            city,
            state,
            country,
            addCity,
        } = this.props;
        return (
            <View style={styles.cityListItemContainer}>
                <View style={styles.cityListItemContent}>
                    <View style={styles.cityListItemTextContainer}>
                        <StyledText style={styles.cityListItemText}>
                            {city + ', ' + state + ', ' + country}
                        </StyledText>
                    </View>
                    <TouchableOpacity
                        onPress={addCity}
                    >
                        <EvilIcons
                            name={'plus'}
                            size={32}
                            color={Colors.searchModalText}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

SearchCityListItem.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    addCity: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    cityListItemContainer: {
        height: 42,
        paddingLeft: 10,
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cityListItemContent: {
        flexDirection: 'row',
    },
    cityListItemTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    cityListItemText: {
        color: Colors.searchModalText,
    },
    icon: {
        paddingHorizontal: 10,
    }
});