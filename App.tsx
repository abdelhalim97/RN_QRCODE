import React, { type PropsWithChildren } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup, Welcome, Login, Scanner } from './src/components';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: true }} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
