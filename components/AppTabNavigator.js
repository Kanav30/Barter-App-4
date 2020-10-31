import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "HomeScreen"
        }
    },
    ExchangeScreen: {
        screen: ExchangeScreen,
        navigationOptions: {
            tabBarLabel: "Exchange Screen"
        }
    }
})


