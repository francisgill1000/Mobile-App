import React, { useContext } from "react";
import { Text, View, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Splash from "../screens/Splash"
import { AuthContext } from "../context/AuthContext";



const Stack = createNativeStackNavigator();
const Navigation = () => {
  const { token, splashLoading } = useContext(AuthContext);

  console.log(token);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          token 
          ?
            <Stack.Screen name="Home" component={Home} />
            :
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name='Register' component={Register} />
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default Navigation;