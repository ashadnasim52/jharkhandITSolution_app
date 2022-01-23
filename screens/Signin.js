import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, Card, Input, Button, Text} from '@ui-kitten/components';

const Signin = ({navigation}) => {
  return (
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
            // value={value}
            // onChangeText={nextValue => setValue(nextValue)}
            status="primary"
            style={{
              paddingVertical: 10,
            }}
          />
          <Input
            placeholder="Enter Your Password"
            // value={value}
            // onChangeText={nextValue => setValue(nextValue)}
            status="primary"
            style={{
              paddingVertical: 10,
            }}
          />
          <Button
            onPress={() => navigation.navigate('Tabs')}
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
  );
};

export default Signin;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
