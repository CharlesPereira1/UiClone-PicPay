import "react-native-gesture-handler";
import React from "react";
// import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/Routes";
import colors from "./src/styles/colors";

const App: React.FC = () => (
  <>
    <StatusBar style="light" />
    {/* <StatusBar barStyle="light-content" />  //RN/CLI */}
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </>
);

export default App;
