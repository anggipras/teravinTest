import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';
import Fontawesome from 'react-native-vector-icons/MaterialIcons'

const Noconnection = (props) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Fontawesome 
                name = 'wifi-off'
                color = 'black'
                size = {150}
            />
            <Button title = 'Reload Page' onPress={props.onCheck} />
        </View>
    )
}

export default Noconnection