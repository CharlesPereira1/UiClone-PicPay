import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/Routes";
import colors from "./src/styles/colors";

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={colors.black} />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </>
);

export default App;
