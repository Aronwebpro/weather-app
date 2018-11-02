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
import {fetchWeatherDataForNowByCoord, fetchWeatherData5daysByCoord, getWeatherForcastDataByCoord} from '../api/lookups';

//Components
import SearchCityModal from '../components/SearchCityModal';
import HeaderAddCityButton from '../components/HeaderAddCityButton';


const weatherObj = JSON.parse(
    `{
        "weatherData": {
            "base": "stations",
            "clouds": {
                "all": 1
            },
            "cod": 200,
            "coord": {
                "lat": 37.79,
                "lon": -122.41
            },
            "dt": 1541104800,
            "id": 5391959,
            "main": {
                "humidity": 44,
                "pressure": 1019,
                "temp": 299.13,
                "temp_max": 301.15,
                "temp_min": 297.55
            },
            "name": "San Francisco",
            "sys": {
                "country": "US",
                "id": 392,
                "message": 0.0049,
                "sunrise": 1541082962,
                "sunset": 1541120988,
                "type": 1
            },
            "visibility": 12874,
            "weather": [
                {
                    "description": "clear sky",
                    "icon": "01d",
                    "id": 800,
                    "main": "Clear"
                }
            ],
            "wind": {
                "deg": 330,
                "speed": 2.1
            }
        }
    }`
);

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
                    style={{flex: 1}}
                />
            ),
            headerTintColor: '#fff',
        };
    };

    state = {
        modalVisible: false,
        cities: [],

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
                        <HeaderAddCityButton modalOpen={this.modalOpen}/>
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

    async componentDidMount() {
        //TODO: Get City list
        //Data Sample
        // clicked Object {
        //     "city": "Chicago",
        //         "country": "United States",
        //         "state": "Illinois",
        // }
        this.setState({cities: [weatherObj]});
        //console.log(weatherObj);

        const {coords} = await this._getLocationAsync();

        if (coords) {
            const {latitude, longitude} = coords;
            const weatherData = await getWeatherForcastDataByCoord({latitude, longitude});
            console.log({weatherData});
        }

    }

    _getLocationAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return await Location.getCurrentPositionAsync({});
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
