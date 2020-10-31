import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import customSideBarMenu from './customSideBarMenu';
import Profile from '../screens/Profile';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen:AppTabNavigator
    },
    SetProfile: {
        screen:Profile
    }
},
{
    contentComponent:customSideBarMenu
},
{
    initialRouteName: 'Home'
}

)
const styles = StyleSheet.create({
 
});
