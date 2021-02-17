import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Pay from "./pages/Pay";

import PayButton from "./components/PayButton";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

const Routes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        if (route.name === "Pay") {
          return (
            <PayButton
              onPress={() => navigation.navigate("Pay")}
              focused={focused}
            />
          );
        }

        const { lib: Icon, name } = icons[route.name];
        return <Icon name={name} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      style: {
        backgroundColor: "#131418",
        borderTopColor: "rgba(255,255,255,0)",
      },
      activeTintColor: "#fff",
      inactiveTintColor: "#92929c",
    }}
  >
    <Tab.Screen name="Home" options={{ title: "Início" }} component={Home} />
    <Tab.Screen
      name="Wallet"
      options={{ title: "Carteira" }}
      component={Wallet}
    />
    <Tab.Screen name="Pay" options={{ title: "" }} component={Pay} />
    <Tab.Screen
      name="Notifications"
      options={{ title: "Notificações" }}
      component={Pay}
    />
    <Tab.Screen
      name="Settings"
      options={{ title: "Ajustes" }}
      component={Pay}
    />
  </Tab.Navigator>
);

export default Routes;
