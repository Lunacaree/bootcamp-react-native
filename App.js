/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import BelajarState from './src/component/BelajarState';
import HelloFunction from './src/component/HelloFunction';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

export default function NamaApp() {
  //block untuk proses component
  //....
  var i = 1;

  // block untuk tampilan
  return (
    <ScrollView>
      <Text>Test text {i == 1 ? '1' : '0'}</Text>
      <View>
        <Text>Text 2 disini</Text>
      </View>
      <HelloFunction />
      <Bio />
      <Location />
      <BelajarState />
    </ScrollView>
  );
}

const Bio = () => {
  return (
    <View style={styles.containerBio}>
      <Text style={{fontWeight: 'bold', paddingBottom: 9}}>
        Muhammad Yandi Fenanda
      </Text>
      <Text>
        Hi! I'm Fullstack Developer from bandung, definetely best job ever
      </Text>
    </View>
  );
};

class Location extends Component {
  render() {
    return (
      <View style={{margin: 10}}>
        <Text style={styles.textLocation}>Bandung, Indonesia</Text>
        <Image
          source={require('./assets/images/location-pin.png')}
          style={styles.imgLocation}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgLocation: {
    height: 10,
    width: 10,
    margin: 6,
    flex: 1,
  },
  textLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 28,
    top: 0,
  },
  containerBio: {margin: 14},
});
