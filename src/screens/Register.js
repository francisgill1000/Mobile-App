import React, { useState, useContext, } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, ActivityIndicator, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Register(props) {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setConfirmPassword] = useState(null);

  const { isLoading, register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      {/* <Image source={require('./img.png')} style={styles.image} /> */}
      <TextInput
        style={styles.input}
        placeholder="full name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        onChangeText={(text) => setNumber(text)}
        value={number}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="confirm password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={password_confirmation}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => register(name, number, password, password_confirmation)} style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => props.navigation.navigate("Login")}>CLICK HERE TO LOGIN</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    width: 320,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,

  },
  button: {
    width: 320,
    backgroundColor: 'black',
    borderRadius: 8,
    margin: 10,
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
});
