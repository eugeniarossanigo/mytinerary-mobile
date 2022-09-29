import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useGetItineraryUserMutation } from '../redux/itinerariesAPI'
import ItineraryCard from "../components/ItineraryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function MyTinerary() {
    const user = useSelector(state => state.auth.user)
    const userId = user?.id
    console.log(user)
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
                                        <Image style={styles.image} source={{uri: user?.photo}} />
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
                    <Text>This user has 0 itineraries for now</Text>
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
    // profileConteiner: {
    //     width:"95%",
    //     backgroundColor: "#f2f2f2",
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 10,
    //     shadowColor: 'black',
    //     shadowOffset: { width: 2, height: 4 },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 3,
    // },
    // itineraresConteiner: {
    //     width: "80%",
    //     minHeight: 100,
    //     backgroundColor: '#d0d0d0',
    //     borderRadius: 10,
    //     shadowColor: 'black',
    //     shadowOffset: { width: 2, height: 4 },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 3,
    //     marginTop: 20,
    //     marginBottom: 20,
    // },
    // h3: {
    //     color: '#fff',
    // },
    // data: {
    //     flexDirection: 'row',
    //     marginBottom: 10,
    //     marginTop: 10,
    // },
    // email: {
    //     fontWeight: '800',
    // },
    // name:{
    //     fontWeight: '900',
    //     marginTop:15,
    // },
    // title:{
    //     fontWeight: '700',
    //     marginBottom:10,
    // },

})
