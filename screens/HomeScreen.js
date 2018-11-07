import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
} from 'react-native';

// Expo
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient, Constants, Location, Permissions } from 'expo';

//Lookups
//TODO:
import {
    fetchWeatherDataForNowByCoord,
    fetchWeatherData5daysByCoord,
    getWeatherForcastDataByCoord
} from '../api/lookups';

//Components
import SearchCityModal from '../components/SearchCityModal';
import HeaderAddCityButton from '../components/HeaderAddCityButton';
import CityScreen from '../components/CityScreen';


export default class HomeScreen extends React.Component {
    static navigationOptions = { header: null };

    state = {
        modalVisible: false,
        cities: [],
    };

    render() {
        const { cities } = this.state;

        return (
            <LinearGradient style={styles.container} colors={['#817f87', '#092e4f', '#020f1a']}>
                <SafeAreaView style={styles.content} >
                    <FlatList
                        horizontal={true}
                        style={styles.container}
                        data={cities}
                        pagingEnabled
                        renderItem={({ item }) => (
                            <CityScreen {...item}/>
                        )}
                    />
                </SafeAreaView>
                <View style={styles.bottomMenuContainer}>
                    <View style={styles.footerLeft}>
                        {/*TODO: Weather App Icon*/}
                    </View>
                    <View style={styles.footerMiddle}>
                        {/*TODO: Dot Indicator*/}
                    </View>
                    <View style={styles.footerRight}>
                        <HeaderAddCityButton modalOpen={this.modalOpen}/>
                    </View>
                </View>
                <SearchCityModal
                    modalVisible={this.state.modalVisible}
                    closeModal={this.modalClose}
                    navigation={this.props.navigation}
                    addCity={this.addCity}
                />
            </LinearGradient>
        );
    }

    async componentDidMount() {
        //TODO: Temp Solution with Geo
        const { coords } = await this._getLocationAsync();
        if (coords) {
            const { latitude, longitude } = coords;
            const { data } = await getWeatherForcastDataByCoord({ latitude, longitude });
            this.setState({
                cities: [
                    {
                        key: 'SanSS',
                        data: data,
                    }
                ]
            });
        }
    }

    _getLocationAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return await Location.getCurrentPositionAsync({});
        }
    };

    //Add City Modal Handlers
    modalClose = () => this.setState({ modalVisible: false });
    modalOpen = () => this.setState({ modalVisible: true });
    addCity = (city) => {
        this.modalClose();
        console.log('clicked', city);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        marginTop: 40,
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
