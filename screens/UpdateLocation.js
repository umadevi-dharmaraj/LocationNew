import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { ListItem } from 'react-native-elements'
import * as FileSystem from 'expo-file-system';
const filePath = FileSystem.documentDirectory + "coordinates.js";


export default class UpdateLocation extends Component {
   
    render(){
        const { params } = this.props.route.params?this.props.route.params:'No value'
        console.log(params.latitude);
        const latitude = params.latitude;
        const longitude = params.longitude;
        const name = params.name;
        const notes = params.notes;
        return(
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.textInput}>
                        {name}
                    </TextInput>
                    <TextInput style={styles.textInput}>
                        {notes}
                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity style={styles.updateButton}>
                        <Text>UPDATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        alignItems:"center",
        marginTop:200,
    },
    textInput: {
        width:200,
        height:70,
        backgroundColor:"#FFFFFF",
        fontSize:20,
        color:"#000000",
        borderWidth:2,
        borderColor:"black",
        marginBottom:20,
        textAlign:"center",
        fontWeight:"bold",
        borderRadius:10,

    },
    updateButton:{
        backgroundColor:"orange",
        borderRadius:10,
        padding:10,
        width:100,
        height:50,
        marginRight:25,
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
    }

})