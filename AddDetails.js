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

const AddDetails = () => {

    
    return (
        <View style={styles.main}>
            <Text style={styles.itembox1}>Hi</Text>
            <Text style={styles.itembox2}>WelCome To React Native</Text>
            <Text style={styles.itembox2}>Android and IOS (Mobile App)</Text>
            <Text style={styles.itembox3}>POST, DELETE, UPDATE(PUT) AND JSON</Text>
            <Text style={{marginRight:-200}}>Name:- Pramod Mukane</Text>
            <Text style={{marginRight:-200}}>Mobile:- 8446187819</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"pink",
        borderWidth:1,
        borderRadius:20,
        height:300,
        


    },
    itembox1: {
        fontSize: 25,
        padding:10,
        margin:10,
        color:"purple",
    },
    itembox2: {
        fontSize: 25,
        padding:10,
        margin:10,
        color:"brown",
    },
    itembox3: {
        fontSize: 25,
        padding:10,
        margin:10,
        color:"black",


    }
})

export default AddDetails; 