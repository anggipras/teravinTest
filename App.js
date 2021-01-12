/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Movielist from './src/Movielist'
import {checkConnected} from './src/Chckconnection'
import NoConnection from './src/Noconnection'

const App = () => {
  const [connectStatus, setConnectStatus] = useState(false)
  checkConnected().then(res=> {
    setConnectStatus(res)
  })

  return (
    <>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <SafeAreaView style={{flex: 1}}>
        {
          connectStatus?
          <Movielist />
          :
          <NoConnection onCheck={checkConnected} />
        }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
