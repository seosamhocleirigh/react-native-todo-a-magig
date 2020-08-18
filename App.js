import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'play on the switch', key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todoItem => todoItem.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      if (text.length > 3) {
        return [
          { text: text, key: prevTodos.length + 1 },
          ...prevTodos
        ];
      }

      Alert.alert('oops', 'Todos must be over 3 chars long', [
        {
          text: 'Understoood',
          onPress: () => console.log('alert closed')
        }
      ]);

      return prevTodos;
    });
  }

  return (

    // TODO: swipeable gestures did not work with TouchableWithoutFeedback
    // but this is needed for users without the icon menu to escape the keyboard input
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>

          <AddTodo submitHandler={submitHandler} />

          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
