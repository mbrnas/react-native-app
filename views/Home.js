import React from 'react';

import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

import {Header} from './Header.js'

export class Home extends React.Component{

  render(){
   return(
    <View style={styles.container}>
    <Header message = 'Press to login'/>
    <Image style={styles.imageStyle} source={require('./images/ritlogo.jpg')}/>

    <TextInput style={styles.textInput} placeholder={'Input name'}></TextInput>
    <TextInput style={styles.textInput} placeholder={'Input email'}></TextInput>

    <Text style={styles.textStyle}>This is our homepage</Text>
    <Text style={styles.textStyle}>The other content is here</Text>


    <Text style={styles.textStyle}>Other description text is here</Text>
    <Text style={styles.textStyle}>Adding some text here for testing</Text>
    <Text style={styles.textStyle}>Also adding text</Text>
    </View>
   );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageStyle: {
    width: "100%",
    height: "20%"
  },
  textStyle: {
    flex: 1,
    textAlign: 'center'
  },
  textInput: {
    textAlign: 'center',
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 1
  }
});