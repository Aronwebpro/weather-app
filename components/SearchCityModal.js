import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    ScrollView,
    Modal,
} from 'react-native';
// Expo
import {EvilIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo';
//Constants
import Colors from '../constants/Colors';
//Components
import StyledText from '../components/StyledText';
import SearchInput from '../components/SearchInput';
import SearchCityListItem from '../components/SearchCityListItem';

//api
import {fetchCityData} from "../api/lookups";


export default class SearchCityModal extends React.Component {
    state = {
        citySearch: '',
        cities: [],
        selectedCities: [],
        refreshing: false,
    };

    render() {
        const {
            citySearch,
            cities,
            refreshing,
        } = this.state;
        const {
            closeModal,
            modalVisible,
            addCity,
        } = this.props;
        return (
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <LinearGradient style={styles.container} colors={['#113254', '#020f1a']}>
                    <LinearGradient style={styles.searchContainer} colors={['#817f87', '#092e4f', '#020f1a']}>
                        <SearchInput
                            citySearch={citySearch}
                            clearSearch={this.clearSearch}
                            handleSearch={this.handleSearch}
                            cancel={this.closeModalAndClearSearch}
                        />
                    </LinearGradient>
                    {refreshing ? (
                        <ActivityIndicator size="large" color="#ccc" style={styles.activityIndicator}/>
                    ) : (
                        <ScrollView contentContainerStyle={styles.container}>
                            {cities && cities.length > 0 ? (
                                <FlatList
                                    data={cities}
                                    renderItem={({item}) => (
                                        <SearchCityListItem {...item} addCity={addCity.bind(this, item)}/>
                                    )}
                                    keyExtractor={(item, key) => item.city + key.toString()}
                                />
                            ) : (
                                <View style={styles.noResultContainer}>
                                    <StyledText
                                        style={styles.noResultText}
                                    >
                                        No Results
                                    </StyledText>
                                </View>
                            )}
                        </ScrollView>
                    )}
                </LinearGradient>
            </Modal>
        )
    }

    componentDidMount() {
        this.props.navigation.setParams({
            citySearch: '',
            handleSearch: this.handleSearch,
            clearSearch: this.clearSearch
        })
    }

    searchCity = async (citySearch) => {
        const cities = await fetchCityData(citySearch);
        this.setState({cities, refreshing: false});
    };

    handleSearch = (citySearch) => {
        this.setState({refreshing: true, citySearch});
        this.searchCity(citySearch);
    };

    clearSearch = () => {
        this.setState({cities: [], citySearch: ''})
    };

    closeModalAndClearSearch = () => {
        this.props.closeModal();
        this.setState({citySearch: '', cities: []});
    }
}

SearchCityModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    addCity: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        paddingTop: 22,
    },
    activityIndicator: {
        marginTop: 20,
    },
    noResultContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    noResultText: {
        color: Colors.searchModalText,
    }
});