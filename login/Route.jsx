import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login/Login";
import Register from "./src/Register/Register";

const Stack = createStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={header.Login} name="Login" component={Login} />
                <Stack.Screen options={header.Register} name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const header = {
    Login: {
        headerTitle: 'Welcome',
        headerTitleAlign: 'center'
    },
    Register: {
        headerTitle: 'Sign Up',
        headerTitleAlign: 'center'
    }
}