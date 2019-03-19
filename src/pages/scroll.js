import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'ios',
  android: 'android'
});

export default class Scroll extends Component {
  
  render() {
    params = this.props.navigation.state.params
    return (
      <View>
        <Text>{instructions} Screen</Text>
        <Image 
          source={{
            uri: 'https://reactjs.org/logo-og.png',
            method: 'POST',
            headers: {
              Pragma: 'no-cache',
            },
            // body: 'Your Body goes here',
          }}
          style={{width: '100%', height: 400}}
        />
        <Text>{params && params.text?params.text:null}</Text>
        <Button
            title="Go to testpage"
            onPress={() => this.props.navigation.navigate('Testpage', {name:"lucklin"})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

 
});
