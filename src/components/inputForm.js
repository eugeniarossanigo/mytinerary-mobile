import React from "react"
import { StyleSheet, TextInput, View } from 'react-native';

export default function InputForm({searchParam}) {

    return (
        <>
            <View>
                <TextInput style={styles.input} type="search" placeholder="🔍 e.g. Rosario" onChangeText={e => searchParam(e)} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 15,
        borderColor: 'orange'
    }
});