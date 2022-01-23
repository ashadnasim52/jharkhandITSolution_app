import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Layout, Card, Icon, Button, Text} from '@ui-kitten/components';
import {SliderBox} from 'react-native-image-slider-box';
import {PRIMARY, SECONDARY, WHITE} from '../utils/Theme';

const Home = ({navigation}) => {
  const [images, setImages] = useState([
    'https://picsum.photos/id/1/800/400',
    'https://picsum.photos/id/0/800/400',
    'https://picsum.photos/id/10/800/400',
    'https://picsum.photos/id/100/800/400',
    'https://picsum.photos/id/1059/800/400',
    'https://picsum.photos/id/1060/800/400',
    'https://picsum.photos/id/1073/800/400',
  ]);
  const bookNow = () => {
    navigation.navigate('BookNow');
  };
  return (
    <Layout style={styles.layout} level="1">
      <View>
        <SliderBox images={images} />
      </View>
      <Layout
        level="2"
        style={{
          justifyContent: 'flex-start',
          // alignItems: 'center',
          flex: 1,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingTop: 20,
          marginBottom: 45,
        }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <Text
            appearance={'hint'}
            status={'basic'}
            category="h6"
            style={{
              textAlign: 'center',
              marginBottom: 20,
            }}>
            OUR SERVICES & EXPERTISE
          </Text>

          <Card style={styles.card} status="primary">
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderColor: PRIMARY,
                  borderWidth: 0.8,
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  name="award-outline"
                  fill={PRIMARY}
                />
              </View>
            </View>
            <Text
              status={'info'}
              category="p1"
              style={{
                textAlign: 'center',
                paddingTop: 20,
                paddingBottom: 10,
                color: SECONDARY,
              }}>
              Mobile Application Development
            </Text>
            <Text
              status={'info'}
              category="s1"
              style={{
                textAlign: 'center',
                color: WHITE,
              }}>
              The smartphone has permeated all sectors of society and businesses
              need to work on creating app.
            </Text>
            <Text
              status={'info'}
              category="c1"
              style={{
                textAlign: 'center',
                color: WHITE,
                marginTop: 20,
                marginBottom: 10,
              }}>
              Time is always of the essence so you must contact Jharkhand IT
              Solutions .
            </Text>

            <Button style={styles.button} status="primary" onPress={bookNow}>
              Book Now
            </Button>
          </Card>
          <Card style={styles.card} status="info">
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderColor: PRIMARY,
                  borderWidth: 0.8,
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  name="google-outline"
                  fill={PRIMARY}
                />
              </View>
            </View>
            <Text
              status={'info'}
              category="p1"
              style={{
                textAlign: 'center',
                paddingTop: 20,
                paddingBottom: 10,
                color: SECONDARY,
              }}>
              Responsive Website Designing{' '}
            </Text>
            <Text
              status={'info'}
              category="s1"
              style={{
                textAlign: 'center',
                color: WHITE,
              }}>
              We design your website to work on all devices.
            </Text>
            <Text
              status={'info'}
              category="c1"
              style={{
                textAlign: 'center',
                color: WHITE,
                marginTop: 20,
                marginBottom: 10,
              }}>
              Around the World, three out of four people use their mobile
              devices for internet browsing every day.
            </Text>

            <Button style={styles.button} status="primary" onPress={bookNow}>
              Book Now
            </Button>
          </Card>
          <Card style={styles.card} status="basic">
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderColor: PRIMARY,
                  borderWidth: 0.8,
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  name="globe-outline"
                  fill={PRIMARY}
                />
              </View>
            </View>
            <Text
              status={'info'}
              category="p1"
              style={{
                textAlign: 'center',
                paddingTop: 20,
                paddingBottom: 10,
                color: SECONDARY,
              }}>
              E-commerce Development
            </Text>
            <Text
              status={'info'}
              category="s1"
              style={{
                textAlign: 'center',
                color: WHITE,
              }}>
              With businesses vying with one another for creating conspicuous
              web presence.{' '}
            </Text>
            <Text
              status={'info'}
              category="c1"
              style={{
                textAlign: 'center',
                color: WHITE,
                marginTop: 20,
                marginBottom: 10,
              }}>
              Ability to operate on Web standards
            </Text>

            <Button style={styles.button} status="primary" onPress={bookNow}>
              Book Now
            </Button>
          </Card>
        </ScrollView>
      </Layout>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  card: {
    marginVertical: 20,
    marginHorizontal: 10,
    // height: 300,
    width: Dimensions.get('screen').width - 20,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 10,
  },
  button: {
    borderRadius: 5,
    fontSize: 17,
    textTransform: 'uppercase',
    marginVertical: 10,
  },
});
