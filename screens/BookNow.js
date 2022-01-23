import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Layout, Card, Input, Button, Text} from '@ui-kitten/components';
import Snackbar from 'react-native-snackbar';
import axios from 'axios';
const BookNow = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [service, setService] = useState(null);
  const [message, setMessages] = useState(null);
  const handleSubmit = async () => {
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
      if (!phone)
        return Snackbar.show({
          text: 'Please provide phone number',
          textColor: 'white',
          backgroundColor: 'red',
        });
      if (!service)
        return Snackbar.show({
          text: 'Please provide your service',
          textColor: 'white',
          backgroundColor: 'red',
        });
      if (!message)
        return Snackbar.show({
          text: 'Please provide message',
          textColor: 'white',
          backgroundColor: 'red',
        });
      const {data} = await axios.post('enquiry/create', {
        email,
        name,
        phone,
        service,
        message,
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
              value={name}
              onChangeText={nextValue => setName(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Your Email (required)"
              value={email}
              keyboardType="email-address"
              onChangeText={nextValue => setEmail(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Phone"
              value={phone}
              keyboardType="phone-pad"
              onChangeText={nextValue => setPhone(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Input
              placeholder="Services"
              value={service}
              onChangeText={nextValue => setService(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />

            <Input
              placeholder="Your Message"
              multiline={true}
              textStyle={{minHeight: 64}}
              value={message}
              onChangeText={nextValue => setMessages(nextValue)}
              status="primary"
              style={{
                paddingVertical: 10,
              }}
            />
            <Button
              onPress={handleSubmit}
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
