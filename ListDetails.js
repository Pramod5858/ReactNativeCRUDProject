import React, { useEffect, useState } from 'react';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Modal,
    TextInput,
    ImageInput
} from 'react-native';
//import ShowList from './ShowList';


const ListDetails = () => {

    // const products = [
    //     {
    //         "id": 1,
    //         "name": "Dell Laptop",
    //         "price": 50000
    //     },
    //     {
    //         "id": 2,
    //         "name": "Lenovo Laptop",
    //         "price": 45000
    //     },
    //     {
    //         "id": 3,
    //         "name": "HP Laptop",
    //         "price": 47000
    //     },
    //     {
    //         "id": 4,
    //         "name": "Asus Laptop",
    //         "price": 46000
    //     }
    // ]

    const [data, setData] = useState([])
    const [modalView, setmodalView] = useState(false);
    const [selectedItem, setselectedItem] = useState(undefined);

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = async () => {
        const url = "http://10.0.2.2:3000/products";

        let result = await fetch(url);

        result = await result.json()

        if (result) {
            setData(result)
        }
    }

    const HandleDelete = async (id) => {
        const url = "http://10.0.2.2:3000/products";
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        });

        result = await result.json();

        if (result) {
            console.warn("deleted Successfully");
            getDetails()
        } else
            console.warn("Error found here");

    }

    const UpdateDetails = (data) => {
        setmodalView(true)
        setselectedItem(data)

    }

    //console.log(data);

    return (
        <ScrollView style={styles.main}>
            {data.length ? data.map((item) =>
                <View style={styles.main} key={item.id} >
                    <View style={styles.itembox1}>

                        <Text style={styles.itembox2}>{item.name}</Text>
                        <Image style={styles.itembox4} source={{ uri: item.image }} />
                        <View style={styles.itembox3}><Button title='Update' onPress={() => UpdateDetails(item)} /></View>
                        <View style={styles.itembox3}><Button title='Delete' onPress={() => HandleDelete(item.id)} /></View>
                    </View>
                </View>

            ) : null}

            <View>
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalView}
                >
                    <HandleUpdate setmodalView={setmodalView} selectedItem={selectedItem} getDetails={getDetails} />
                </Modal>
            </View>

        </ScrollView>
    )
}

const HandleUpdate = (props) => {
    const [name, setName] = useState(undefined);
    const [image, setImage] = useState(undefined);


    useEffect(() => {
        setName(props.selectedItem.name)
        setImage(props.selectedItem.image)

    }, [props.selectedItem])

    const HandleSave = async () => {
        console.warn(props.selectedItem.id, name, props.selectedItem.price, props.selectedItem.image);
        const url = "http://10.0.2.2:3000/products";
        const id = props.selectedItem.id;
        let result = await fetch(`${url}/${id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });

        result = await result.json();

        if (result) {
            console.warn("updated Successfully");
            props.getDetails()
            props.setmodalView(false)
        } else
            console.warn("Error found here");
    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TextInput style={styles.modalbox1} value={name} onChangeText={(text) => setName(text)} />
                <Image style={styles.modalbox3} source={{ uri: image }} alt='not found image' />
                {/* <ImageInput image={any} onChangeImage={(image1) => setImage(image1)} /> */}
                <View style={styles.modalbox2} >
                    <Button title='Save' onPress={HandleSave} />
                </View>

                <View style={styles.modalbox2} >
                    <Button title='Close' onPress={() => props.setmodalView(false)} />
                </View>

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
        padding: 5,
        margin: 5,
        fontWeight: "bold",
    },
    itembox3: {
        borderRadius: 20,
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
        margin: 10

    },
    itembox4: {
        height: 150,
        width: 150,
        padding: 10,
        margin: 10,
    },
    centeredView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        margin: 10,

    },
    modalView: {
        height: 300,
        width: 300,
        backgroundColor: "white",
        textAlign: "center",
        padding: 5,
        margin: 5,
        borderRadius: 20,
        shadowColor: "pink",
        shadowOpacity: 0.7,
        elevation: 1,
    },
    modalbox1: {
        borderWidth: 1,
        width: 280,
        borderRadius: 10,
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
        margin: 10,
        fontSize: 30,
        fontWeight: "bold",
    },
    modalbox2: {
        padding: 5,
        margin: 5,

    },
    modalbox3: {
        height: 150,
        width: 200,
        marginHorizontal: 50


    }


})

export default ListDetails;





// return (
//     <ScrollView style={styles.main}>
//         {data.length ? data.map((item) =>
//             <ShowList item={item} getDetails={getDetails}/>
//             ) : null}
//     </ScrollView>
// )