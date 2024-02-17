import React from 'react';
import 'react-native-get-random-values';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './screens';

import Home from '../screens/Home';
import CreateTask from '../screens/CreateTask';
import EditTask from '../screens/EditTask';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screens.Home}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={Screens.Home} component={Home} />
          <Stack.Screen name={Screens.CreateTask} component={CreateTask} />
          <Stack.Screen name={Screens.EditTask} component={EditTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
