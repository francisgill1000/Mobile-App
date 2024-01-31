
import React from "react";
import { View ,StatusBar} from "react-native";
import Navigation from "./src/components/Navigation";
import { AuthProvider } from "./src/context/AuthContext";

export default App = () => {

  return (
    <AuthProvider>
      <StatusBar backgroungColor='#0bcee' />
      <Navigation />
    </AuthProvider>
  );
};