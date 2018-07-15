import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {WebBrowser} from 'expo';
// Expo
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import StyledTextInput from '../components/StyledTextInput';
import SearchInput from '../components/SearchInput';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#d8d85e',
        },
        headerTintColor: '#fff',
    };

    state = {
        citySearch: '',
        cities: [],
    };

    render() {
        const {
            citySearch,
            cities
        } = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <SearchInput
                        citySearch={citySearch}
                        handleSearch={this.handleSearch}
                        clearSearch={this.clearSearch}
                    />
                </View>
            </View>
        );
    }

    async componentDidMount() {
        //this.searchCity();
    }

    searchCity = async (citySearch) => {
        if (citySearch === '') return;
        const URL = 'https://andruxnet-world-cities-v1.p.mashape.com/';
        const CITIES_API_KEY = "aaQ6BuvVoNmshSC0gwqyotCc6ASSp1kTbXTjsnCle3yPxQCTqT";
        const params = {
            query: citySearch,
            searchby: 'city'
        };
        const params2 = Object.keys(params).map((key, i, a) => (i === 0 ? '?' : '') + key + '=' + params[key] + (i === a.length - 1 ? '' : '&')).join('');

        try {
            const respond = await fetch(URL + params2, {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    "X-Mashape-Key": CITIES_API_KEY,
                }),
            });
            let result = [];
            try {
                result = await respond.json();
            } catch (e) {
                //console.log(e);
            }
            this.setState({cities: result})
        } catch (e) {
            console.log('Error', e)
        }

    };

    handleSearch = (citySearch) => this.setState({citySearch}, this.searchCity.bind(this, citySearch));

    clearSearch = () => this.setState({citySearch: '', cities: []});


}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    menuButton: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: 'yellow',
    },
});
