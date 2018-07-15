import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import PropTypes from 'prop-types';


const StyledTextInput = props => {
    const {
        value,
        onChange,
        autoCapitalize,
        secureTextEntry,
        keyboardType,
        placeholder,
        placeholderTextColor,
        fontSize,
        color,
    } = props;
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid={'transparent'}
            style={[{ fontSize, color }, styles.input]}
        />
    )};

StyledTextInput.defaultProps = {
    autoCapitalize: 'none',
    fontSize: 12,
    placeholderTextColor: Colors.lightIconColor,
    color: Colors.headerText,
};

StyledTextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    autoCapitalize: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    underlineColorAndroid: PropTypes.string,
    fontSize: PropTypes.number,
    color: PropTypes.string,
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        padding: 10,
    }
});

export default StyledTextInput;