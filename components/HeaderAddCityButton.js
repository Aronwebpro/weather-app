import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    StyleSheet

} from 'react-native';

//Expo
import { MaterialIcons } from '@expo/vector-icons';

export default class HeaderAddCityButton extends React.PureComponent {
    render() {
        const { modalOpen } = this.props;
        return (
            <TouchableOpacity
                onPress={modalOpen}
                style={styles.container}
            >
                <MaterialIcons
                    name={'playlist-add'}
                    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                    size={30}
                    color={'#fff'}
                />
            </TouchableOpacity>
        )
    }
}

HeaderAddCityButton.propTypes = {
    modalOpen: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
    }
});