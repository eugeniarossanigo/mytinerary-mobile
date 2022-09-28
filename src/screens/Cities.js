import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CityCard from '../components/CityCard';
import InputForm from '../components/inputForm';
import { useGetAllCitiesQuery, useGetCityNameQuery } from '../redux/citiesAPI'

export default function Cities() {
    const [inputParam, setInputParam] = useState("")
    const searchParam = (param) => {
        setInputParam(param)
    }

    const {data: cities} = useGetAllCitiesQuery()
    const {data: cityQuery} = useGetCityNameQuery(inputParam)
    let citiesArray = cityQuery? cityQuery : cities

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <InputForm searchParam={searchParam} />
                {/* <FlatList data={cities} numColumns={1} showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id} renderItem={(item) => <CityCard city={item.city} province={item.province} />} /> */}
                {citiesArray?.response.map(city => <CityCard city={city} />)}
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d7e7e3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
    }
});
  