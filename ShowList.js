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
    Image
} from 'react-native';

const HandleDelete =async (id) => {
    const url = "http://172.30.80.1:3000/products";
    const result = await fetch(`${url}/${id}`,{
        method:"delete"
    })
 
    if(result){
        console.warn("deleted Successfully");
        getDetails()
    }else
    console.warn("Error found here");

}

const ShowList = (props) => {
    let item = props.item
    let getDetails = props.getDetails();
    return (
        <View style={styles.main}  >
            <View style={styles.itembox1}>

                <Text style={styles.itembox2}>{item.name}</Text>
                <Image style={styles.itembox4} source={{ uri: item.image }} />
                <View style={styles.itembox3}><Button title='Update' /></View>
                <View style={styles.itembox3}><Button title='Delete' onPress={()=>HandleDelete(item.id)} /></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "orange",
    },
    itembox1: {
        flexDirection: "row",
        backgroundColor: "brown",
        justifyContent: "space-around",
        padding: 5,
        margin: 5,
        borderRadius: 15,
    },
    itembox2: {
        fontSize: 20,
        color: "yellow",
        textAlign: "center",
        textAlignVertical: "center",
        padding:5,
        margin:5,
        fontWeight:"bold",
    },
    itembox3: {
        borderRadius: 20,
        textAlign:"center",
        justifyContent:"center",
        padding:10,
        margin:10

    },
    itembox4: {
        height: 150,
        width: 150,
        padding:10,
        margin:10,
    }

})


export default ShowList