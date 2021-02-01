import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TodoItem = ({item, pressHandler}) => {
    return (
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <View style={styles.todoitem}>
                <Text style={styles.todoitemtext}>
                    {item.text}
                </Text>
        </View>
            </TouchableOpacity>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    todoitem: {
        backgroundColor: "lightgrey",
        padding: 20,
        alignItems: 'center',
        width: 200,
        margin: 10
    },
    todoitemtext: {
        color: 'black',
    }
})