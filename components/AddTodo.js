import React, {useState} from 'react'
import { StyleSheet, Text, Button, View, TextInput, Alert } from 'react-native'

const AddTodo = ({submitHandler}) => {
    const [tempTodo, setTempTodo] = useState('')
    return (
        <View style={styles.input}>
            <View style={styles.inputbar}>
                <TextInput
                    style={styles.inputinput}
                    placeholder="New todo"
                    value={tempTodo}
                    onChangeText={(val)=>setTempTodo(val)}
                />
                <Button title="Submit" onPress={()=>{
                    if(tempTodo!==''){
                        submitHandler(tempTodo);
                        setTempTodo('');
                    } else {
                        Alert.alert('OOPS!', 'Todos cannot be left empty if submitted', [
                            {text: 'Got It', onPress: ()=>console.log('alert closed')}
                        ]);
                    }
                    }} color='coral'/>
            </View>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input:{
        padding: 20,
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
    },
    inputbar: {
        // width: 300,
        paddingTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    inputinput: {
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'coral',
        width: 200,
        paddingLeft: 10,
        paddingRight: 10
    }
})
