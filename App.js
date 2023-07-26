/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Component/HomeScreen';
import DetailScreen from './Component/DetailScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle:{backgroundColor:"skyblue"}, headerTintColor:"#fff", 
         headerTitleStyle:{fontWeight:"bold"}}} > 

        <Stack.Screen name='Home' component={HomeScreen}
         options={({navigation, route}) =>({headerTitle:"CRUD Project", headerRight:()=> <Button title="Update count" />  })} />
         

          {/* options={{headerLeft:()=>(<Button title='LeftSide' onPress={()=>console.warn("LeftSide")} />) ,title:"CRUD Project", headerRight:()=>( <Button title='LeftSide' onPress={()=>console.warn("RightSide")}   />)}}/> */}
        <Stack.Screen name='Details' component={DetailScreen} />

        <Stack.Screen name='Profile' component={DetailScreen} />
        <Stack.Screen name='Settings' component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

function Logotitle() {
  return (
      <View style={styles.main}>
          <Text style={styles.itembox1}>Hi This is Logotitle</Text>
          <Button title='Go to details'  />
      </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

  },
  itembox1: {

  },
  itembox2: {

  },
  itembox3: {

  },


})

export default App;
