import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Layout} from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const About = ({navigation}) => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Button
        onPress={() => {
          AsyncStorage.removeItem('@jwt_key');
          navigation.navigate('Signin');
        }}>
        Logout
      </Button>
    </Layout>
  );
};

export default About;

const styles = StyleSheet.create({});
