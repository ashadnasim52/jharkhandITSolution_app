import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRIMARY} from '../utils/Theme';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <ActivityIndicator size={'large'} color={PRIMARY} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
