/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Login } from './src/Login';
import { MainContent } from './src/MainContent';
import { NavigateableTravelCard } from './src/NavigateableTravelCard';

const Stack = createNativeStackNavigator();

interface User {
  username: string;
  miles: number;
}

interface LoginContextI extends User {
  setUser: () => void;
}

export const LoginContext = React.createContext<LoginContextI>(null);

const App = () => {
  const [user, setUser] = useState<User>({
    username: null,
    miles: 0
  });

  return (
    <LoginContext.Provider value={{ ...user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="MainContent"
            component={MainContent}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="NavigateableTravelCard"
            component={NavigateableTravelCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContext.Provider>
  );
};

export default App;
