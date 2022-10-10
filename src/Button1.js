import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Button1 = (props) => {
  return (
    <View style={styles.container}>
      
      <Button title={props.title}/>
    </View>
  )
}

const styles = StyleSheet.create({
  
    
})

export default Button1;