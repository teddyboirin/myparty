import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import Home from "../Home";
import JoinUs from "../JoinUs/JoinUs";
import {View} from "react-native";
const Drawer = createDrawerNavigator();

export default class Navigation extends React.Component {

    render() {

        const Theme = {
            colors: {
                primary: 'white',
                card: '#FD867E',
                text: 'white',
            },
        };

        const options = {
            title: "teddy"
        };
        return (
            <NavigationContainer theme={Theme} >
                <Drawer.Navigator initialRouteName="Home" drawerType={"slide"} options={options}>
                    <Drawer.Screen name="Home" component={Home} options={{ title: "Accueil" }}/>
                    <Drawer.Screen name="JoinUs" component={JoinUs} options={{ title: "Nous rejoindre" }}/>
                </Drawer.Navigator>

            </NavigationContainer>
        );
    }

}


