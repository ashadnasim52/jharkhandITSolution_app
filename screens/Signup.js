import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Layout, Card, Input, Button, Text} from '@ui-kitten/components';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const handleSignUp = async () => {
    try {
      if (!email)
        return Snackbar.show({
          text: 'Please provide email',
          textColor: 'white',
          backgroundColor: 'red',
        });
      if (!name)
        return Snackbar.show({
          text: 'Please provide name',
          textColor: 'white',
          backgroundColor: 'red',
        });
      if (password !== confirmPassword)
        return Snackbar.show({
          text: 'Both password and confirm Password is not same',
          textColor: 'white',
          backgroundColor: 'red',
        });
      if (!password)
        return Snackbar.show({
          text: 'Please provide password',
          textColor: 'white',
          backgroundColor: 'red',
        });
      const {data} = await axios.post('auth/signup', {
        email,
        password,
        confirmPassword,
        name,
      });
      console.log({data});

      if (data.error)
        return Snackbar.show({
          text: data.message,
          textColor: 'white',
          backgroundColor: 'red',
        });

      Snackbar.show({
        text: data.message,
        textColor: 'white',
        backgroundColor: 'green',
      });

      return navigation.navigate('Signin');
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/login.png')}
            style={{
              height: 300,
              width: '80%',
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
              marginBottom: 25,
            }}>
            Create Your Account
          </Text>
          {/* <Text
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
        </Text> */}
          <View
            style={{
              paddingHorizontal: 10,
              marginHorizontal: 20,
            }}>
            <Input
              placeholder="Enter Your Name"
              value={name}
              onChangeText={nextValue => setName(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Enter Your Email"
              value={email}
              onChangeText={nextValue => setEmail(nextValue)}
              keyboardType="email-address"
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Enter Your Password"
              value={password}
              onChangeText={nextValue => setPassword(nextValue)}
              keyboardType="visible-password"
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChangeText={nextValue => setConfirmPassword(nextValue)}
              keyboardType="visible-password"
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Button
              onPress={() => {
                handleSignUp();
              }}
              style={{
                marginVertical: 10,
              }}>
              Sign Up
            </Button>
            <Text
              status={'basic'}
              category="p1"
              appearance={'alternative'}
              style={{
                textAlign: 'center',
                // textTransform: 'uppercase',
                marginVertical: 10,
              }}
              onPress={() => {
                navigation.navigate('Signin');
              }}>
              Have an account, Use here
            </Text>
          </View>
        </Layout>
      </Layout>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
