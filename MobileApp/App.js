import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // HomeScreen
import LoginScreen from './screens/LoginScreen'; // LoginScreen
import SignUpScreen from './screens/SignUpScreen'; // SignUpScreen
import UploadScreen from './screens/UploadScreen'; // UploadScreen
import ImageDisplayScreen from './screens/ImageDisplayScreen'; // ImageDisplayScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Make sure each screen is directly inside the navigator */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="ImageDisplay" component={ImageDisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
