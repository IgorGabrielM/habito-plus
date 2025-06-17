import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import CadastroScreen from './screens/create-habit';
import EstatisticasScreen from './screens/statiscs';
import {NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Cadastro" component={CadastroScreen} />
                    <Stack.Screen name="Estatísticas" component={EstatisticasScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}
