import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'drink milk', key: '2'},
    {text: 'get sugar', key: '3'}
  ])
  const pressHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }
  const submitHandler = (text) => {
    setTodos((prevTodos)=>{
      return [...prevTodos, {text: text, key: Math.random().toString()}]
    })
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
        {/* header */}
        <StatusBar style="light" />
        <Header/>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.bodycontent}>
          {/* flatlist */}
          <FlatList
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center'
  },
  bodycontent: {
    padding: 20,
    margin: 0
  }
});
