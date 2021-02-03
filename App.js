import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';
import Splash from './components/Splash';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'this is a todo', key: '1', completeStatus: false},
    {text: 'sample-task', key: '2', completeStatus: false},
    {text: 'press check to delete', key: '3', completeStatus: true}
  ])
  const [status, setStatus] = useState(true)
  const pressHandler = (action, key) => {
    switch(action){
      case 'delete':
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo=>todo.key!=key)
        });
        break;
      case 'removeSplash':
        setStatus(false);
        break;
      case 'toggle':
        const temp = []
        for(let i=0; i<todos.length; i++){
          if(todos[i].key===key){
            temp.push({text: todos[i].text, 
            key: todos[i].key, 
            completeStatus: !todos[i].completeStatus})
          } else {
            temp.push(todos[i]);
          }
        };
        setTodos(temp);
        break;
    }
  }
  const submitHandler = (text) => {
    setTodos((prevTodos)=>{
      return [...prevTodos, {text: text, 
        key: Math.random().toString(), 
        completeStatus: false}]
    })
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      {status===true ?
        <Splash pressHandler={pressHandler}/> :
        <View style={styles.container}>
          <StatusBar style="light" />
          <Header/>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.bodycontent}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      }
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
    margin: 0,
    marginBottom: 20,
    flex: 1
  }
});
