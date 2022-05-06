import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import options from './Navigation';
import Home from './src/Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar backgroundColor='#1b1b1b' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={options} name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

