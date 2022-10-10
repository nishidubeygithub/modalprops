import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextInput1 = (props) => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <TextInput placeholder={props.placeholder} 
      defaultValue={props.defaultValue}
      onChangeText={props.onChangeText}>
     </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  
    
})

export default TextInput1;