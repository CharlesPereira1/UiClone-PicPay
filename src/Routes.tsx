import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Pay from "./pages/Pay";

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Wallet" component={Wallet} />
    <Tab.Screen name="Pay" component={Pay} />
  </Tab.Navigator>
);

export default Routes;
