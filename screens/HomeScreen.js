import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';

// Expo
import {EvilIcons} from '@expo/vector-icons';
import {LinearGradient, Constants, Location, Permissions} from 'expo';

//Lookups
import {fetchWeatherDataByCoord} from '../api/lookups';

//Components
import SearchCityModal from '../components/SearchCityModal';
import HeaderAddCityButton from '../components/HeaderAddCityButton';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackground: (
                <LinearGradient
                    colors={['#113254', '#020f1a']}
                    style={{ flex: 1 }}
                />
            ),
            headerTintColor: '#fff',
        };
    };

    state = {
        modalVisible: false,

    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>

                </View>
                <LinearGradient style={styles.bottomMenuContainer} colors={['#817f87', '#092e4f', '#020f1a']}>
                    <View style={styles.footerLeft}>
                        {/*TODO: Weather App Icon*/}
                    </View>
                    <View style={styles.footerMiddle}>
                        {/*TODO: Dot Indicator*/}
                    </View>
                    <View style={styles.footerRight}>
                        <HeaderAddCityButton modalOpen={this.modalOpen} />
                    </View>
                </LinearGradient>
                <SearchCityModal
                    modalVisible={this.state.modalVisible}
                    closeModal={this.modalClose}
                    navigation={this.props.navigation}
                    addCity={this.addCity}
                />
            </View>
        );
}

    componentDidMount() {
        //TODO: Get City list
        //Data Sample
        // clicked Object {
        //     "city": "Chicago",
        //         "country": "United States",
        //         "state": "Illinois",
        // }
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            const {coords} = await Location.getCurrentPositionAsync({});
            if (coords) {
                const {latitude, longitude} = coords;
                console.log({latitude, longitude});
                const weatherData = await fetchWeatherDataByCoord({latitude, longitude});
                console.log({weatherData});
            }
        }

    };

    modalClose = () => this.setState({modalVisible: false});
    modalOpen = () => this.setState({modalVisible: true});
    addCity = (city) => {
        this.modalClose();
        console.log('clicked', city);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
    activityIndicator: {
        marginTop: 20,
    },
    bottomMenuContainer: {
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#092e4f'
    },
    footerLeft: {
        width: 50,
    },
    footerMiddle: {
        flex: 1,
    },
    footerRight: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
