import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, Card, Input, Button, Text} from '@ui-kitten/components';

const SignUp = ({navigation}) => {
  return (
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
            // value={value}
            // onChangeText={nextValue => setValue(nextValue)}
            status="primary"
            style={{
              paddingVertical: 10,
            }}
          />
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
          <Input
            placeholder="Confirm Your Password"
            // value={value}
            // onChangeText={nextValue => setValue(nextValue)}
            status="primary"
            style={{
              paddingVertical: 10,
            }}
          />
          <Button
            onPress={() => {}}
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
  );
};

export default SignUp;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
