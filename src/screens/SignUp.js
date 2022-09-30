import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUp() {
    return (
        <>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.signup}>
                        <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
                        <View>
                            <Text style={styles.titleInput}>Name:</Text>
                            <TextInput type="email" placeholder="e.g Maria" style={[styles.input, styles.inputText]} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>LastName:</Text>
                            <TextInput type="email" placeholder="e.g Phillips" style={[styles.input, styles.inputText]} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Email:</Text>
                            <TextInput type="email" placeholder="mariaphilips@gmail.com" style={[styles.input, styles.inputText]} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Password:</Text>
                            <TextInput secureTextEntry={true} placeholder="Password" style={[styles.input, styles.inputText]} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Photo:</Text>
                            <TextInput type="email" placeholder="must be a url" style={[styles.input, styles.inputText]} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Country:</Text>
                            <TextInput type="email" placeholder="Argentina" style={[styles.input, styles.inputText]} />
                        </View>
                        <TouchableOpacity style={styles.botton}><Text style={styles.h3}>SIGN UP</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
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
    signup: {
        backgroundColor: '#e6e6e6',
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
        textAlign: 'center',
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
        width: 250,
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
        borderBottomColor: '#377771',
        borderBottomWidth: 2,
    },
})