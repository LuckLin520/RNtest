import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class Testpage extends Component {
  // static navigationOptions = ({navigation }) =>{
  //   return {
  //     title:navigation.getParam('name', 'A Nested Details Screen'),//第一个参数是传过来的参数字段名，第二个是没有找到该字段就显示的内容
  //   }
  // }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    console.log(navigationOptions)
    return {
      title: params ? params.name : 'A Nested Details Screen',
      /* 覆盖全局配置! */
      headerStyle: {
        backgroundColor: 'pink',
      },
      headerTintColor: 'green',
    }
  }

  state = {
    text: ''
  }

  componentDidMount(){
    console.log(this.props.navigation.state.params)
  }

  render() {
    return (
      <View>
        <Text>Testpage</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="this is placeholder"
        />
        <Button
            title="Go to scroll"
            onPress={() => this.props.navigation.navigate('Scroll', {text: this.state.text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
