import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, Image, Dimensions, Animated, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const img = [
    'http://drive.google.com/uc?export=view&id=1Zq6t_G9QlKzcHecGFZC9HehXwWQY-m00',
    'http://drive.google.com/uc?export=view&id=1DDCP1TAeMzlzKW0ycXWpB0wal7Kf6qlV',
    'http://drive.google.com/uc?export=view&id=1kGALp0t60av9-D-0v_kh3eOriMlWwN9h',
    'http://drive.google.com/uc?export=view&id=1buqXzDnwXoZwjIm_PBM1D2kXG71Su5ew',
    'http://drive.google.com/uc?export=view&id=1i_2QDNcbsiGdIps7utlJ8jAqXJt_XDhr'
];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const widthCont = width * 0.7;
const space = 5;

export default function Carrusel({ cities }) {
    const navigation = useNavigation()
    const photos = cities?.map(item => ([item.photo, item.city, item._id]))

    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={StyleSheet.container}>
            <StatusBar hidden />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: { x: scrollX }
                        }
                    }], { useNativeDriver: true })}
                data={photos}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 50 }}
                decelerationRate={0}
                snapToInterval={widthCont}
                scrollEventThrottle={16}
                keyExtractor={(item => item)}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * widthCont,
                        index * widthCont,
                        (index + 1) * widthCont,
                    ];
                    const outputRange = [0, 0, 0];
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange,
                    });
                    return (
                        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', { id: item[2] })}>
                            <View style={styles.carrusel}>
                                <View style={{ width: widthCont, shadowColor: 'black', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.5, shadowRadius: 3, }}>
                                    <Animated.View style={{ marginHorizontal: space, padding: space, borderRadius: 34, alignItems: "center", transform: [{ translateY }], }}>
                                        <Image source={{ uri: item[0] }} style={styles.posterImage} />
                                    </Animated.View>
                                    <Text style={styles.textCarrusel}>{item[1]}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f4ef",
        alignItems: "center",
        justifyContent: "center",

    },
    posterImage: {
        width: "100%",
        height: widthCont * .7,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
    },
    textCarrusel: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: '800',
        width: 300,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
    },
    carrusel: {
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d7e7e3",
    }
})