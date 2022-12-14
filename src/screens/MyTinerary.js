import { View, StyleSheet, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useGetItineraryUserMutation } from '../redux/itinerariesAPI'
import ItineraryCard from "../components/ItineraryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function MyTinerary() {
    const user = useSelector(state => state.auth.user)
    const userId = user?.id
    const [arrayItineraries, setArrayItineraries] = useState([])

    const [showUserItinearies] = useGetItineraryUserMutation()
    const reloaded = useSelector(state => state.reload.reloadState)
    const dispatch = useDispatch()

    const handleShowItineraries = async () => {
        try {
            let res = await showUserItinearies(userId)
            setArrayItineraries(res?.data.response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleShowItineraries()
    }, [reloaded])

    return (
        <>
            <ScrollView>
                {arrayItineraries && arrayItineraries.length > 0 ?
                    <>
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.names}>{arrayItineraries[0].user.name} {arrayItineraries[0].user.lastName}</Text>
                            </View>
                            <View>
                                <Text style={styles.titleTinerary}>My Itinerary</Text>
                            </View>
                            <View style={styles.profileConteiner}>
                                <View style={styles.profile}>
                                    <View>
                                        <Image style={styles.image} source={{ uri: user?.photo }} />
                                    </View>
                                    <View style={styles.data}>
                                        <Text style={styles.email}>Email: </Text>
                                        <Text>{arrayItineraries[0].user.mail}</Text>
                                    </View>
                                    <View style={styles.data}>
                                        <Text style={styles.email}>Country: </Text>
                                        <Text>{arrayItineraries[0].user.country}</Text>
                                    </View>
                                    <View style={styles.itineraresConteiner}>
                                        {arrayItineraries.map(itinerary => (
                                            <ItineraryCard itinerary={itinerary} />
                                        ))}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                    :
                    <View style={styles.noItinerary}>
                        <Text style={styles.textNoItinerary}>Hi {user?.name}! You have 0 itineraries for now</Text>
                    </View>
                }
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#d7e7e3',
    },
    profile: {
        backgroundColor: '#d7e7e3',
        width: '90%',
        minHeight: '60%',
        alignItems: "center",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginTop: 20,
        marginBottom: 130,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        marginTop: 10,
        marginBottom: 10,
    },
    names: {
        fontSize: '25',
        fontWeight: '900',
        marginTop: 15,
    },
    titleTinerary: {
        fontSize: '20',
        fontWeight: '700',
        marginBottom: 20,
        marginTop: 20,
    },
    data: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
    email: {
        fontWeight: '800',
    },
    noItinerary:{
        width: '100%',
        height:800,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#d7e7e3',
    },
    textNoItinerary:{
        marginTop:600,
        fontSize: '20',
        fontWeight: '700',
        height: "100%",
    },
})
