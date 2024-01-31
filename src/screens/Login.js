import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, ActivityIndicator, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Login(props) {
  const [number, setNumber] = useState("0313136762");
  const [password, setPassword] = useState("12121212");

  const { isLoading, login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      {/* <Image source={require('../assets/pic.png')} style={styles.image} /> */}
      <TextInput
        style={styles.input}
        placeholder="Number"
        onChangeText={(text) => setNumber(text)}  
        value={number}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}  onPress={() => login(number, password)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => props.navigation.navigate("Register")}>CLICK HERE TO REGISTER</Text>
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
