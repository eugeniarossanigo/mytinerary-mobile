import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ActivityCard({activity}) {

    return (
        <>
            <View key={activity._id} style={styles.activityContainer}>
                <Text style={styles.h2}>{activity.name}</Text>
                <Image style={styles.image} source={{uri: activity?.photo}} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    activityContainer: {
        width: 320,
        backgroundColor: '#d7e7e3',
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginBottom: 10,
    },
    h2: {
        color: '#dfaa5b',
        fontWeight: '800',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        textShadowColor: '#ba3f1d',
        textShadowRadius: 1
    },
    image: {
        width: 270,
        height: 180,
        borderRadius: 5,
        marginBottom: 20
    },
});
