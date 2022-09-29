import { View, Form, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "../redux/usersAPI";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { setCredentials } from '../redux/userSlice';

export default function SignIn() {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [userLogin] = useUserLoginMutation()

    const handleSignin = async(e) => {
        e.preventDefault()
        let newUserData = {
            mail: email.trim(),
            password : pass.trim()
        }
        await userLogin(newUserData)
        .then(response => {
            AsyncStorage.setItem('token', response.data.response.token)
            dispatch(setCredentials(response.data.response.user))
            navigation.navigate('Home')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.login}>
                    <Text style={styles.title}>WELCOME BACK</Text>
                    <View>
                        <Text style={styles.titleInput}>Email:</Text>
                        <TextInput type="email" placeholder="email" style={[styles.input, styles.inputText]} 
                        onChangeText={(text) => setEmail(text)} />
                    </View>
                    <View>
                        <Text style={styles.titleInput}>Password:</Text>
                        <TextInput secureTextEntry={true} placeholder="Password" style={[styles.input, styles.inputText]}
                        onChangeText={(text) => setPass(text)} />
                    </View>
                    <TouchableOpacity style={styles.botton} onPress={handleSignin}><Text style={styles.h3}>LOG IN</Text></TouchableOpacity>
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
        borderBottomColor: '#377771',
        borderBottomWidth: 2,
    },

})