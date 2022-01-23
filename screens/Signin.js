import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Layout, Card, Input, Button, Text} from '@ui-kitten/components';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signin = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async () => {
    try {
      if (!email)
        return Snackbar.show({
          text: 'Please provide email',
          textColor: 'white',
          backgroundColor: 'red',
        });
      if (!password)
        return Snackbar.show({
          text: 'Please provide password',
          textColor: 'white',
          backgroundColor: 'red',
        });
      const {data} = await axios.post('auth/signin', {
        email,
        password,
      });
      console.log({data});

      if (data.error)
        return Snackbar.show({
          text: data.message,
          textColor: 'white',
          backgroundColor: 'red',
        });
      await AsyncStorage.setItem('@jwt_key', JSON.stringify(data.token));

      Snackbar.show({
        text: data.message,
        textColor: 'white',
        backgroundColor: 'green',
      });

      return navigation.navigate('Tabs');
    } catch (error) {
      console.error(error);
      Snackbar.show({
        text: 'Something went wrong',
        textColor: 'white',
        backgroundColor: 'red',
      });
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <Layout style={styles.layout} level="1">
        <View>
          <Image
            source={require('../assets/login.png')}
            style={{
              height: 400,
              width: '100%',
            }}
          />
        </View>
        <Layout
          level="2"
          style={{
            justifyContent: 'center',
            flex: 1,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <Text
            status={'primary'}
            category="h1"
            style={{
              textAlign: 'center',
              // textTransform: 'uppercase',
              marginBottom: 5,
              marginTop: 25,
            }}>
            Welcome Back
          </Text>
          <Text
            // status={'basic'}
            category="p1"
            appearance={'hint'}
            style={{
              textAlign: 'center',
              // textTransform: 'uppercase',
              marginBottom: 20,
              // paddingHorizontal: 75,
            }}>
            Please provide your email & password to continue
          </Text>
          <View
            style={{
              paddingHorizontal: 10,
              marginHorizontal: 20,
            }}>
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChangeText={nextValue => setEmail(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
              keyboardType="email-address"
            />
            <Input
              placeholder="Enter Your Password"
              value={password}
              onChangeText={nextValue => setPassword(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
              keyboardType="visible-password"
            />
            <Button
              onPress={() => {
                handleSubmit();
              }}
              style={{
                marginVertical: 10,
              }}>
              Continue
            </Button>
            <Text
              status={'basic'}
              category="p1"
              appearance={'alternative'}
              style={{
                textAlign: 'center',
                // textTransform: 'uppercase',
                marginVertical: 20,
              }}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              Don't have an account, create one in seconds
            </Text>
          </View>
        </Layout>
      </Layout>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
