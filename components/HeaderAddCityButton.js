import React from 'react';
import propTypes from 'prop-types';
import {
    TouchableOpacity,
    StyleSheet

} from 'react-native';
//Expo
import {MaterialIcons} from '@expo/vector-icons';

export default class HeaderAddCityButton extends React.PureComponent {
    render() {
        const {modalOpen} = this.props;
        return (
            <TouchableOpacity
                onPress={modalOpen}
                style={styles.container}
            >
                <MaterialIcons
                    name={'playlist-add'}
                    hitSlop={{top: 10, left: 10, bottom: 10,right: 10}}
                    size={30}
                    color={'#fff'}
                />
            </TouchableOpacity>
        )
    }
}
HeaderAddCityButton.propTypes = {

};

const styles = StyleSheet.create({
    container: {

    }
});