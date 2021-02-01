import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

export default Sandbox

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'center'
        // flex: 1
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'orange',
        padding: 30,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'cyan',
        padding: 40,
    },

})
