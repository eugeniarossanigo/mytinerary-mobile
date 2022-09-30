import { StyleSheet, Text, Image, ScrollView, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Cities from './Cities';
import Carrusel from '../components/Carrusel';
import { useGetAllCitiesQuery } from '../redux/citiesAPI';

export default function Home() {
    const { data: cities } = useGetAllCitiesQuery()
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.welcome}>
                    <ImageBackground source={require("../../assets/nature1.jpg")} resizeMode="cover" style={styles.image}>
                        <Image source={require("../../assets/logo-white.png")} style={styles.logo} />
                        <Text style={styles.p}>Find your perfect trip designed by insiders who know and love their cities!</Text>
                        <TouchableOpacity style={styles.botton} onPress={() => navigation.navigate(Cities)}><Text style={styles.h3}>START TRIP</Text></TouchableOpacity>
                    </ImageBackground>
                </View>
                    <Text style={styles.titleCarrusel}>POPULAR MYTINERARIES</Text>
                <Carrusel style={styles.carrusel} cities={cities?.response} />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d7e7e3',
        height: "100%",
        marginTop:-50,
    },
    text: {
        color: 'red',
    },
    image: {
        width: "100%",
        height: 400,

    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 140,
        height: 100,
        justifyContent: 'center',
        alignSelf:'center',
        marginTop:100,
    },
    p: {
        marginTop:20,
        textAlign:'center',
        alignSelf: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
        width: 300,
        textShadowColor: '#000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10

    },
    botton: {
        marginTop:30,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 166, 0, 0.5)',
        borderRadius: 10,
    },
    h3: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 12,
        color: '#fff',
        fontWeight: '800',
        textTransform: 'uppercase',
        textShadowColor: '#000',
        textShadowRadius: 10
    },
    titleCarrusel:{
        textAlign:"center",
        fontSize: 20,
        paddingTop:15,
        fontWeight: '800',
        letterSpacing: 3,
    }
    
});


