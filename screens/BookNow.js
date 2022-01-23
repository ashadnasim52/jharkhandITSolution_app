import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, Card, Input, Button, Text} from '@ui-kitten/components';

const BookNow = ({navigation}) => {
  return (
    <Layout style={styles.layout} level="1">
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/mail.png')}
          style={{
            height: 200,
            width: '50%',
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
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <Text
            status={'primary'}
            category="h1"
            style={{
              textAlign: 'center',
              // textTransform: 'uppercase',
              marginBottom: 25,
              marginTop: 15,
            }}>
            Book Your Service
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            asperiores quisquam quo corrupti suscipit consectetur soluta iste
            unde.{' '}
          </Text>
          <View
            style={{
              paddingHorizontal: 10,
              marginHorizontal: 20,
            }}>
            <Input
              placeholder="Your Name (required)"
              // value={value}
              // onChangeText={nextValue => setValue(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Your Email (required)"
              // value={value}
              // onChangeText={nextValue => setValue(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Phone"
              // value={value}
              // onChangeText={nextValue => setValue(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Services"
              // value={value}
              // onChangeText={nextValue => setValue(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Services"
              // value={value}
              // onChangeText={nextValue => setValue(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Your Message"
              multiline={true}
              textStyle={{minHeight: 64}}
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
                marginVertical: 20,
              }}>
              Send
            </Button>
          </View>
        </ScrollView>
      </Layout>
    </Layout>
  );
};

export default BookNow;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
