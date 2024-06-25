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
          backgroundColor: "#003452",
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
                marginTop: 15,
              }}
            >
              <Icon
                name="home"
                size={20}
                color={focused ? "#fff" : "#FF7E04"}
              />
              <Text
                style={{ fontSize: 20, color: focused ? "#fff" : "#FF7E04" }}
              >
                Promoções
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
                marginTop: 15,
              }}
            >
              <Icon
                name="person"
                size={20}
                color={focused ? "#fff" : "#FF7E04"}
              />
              <Text
                style={{ fontSize: 20, color: focused ? "#fff" : "#FF7E04" }}
              >
                Perfil
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
                marginTop: 15,
              }}
            >
              <Icon
                name="person"
                size={20}
                color={focused ? "#fff" : "#FF7E04"}
              />
              <Text
                style={{ fontSize: 20, color: focused ? "#fff" : "#FF7E04" }}
              >
                Catálogo
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
