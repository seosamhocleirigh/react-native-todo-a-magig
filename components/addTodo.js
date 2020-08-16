import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (text) => {
        setText(text);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New todo item..."
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo' color='#ff0266' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        color: '#fff',
        marginBottom: 15,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    }
});