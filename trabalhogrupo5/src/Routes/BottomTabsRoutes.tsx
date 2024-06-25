import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { Text, View, Image } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { styled } from "./style";
import Gradiente from "../Assets/gradiente.png";
import { Catalogo } from "../Pages/Catalogo";

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "grey",
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="TabsHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Icon
                name="home"
                size={20}
                color={focused ? "#fff" : "#121212"}
              />
              <Text
                style={{ fontSize: 25, color: focused ? "#fff" : "#121212" }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="TabsProfile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Icon
                name="person"
                size={20}
                color={focused ? "#fff" : "#121212"}
              />
              <Text
                style={{ fontSize: 25, color: focused ? "#fff" : "#121212" }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TabsCatalogo"
        component={Catalogo}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Icon
                name="person"
                size={20}
                color={focused ? "#fff" : "#121212"}
              />
              <Text
                style={{ fontSize: 25, color: focused ? "#fff" : "#121212" }}
              >
                Catalogo
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
