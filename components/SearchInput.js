import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    Platform,
    StyleSheet,
} from 'react-native';
//Constants
import Colors from "../constants/Colors";
//Expo
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
//Components
import StyledTextInput from './StyledTextInput';

export default class SearchInput extends React.PureComponent {
    render() {
        const {
            citySearch,
            handleSearch,
            clearSearch,
        } = this.props;
        return (
            <View style={styles.searchBlockContainer}>
                <View style={styles.inputContainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-search-outline' : 'md-search'}
                            size={24}
                            color={Colors.contentGrey}
                        />
                    </View>
                    <StyledTextInput
                        placeholder={'Search'}
                        placeholderTextColor={Colors.contentGrey}
                        color={Colors.contentGrey}
                        value={citySearch}
                        onChange={handleSearch}
                    />
                    {citySearch && (
                        <TouchableOpacity
                            onPress={clearSearch}
                            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
                            style={styles.iconContainerRight}
                        >
                            <MaterialIcons
                                name={'cancel'}
                                size={18}
                                color={Colors.contentGrey}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        )
    }
}

SearchInput.propTypes = {
    citySearch: PropTypes.string,
    handleSearch: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    searchBlockContainer: {
        alignItems: 'center',
        backgroundColor: Colors.contentGrey,
    },
    titleContainer: {
        marginVertical: 11,
    },
    titleText: {
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    iconContainerRight: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
});