import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const HelloFunction = () => {
  return (
    <View>
      <Text>Hello Talent!</Text>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://placeimg.com/200/200/people'}}
          style={styles.imgProfile}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  imgProfile: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
});

export default HelloFunction;
