import React from 'react';
import { Text, View } from 'react-native';
import Fontawesome from 'react-native-vector-icons/FontAwesome'

const SplashScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Fontawesome 
                name = 'android'
                color = 'black'
                size = {150}
            />
        </View>
    )
}

export default SplashScreen