import { View, Form, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';




export default function SignIn() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.login}>
                    <Text style={styles.title}>WELCOME BACK</Text>
                    <Text style={styles.titleInput}>Email:</Text>
                    <TextInput type="email" placeholder="email" style={[styles.input, styles.inputText]} />
                    <Text style={styles.titleInput}>Password:</Text>
                    <TextInput secureTextEntry={true} placeholder="Password" style={[styles.input, styles.inputText]} />
                    <TouchableOpacity style={styles.botton}><Text style={styles.h3}>LOG IN</Text></TouchableOpacity>
                </View>
            </View>
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
    login: {
        backgroundColor: '#e6e6e6',
        width: '90%',
        height: "50%",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,

    },
    input: {
        width: 350,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 10,
        color: 'black',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    inputText: {
        fontSize: 25,
        textAlign: 'center'
    },
    titleInput: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: 'black',
        fontWeight: '800',
        textTransform: 'uppercase',
        textShadowRadius: 10,
        transform: [{ translateY: 40 }],
        fontWeight: '300',
    },
    botton: {
        margin: 30,
        backgroundColor: '#e6e6e6',
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    h3: {
        color: 'black',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        color: '#78788c',
        fontWeight: '800',
    },

})