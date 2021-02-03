import React from 'react';
import {Text, View} from 'react-native';

const ChildComponent = () => {
  return (
    <View>
      <Text>Ini data dari parent:</Text>
      <Text>{this.props.data}</Text>
    </View>
  );
};

export default ChildComponent;
