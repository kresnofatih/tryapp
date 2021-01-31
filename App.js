import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [temp, setTemp] = useState('')
  const [name, setName] = useState('')
  const changeName = () => {
    setName(temp)
    setTemp('')
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="" />
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text>Enter Name: </Text>
      <TextInput 
        style={styles.input} 
        placeholder="e.g Sakurajima Mai" 
        onChangeText={(val)=>setTemp(val)} 
        value={temp}/>
      <Button title="change" 
      onPress={changeName}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "skyblue",
    padding: 20,
    width: 200,
    alignItems: "center"
  },
  title: {
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    margin: 5,
    width: 250,
  }
});
