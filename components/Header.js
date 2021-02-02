import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headertitle}>
                My Todos
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: "coral",
        padding: 20,
        paddingTop: 40,
        width: '100%',
        height: 80,
        alignItems: "center"
    },
    headertitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    }
})
