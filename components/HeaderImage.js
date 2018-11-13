import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';
//Utils
import {headerImageUrl} from '../utils';

export default class HeaderImage extends React.PureComponent {
    render() {
        return (
            <ImageBackground source={headerImageUrl()} style={styles.imageBackground}/>
        )
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 185,
        opacity: 0.5
    },
});