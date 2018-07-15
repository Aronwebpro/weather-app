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
import StyledText from './StyledText';

export default class SearchInput extends React.PureComponent {
    render() {
        const {
            citySearch,
            handleSearch,
            clearSearch,
            cancel,
        } = this.props;
        return (
            <View style={styles.searchBlockContainer}>
                <View style={styles.searchBlockWrapper}>
                    <StyledText style={styles.label}>
                        Enter city
                    </StyledText>
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
                <TouchableOpacity
                    onPress={cancel}
                    style={styles.cancelTextContainer}
                >
                    <StyledText style={styles.cancelText}>
                        Cancel
                    </StyledText>
                </TouchableOpacity>
            </View>

        )
    }
}

SearchInput.propTypes = {
    citySearch: PropTypes.string,
    handleSearch: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
};
SearchInput.defaultProps = {
    citySearch: '',
    handleSearch: () => {
    },
    clearSearch: () => {
    },
};

const styles = StyleSheet.create({
    searchBlockContainer: {
        flexDirection: 'row',

    },
    searchBlockWrapper: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    label: {
        color: '#fff',
    },
    titleContainer: {
        marginVertical: 11,
    },
    titleText: {
        color: '#fff',
    },
    searchBlock: {
        flex: 1,
        height: 70,
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
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
    cancelTextContainer: {
        paddingRight: 20,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelText: {
        color: '#fff'
    }
});