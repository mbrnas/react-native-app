import React from "react";

import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert} from "react-native";

import { Header } from "./Header.js";

export class Home extends React.Component {
  onPressButton (){
    Alert.alert('Successful login!');
  }
  render() {
    return (
      <View style={styles.container}>
       

        <Image source={require('./images/icon.png')}></Image>

        <Text style={styles.naslov}>Sunny Radar</Text>

        <TextInput
          style={styles.textInput}
          placeholder={"Input name"}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder={"Input email"}
        ></TextInput>

        <TouchableOpacity onPress={this.onPressButton}>
          <View style={styles.buttonContainer}>
            <Button title="Sign in" color={"white"} onPress={this.onPressButton}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: 'space-around',
    gap: "-400%"
  },

  textInput: {
    textAlign: "center",
    backgroundColor: "white",
    height: 40,
    padding: 10,
    margin: 12,
    borderWidth: 1,
    justifyContent: "center",
    width: 300,
    borderRadius: 10,
  },

  buttonContainer: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    width: "28%",
    padding: "1%",
    marginTop: 16,
  },

  naslov: {
    fontWeight: "bold",
    fontSize: 25
  }
});
