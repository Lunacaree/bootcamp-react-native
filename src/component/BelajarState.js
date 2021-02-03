import {Component} from 'react';
import React from 'react';
import {Text, View, Button} from 'react-native';
import ChildComponent from './ChildComponent';

class BelajarState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'Not Followed yet',
      parentData: 'ini dari parent',
    };
  }
  render() {
    return (
      <View style={{margin: 10}}>
        <Text>{this.state.word}</Text>
        <Button
          title="Follow"
          onPress={() => this.setState({word: 'Followed'})}
        />
        <ChildComponent data={this.state.parentData} />
      </View>
    );
  }
}

export default BelajarState;
