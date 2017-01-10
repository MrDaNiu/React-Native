import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class Scene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  render(){
    return(
      <View>
        <Text>Current Scene:{ this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一个场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一个场景</Text>
        </TouchableHighlight>
        <ModalDropdown options={['option 1', 'option 2']}/>
      </View>
    )
  }
}
