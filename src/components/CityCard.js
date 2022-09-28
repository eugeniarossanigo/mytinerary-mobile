import { StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// import Details from './screens/Details';

export default function CityCard({city}) {
    const navigation = useNavigation()

    // const onPress = () => {
    //     console.log("hi")
    // }

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', {id: city._id})}>
            {/* <View style={styles.container}> */}
                {/* <d className="card__background" style={{ backgroundImage: `url(${city.photo})`}} ></div> */}
                <Image style={styles.image} source={{uri: city.photo}} />
                <View style={styles.names} key={city._id}>
                    <Text style={styles.h2}>{city.province}</Text>
                    <Text style={styles.h3}>{city.city}</Text>
                </View>
            {/* </View> */}
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 2,
        marginBottom: 2,
        backgroundColor: '#d7e7e3'
    },
    names: {
        transform: [{ translateY: -190}],
        zIndex: 1
    },
    h2: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '300',
        width: 300,
        textAlign: 'left',
        textTransform: 'uppercase',
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    h3: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        width: 100,
        textAlign: 'left',
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    image: {
        width: 330,
        height: 200,
        borderRadius: 10,
    }
});
