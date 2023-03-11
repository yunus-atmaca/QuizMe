import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
