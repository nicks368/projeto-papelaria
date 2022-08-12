import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home";
import Contato from "../screens/contato";
import Descricao from "../screens/descricao";
import Sobre from "../screens/sobre";
import Produtos from "../screens/produtos";
import { Entypo, FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <Entypo name="home" style={{fontSize: 25}} color={focused ? '#000' : '#686868'}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Produtos" 
                component={Produtos}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <FontAwesome name="dollar" style={{fontSize: 25}} color={focused ? '#000' : '#686868'}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Descricao" 
                component={Descricao}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <MaterialIcons name="description" style={{fontSize: 25}} color={focused ? '#000' : '#686868'}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Sobre" 
                component={Sobre}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <FontAwesome name="question" style={{fontSize: 25}} color={focused ? '#000' : '#686868'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Contato" 
                component={Contato}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused}) => (
                        <AntDesign name="phone" style={{fontSize: 25}} color={focused ? '#000' : '#686868'}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}