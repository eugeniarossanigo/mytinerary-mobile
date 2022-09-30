import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useUserSignupMutation } from "../redux/usersAPI";

export default function SignUp() {
    const navigation = useNavigation()

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [photo, setPhoto] = useState("")
    const [country, setCountry] = useState("")
    const [userSignup] = useUserSignupMutation()

    const handleSignup = async(e) => {
        e.preventDefault()
        let newUserData = {
            name: name.trim(),
            lastName: lastName.trim(),
            mail: mail.trim().toLowerCase(),
            password: password.trim(),
            photo: photo.trim(),
            country: country.trim(),
            role: "user",
            from: "form"
        }
        await userSignup(newUserData)
        .then(response => {
            navigation.navigate('SignIn')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.signup}>
                        <Text style={styles.title}>CREATE YOUR ACCOUNT</Text>
                        <View>
                            <Text style={styles.titleInput}>Name:</Text>
                            <TextInput type="text" placeholder="e.g Maria" style={[styles.input, styles.inputText]} onChangeText={(text) => setName(text)} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>LastName:</Text>
                            <TextInput type="text" placeholder="e.g Phillips" style={[styles.input, styles.inputText]} onChangeText={(text) => setLastName(text)}/>
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Email:</Text>
                            <TextInput type="email" placeholder="mariaphilips@gmail.com" style={[styles.input, styles.inputText]} onChangeText={(text) => setMail(text)} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Password:</Text>
                            <TextInput secureTextEntry={true} placeholder="Password" style={[styles.input, styles.inputText]} onChangeText={(text) => setPassword(text)} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Photo:</Text>
                            <TextInput type="text" placeholder="must be a url" style={[styles.input, styles.inputText]} onChangeText={(text) => setPhoto(text)} />
                        </View>
                        <View>
                            <Text style={styles.titleInput}>Country:</Text>
                            <TextInput type="text" placeholder="Argentina" style={[styles.input, styles.inputText]} onChangeText={(text) => setCountry(text)}/>
                        </View>
                        <TouchableOpacity style={styles.botton} onPress={handleSignup}><Text style={styles.h3}>SIGN UP</Text></TouchableOpacity>
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