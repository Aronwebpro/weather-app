import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
// Expo
import {EvilIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo';
//Constants
import Colors from '../constants/Colors';
//Components
import StyledText from '../components/StyledText';
import SearchCityModal from '../components/SearchCityModal';


export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle: {
                backgroundColor: '#092e4f',
            },
            headerTintColor: '#fff',
        };
    };

    state = {
        modalVisible: false,
    };

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.modalOpen}
                >
                    <StyledText>
                        Button to open
                    </StyledText>
                </TouchableOpacity>
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
    }

    modalClose = () => this.setState({modalVisible: false});
    modalOpen = () => this.setState({modalVisible: true});
    addCity = (city) => {
        //TODO: Create add list action
        this.modalClose();
        console.log('clicked', city);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    activityIndicator: {
        marginTop: 20,
    },
    noResultContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    cityListItemContainer: {
        height: 42,
        paddingLeft: 10,
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cityListItemContent: {
        flexDirection: 'row',
    },
    cityListItemTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        paddingHorizontal: 10,
    }
});
