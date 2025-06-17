import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import CadastroScreen from './screens/create-habit';
import EstatisticasScreen from './screens/statiscs';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer> {/* Este deve ser o único NavigationContainer */}
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="Estatísticas" component={EstatisticasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
