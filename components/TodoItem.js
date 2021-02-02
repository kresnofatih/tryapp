import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => {
    return (
        <View style={styles.todoitem}>
            <Text style={styles.todoitemtext}>
                {item.text}
            </Text>
            <View style={styles.buttonsviews}>
                <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                    <AntDesign name="checkcircle" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                    <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    todoitem: {
        backgroundColor: 'coral',
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: 300,
        margin: 10
    },
    todoitemtext: {
        color: 'black',
        maxWidth: 170
    },
    buttonsviews: {
        width: 60,
        flexDirection: "row",
        justifyContent: "space-between",
    }
})