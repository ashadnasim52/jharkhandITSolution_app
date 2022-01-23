import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../tabs/Home';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';
import Tabs from '../screens/Tabs';
import {PRIMARY, WHITE} from '../utils/Theme';
import BookNow from '../screens/BookNow';
import Loading from '../screens/Loading';

const Stack = createStackNavigator();

const Root = ({isAuthenticated}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: PRIMARY,
        },
        headerTintColor: WHITE,
        headerBackTitle: 'Back',
        // header: props => <Header {...props} />,
        headerShown: false,
      }}
      initialRouteName={isAuthenticated ? 'Tabs' : 'Signin'}>
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="BookNow" component={BookNow} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default Root;

const styles = StyleSheet.create({});
