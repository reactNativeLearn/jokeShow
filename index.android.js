/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Alert,
  Vibration,
} from 'react-native';

import codePush from "react-native-code-push";

class jokeShow extends Component {
  componentDidMount(){
    codePush.checkForUpdate()
    .then( (update) =>{
        if( !update ){
          Alert.alert(
            'Alert Title',
            "app是最新版了",
            [
              {text: 'OK', onPress: () => ToastAndroid.show('OK Pressed!', ToastAndroid.LONG)},
            ]
          )
        }else {
          Alert.alert(
            'Alert Title',
            "有更新哦",
            [
              {text: 'OK', onPress: () => ToastAndroid.show('OK Pressed!', ToastAndroid.LONG)},
            ]
          )
        }
    });
    // codePush.sync();
    // codePush.restartApp()
    // ToastAndroid.show('OK Pressed!', ToastAndroid.LONG)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu,{'\n'}
          dshjfhasjdfhajkshdfjkashjkd
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: 'red',
  },
});

AppRegistry.registerComponent('jokeShow', () => jokeShow);
