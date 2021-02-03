import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => {
    return (
        <View style={[styles.todoitem, !item.completeStatus ?
        styles.todoitemColorComplete :
        styles.todoitemColorIncomplete]}>
            <Text style={!item.completeStatus ?
            styles.todoitemtextComplete :
            styles.todoitemtextIncomplete}>
                {item.text}
            </Text>
            <View style={styles.buttonsviews}>
                <TouchableOpacity onPress={()=>pressHandler("toggle", item.key)}>
                    <AntDesign name="checkcircle" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>pressHandler("delete", item.key)}>
                    <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    todoitem: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 50,
        width: 300,
        margin: 10
    },
    todoitemColorComplete: {
        backgroundColor: "coral",
    },
    todoitemColorIncomplete: {
        backgroundColor: "grey",
    },
    todoitemtextComplete: {
        color: 'black',
        maxWidth: 170
    },
    todoitemtextIncomplete: {
        color: 'black',
        maxWidth: 170,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    buttonsviews: {
        width: 60,
        flexDirection: "row",
        justifyContent: "space-between",
    }
})