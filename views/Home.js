import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

import {Header} from './Header.js'

export class Home extends React.Component{
  render(){
   return(
    <View style={styles.container}>
    <Header message = 'Press to login'/>
    <Image style={styles.imageStyle} source={require('./images/ritlogo.jpg')}/>
    <Text style={{flex:1}}>This is our homepage</Text>
    <Text style={{flex:1}}>The other content is here</Text>
    <Text style={{flex:1}}>Other description text is here</Text>
    <Text style={{flex:1}}>Adding some text here for testing</Text>
    <Text style={{flex:1}}>Also adding text</Text>
    </View>
   );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column'
  },
  imageStyle: {
    width: "100%",
    height: "50%"
  }
});