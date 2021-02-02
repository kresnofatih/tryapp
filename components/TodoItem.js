import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => {
    return (
        <View style={styles.todoitem}>
                <Text style={styles.todoitemtext}>
                    {item.text}
                </Text>
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                <AntDesign name="delete" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    todoitem: {
        backgroundColor: "lightgrey",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: 'center',
        width: 300,
        margin: 10
    },
    todoitemtext: {
        color: 'black',
    }
})