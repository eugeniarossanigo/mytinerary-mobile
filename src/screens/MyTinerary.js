import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";
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

    const handleShowItineraries = async() =>{
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
                        <Text style={styles.name}>{arrayItineraries[0].user.name} {arrayItineraries[0].user.lastName}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>My Itinerary</Text>
                    </View>
                    <View style={styles.profile_conteiner}>
                        <View style={styles.profile}>
                            <View>
                                <Image style={styles.image} source={arrayItineraries[0].user.photo} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.email}>Email:</Text>
                                <Text>{arrayItineraries[0].user.mail}</Text>
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.email}>Country:</Text>
                                <Text>{arrayItineraries[0].user.country}</Text>
                            </View>
                            <View style={styles.itinerary}>
                            {arrayItineraries.map(itinerary => (
                                <ItineraryCard itinerary={itinerary}/>
                                // <View>
                                //     <Text style={styles.text_city}>{itinerary.city.city}</Text>
                                // </View>
                                // <View style={styles.conteiner_itinerary}>
                                //     <Text style={styles.text_itinerary}>{itinerary.name}</Text>
                                // </View>
                                // <View style={styles.conteiner_button}>
                                //     <TouchableOpacity style={styles.button}><Text style={styles.h3}>EDIT</Text></TouchableOpacity>
                                //     <TouchableOpacity style={styles.button}><Text style={styles.h3}>DELETE</Text></TouchableOpacity>
                                // </View>
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
    profile_conteiner: {
        width: "95%",
        backgroundColor: "#f2f2f2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    itinerary: {
        width: "80%",
        minHeight: 100,
        backgroundColor: '#d0d0d0',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        marginTop: 20,
        marginBottom: 20,
    },
    text_city: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: '800',
        marginBottom: 15,
        marginTop: 15,
    },
    conteiner_itinerary: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "70%",
        height: 40,
        backgroundColor: '#dfaa5e',
        borderRadius: 10,
        alignSelf: 'center',
    },
    text_itinerary: {
        fontWeight: '900',
        color: '#d0d0d0',
    },
    conteiner_button: {
        flexDirection: 'row',
    },
    button: {
        width: 60,
        height: 30,
        backgroundColor: '#377771',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 55,
        marginTop: 15,
        marginBottom: 15,

    },
    h3: {
        color: '#fff',
    },
    data: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
    email: {
        fontWeight: '800',
    },
    name:{
        fontWeight: '900',
        marginTop:15,
    },
    title:{
        fontWeight: '700',
        marginBottom:10,
    },

})
