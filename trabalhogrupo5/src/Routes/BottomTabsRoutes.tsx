import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { Text, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { styled } from "./style";
import Gradiente from '../Assets/gradiente.png'


const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarLabel: '',
          tabBarStyle: {
            backgroundColor: 'grey',
            height: 70
          },
  
          headerBackground: () => (
            <View style={{
              flexDirection: 'row',
              marginTop: 30,
            }}>
              <Image style={styled.gradiente} source={Gradiente} alt="gradiente" />
              <Text style={{ fontSize: 25, color:"#fff"}}>Burroughs AI</Text>
            </View>
          ),
          headerBackgroundContainerStyle: {
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems: 'center'
          },
          title: ''
        }}
  
      >
        <Tab.Screen
        name='TabsHome'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
              <Icon name="home" size={20} color={focused ? "#fff" : '#121212'} />
              <Text style={{ fontSize: 25, color: focused ? "#fff" : '#121212' }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen name='TabsProfile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
              <Icon name="person" size={20} color={focused ? "#fff" : "#121212"} />
              <Text style={{ fontSize: 25, color: focused ? "#fff" : '#121212' }}>Profile</Text>
            </View>
          ),
        }}
      />
        </Tab.Navigator>
    );
}