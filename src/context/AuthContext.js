import axios from "axios";
import React, { createContext, useState, useEffect, } from "react";
import { BASE_URL } from "../Config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const endpoint = `${BASE_URL}/user`;


  const register = (name, number, password, password_confirmation) => {
    console.log(number);
    setIsLoading(true);

    axios
      .post(endpoint, {
        name,
        password,
        number,
        password_confirmation
      })
      .then(res => {
        let userInfo = res.data
        AsyncStorage.setItem(`userInfo`, JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(({ response }) => {
        console.log(`register error ${JSON.stringify(response.data.message)}`);
        setIsLoading(false);
        Alert.alert('Error', response.data.message);
      })
  };

  const me = async () => {

    let token = await AsyncStorage.getItem(`token`);

    try {

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      // Make a POST request to your server's logout endpoint
      const { data } = await axios.get('https://backend.florencetech.online/api/me', { headers });

      // Assuming your server returns a success message upon successful logout
      if (data) {

        setUser(data.user);
        Alert.alert("Welcome", data.user.name)

        return;
      } else {
        Alert.alert('Logout', 'Failed to logout. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', token);
    }
  };

  const login = (number, password) => {

    // setIsLoading(true);

    axios
      .post(`${BASE_URL}/login`, {
        number,
        password,
      })
      .then(({ data }) => {
        AsyncStorage.setItem(`token`, data);
        setIsLoading(false);
        setToken(data);
        me();
      })
      .catch(({ response }) => {
        console.log(`login error ${JSON.stringify(response.data.message)}`);
        setIsLoading(false);
      })
  };
  // const logout = () => {
  //    setIsLoading(true);
  //   axios.get(`${BASE_URL}/logout`,{},
  //       {headers: { Authorization: `Bearer ${token}` },},)
  //     .then(res => {
  //       console.log(res.data);
  //       AsyncStorage.removeItem('token');
  //       setToken({});
  //       setIsLoading(false);
  //     })
  //     .catch(e => {
  //       console.log(`logout error ${e}`);
  //       setIsLoading(false);
  //     })
  // };

  const logout = async () => {

    let token = await AsyncStorage.getItem(`token`);

    try {

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      // Make a POST request to your server's logout endpoint
      const { data } = await axios.get('https://backend.florencetech.online/api/logout', { headers });

      // Assuming your server returns a success message upon successful logout
      if (data) {
        await AsyncStorage.removeItem(`token`);
        Alert.alert('Logout', 'You have been logged out successfully');
        setToken(null);
        return;
      } else {
        Alert.alert('Logout', 'Failed to logout. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', token);
    }
  };
  const IsLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let token = await AsyncStorage.getItem('token');
      token = JSON.parse(token);
      if (token) {
        setToken(token);
      }
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`)
    }
  };
  useEffect(() => {
    IsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{
      isLoading,
      token,
      user,
      register,
      login,
      logout,
      splashLoading,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
