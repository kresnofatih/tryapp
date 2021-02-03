import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const Splash = ({pressHandler}) => {
    const loadFonts = async () => {
        await Font.loadAsync({
          // Load a font `Montserrat` from a static resource
          Sriracha: require('../assets/Sriracha-Regular.ttf'),
        });
    };
    loadFonts();
    return (
        <TouchableOpacity 
        style={styles.splashcontainer} 
        onPress={()=>pressHandler("removeSplash", 0)}>
            <View style={styles.splashcontent}>
                <MaterialIcons name="sticky-note-2" size={200} color="white" />
                <Text style={styles.splashtitle}>To Do List</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Splash

const styles = StyleSheet.create({
    splashcontainer: {
        flex: 1,
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashcontent: {
        padding: 50,
        height: 350,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    splashtitle: {
        fontSize: 30,
        color: 'white'
    }
})
