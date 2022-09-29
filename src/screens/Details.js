import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetCityIdQuery } from '../redux/citiesAPI'
import { useGetItinerariesMutation } from "../redux/itinerariesAPI";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItineraryCard from "../components/ItineraryCard";

export default function Details(props) {
    const id = props.route?.params.id
    const {data: cities} = useGetCityIdQuery(id)
    let city = cities?.response

    let date = new Date(city?.fundation)
    const [arrayItineraries, setArrayItineraries] = useState([])
    const [showItineraries] = useGetItinerariesMutation()
    const reloaded = useSelector(state => state.reload.reloadState)
    
    const handleShowItineraries = async() =>{
        try {
            let res = await showItineraries(id)
            setArrayItineraries(res?.data.response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleShowItineraries()
    }, [reloaded, city])

    return (
        <>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <View style={styles.detail}>
                        <Image style={styles.image} source={{uri: city?.photo}} />
                        <View style={styles.info}>
                            <View>
                                <Text style={styles.h3}>Name:</Text>
                                <Text style={styles.p}>{city?.city}</Text>
                            </View>
                            <View>
                                <Text style={styles.h3}>Province:</Text>
                                <Text style={styles.p}>{city?.province}</Text>
                            </View>
                            <View>
                                <Text style={styles.h3}>Country:</Text>
                                <Text style={styles.p}>{city?.country}</Text>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <View>
                                <Text style={styles.h3}>Population:</Text>
                                <Text style={styles.p}>{city?.population}</Text>
                            </View>
                            <View>
                                <Text style={styles.h3}>Fundation:</Text>
                                <Text style={styles.p}>{date.getFullYear()}</Text>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <View>
                                <Text style={styles.h3}>Description:</Text>
                                <Text style={styles.p}>{city?.description}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.itinerariesContainer}>
                        {arrayItineraries.map(itinerary => <ItineraryCard itinerary={itinerary}/>)}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d7e7e3',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 15,
        paddingTop: -20
    },
    detail: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingBottom: 10,
        marginBottom: 15
    },
    itinerariesContainer: {
        backgroundColor: '#d7e7e3',
        borderRadius: 10,
        paddingBottom: 10,
        marginBottom: 10
    },
    image: {
        width: 360,
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 20
    },
    info:{
        width: 320,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    h3: {
        color: '#000',
        fontWeight: '700',
    },
    p: {
        color: '#000',
        fontWeight: '300',
        textAlign: 'justify'
    }
});
