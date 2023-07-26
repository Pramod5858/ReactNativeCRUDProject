
import React, { useState, useEffect } from 'react';

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


function HomeScreen({ route, navigation }) {

    const [count, setCount] = useState(0);
    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (<Button title='Update Count' onPress={() => setCount((c) => c + 1)} />)
        })

    }, [navigation])

    return (
        <View style={styles.main}>
            <Text style={styles.itembox1}>Hi This is HomeScreen</Text>
            <Text style={styles.itembox1}>Count: {count}</Text>
            <Button title='Go to details' onPress={() => navigation.navigate('Details', { name: "pramod", password: 'pramod' })} />
        </View>
    )
}

// const Feed = () => {
//     return (
//         <View>
//             <Text>Ho This is Feed</Text>
//         </View>
//     )
// }

// const Article = () => {
//     return (
//         <View>
//             <Text>Ho This is Article</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",

    },
    itembox1: {
        fontSize: 25,
        color: "red"
    }

})


export default HomeScreen;


{/* <View style={styles.main}>
<Text style={styles.itembox1}>Hi This is HomeScreen</Text>
<Text style={styles.itembox1}>Count: {count}</Text>
<Button title='Go to details' onPress={() => navigation.navigate('Details', {name:"pramod", password:'pramod'})} />
</View> */}
