import {NavigationContainer} from '@react-navigation/native';

import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Root from './navigation/Root';
import {PRIMARY} from './utils/Theme';
import axios from 'axios';
import {API} from './utils/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import jwt_decode from 'jwt-decode';
import Loading from './screens/Loading';

axios.defaults.baseURL = API;

export default () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    checkUser().then(res => {
      if (res) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });
  }, []);
  const checkUser = async () => {
    let token = await AsyncStorage.getItem('@jwt_key');
    // token = JSON.parse(token);
    console.log({
      token,
    });
    if (!token) return false;
    // var {decoded} = jwt_decode(token);
    // console.log({
    //   decoded,
    // });
    // if (Date.now() >= decoded.exp * 1000) {
    // Token not expired...
    axios.defaults.headers.common['Authorization'] = token;

    return true;
    // } else {
    //   AsyncStorage.removeItem('@jwt_key');

    //   Snackbar.show({
    //     text: 'Please Signin again',
    //     textColor: 'white',
    //     backgroundColor: 'red',
    //   });
    //   return false;
    // }
  };
  if (isLoading) return <Loading />;

  return (
    <>
      <StatusBar backgroundColor={PRIMARY} />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <Root isAuthenticated={isAuthenticated} />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
