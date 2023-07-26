import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import AddDetails from './AddDetails';
import ListDetails from './ListDetails';
import CheckDetails from './CheckDetails';

const Tab = createBottomTabNavigator();

function DetailScreen({ route, navigation }) {

    const { name, password } = route.params;

    return (
        <Tab.Navigator>
            <Tab.Screen name='ListDetails' component={ListDetails} />
            <Tab.Screen name='AddDetails' component={AddDetails} />
            <Tab.Screen name="checkDetails" component={CheckDetails} />
        </Tab.Navigator>

        // <View style={styles.main}>
        //     <Text style={styles.itembox1}>Hi This is DetailScreen</Text>
        //     <Text>Name:- {JSON.stringify(name)}</Text>
        //     <Text>Password:- {JSON.stringify(password)}</Text>
        // </View>
    )
}






const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    itembox1: {
        fontSize: 25,

    }


})


export default DetailScreen; 