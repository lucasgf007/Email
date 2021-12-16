import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import Email from "./screen/Email";
import Envio from "./screen/Envio";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Email" component={Email} options={{ title: 'Voltar' }}/>
        <Stack.Screen name="Envio" component={Envio} options={{ title: 'Voltar' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}