import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {Header} from './Header.js'

export class Home extends React.Component{
  render(){
   return(
    <View>
    <Header message = 'Press to login'/>
    <Text>This is our homepage</Text>
    <Text>The other content is here</Text>
    <Text>Other description text is here</Text>
    <Text>Adding some text here for testing</Text>
    <Text>Also adding</Text>
    </View>
   );
  }

  
}