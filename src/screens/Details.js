import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Details() {
    const onPress = () => {
        console.log("hi")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Details</Text>
            <ScrollView>
                <Text>dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsf dsfdfsfsdf sfsdfsdfsd sdfsdf sdfsdf sdfsdf sdfsd  sdfsd fsdf dsf sdfsdfdsfs</Text>
            </ScrollView>
        </SafeAreaView>
    );
}