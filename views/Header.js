import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn: false};
  }

  toggleUser = () => {
    this.setState(previousState => {
      return{isLoggedIn: !previousState.isLoggedIn }
    });
  }

  render(){
    let dipslay = this.state.isLoggedIn ? 'RIT User' : this.props.message;
    return(
      <View style={styles.headStyle}>
      <Text 
      style = {styles.headText}
      onPress = {this.toggleUser}>{dipslay}  </  Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
	headText: {
		textAlign: 'center',
		color: '#ffffff',
		fontSize: 20
	},
	headStyle: {
		paddingTop: 30,
		paddingBottom: 10,
		paddingRight: 10,
		backgroundColor: '#35605a'
	}
});
