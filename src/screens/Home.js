import React, { useState, useContext, useEffect } from 'react';
import { TouchableOpacity, View, Linking, TextInput, Button, Alert, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const { token,user, isLoading, logout } = useContext(AuthContext)

    // useEffect(() => {
    //     AsyncStorage.removeItem("token");
    // }, []);

    return (
        <View>
            {/* <Spinner visible={isLoading} /> */}
            <Text>WELCOME, {user.name}</Text>
            <Button title='logout' color='red' onPress={logout} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 20,
        marginTop: -30,
    },
    input: {
        height: 40,
        width: 320,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 5,
        paddingLeft: 10,
    },
    loading: {
        marginTop: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 60,
    },
    button: {
        width: 320,
        backgroundColor: 'purple',
        borderRadius: 8,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Button: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 19,
        marginTop: 30,
        paddingTop: 10

    }
});