import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';


function Option() {

    const navigation = useNavigation();
    return (

        <
        View style = { styles.container } >

        <
        View style = { styles.Middle } >

        <
        Text style = { styles.Text } > Choose the Mode < /Text> < /
        View >

        <
        Image source = { require('../assets/taxi3.png') }
        style = {
            {
                width: 200,
                height: 200,
                marginLeft: 5,
                marginRight: 5,
            }
        }
        />

        { /* Button */ }

        <
        View style = { styles.buttonStyle } >

        <
        Button onPress = {
            () => navigation.navigate("RiderHome")
        }
        style = { styles.buttonDesign } >

        Rider

        <
        /Button> < /
        View > <
        View style = { styles.buttonStyle } >

        <
        Button onPress = {
            () => navigation.navigate("DriverHome")
        }
        style = { styles.buttonDesign } >

        Driver

        <
        /Button> < /
        View >

        <
        StatusBar style = "auto" / >
        <
        /View>
    );
}

export default () => {
    return ( <
        NativeBaseProvider >

        <
        Option / >

        <
        /NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Text: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15
    },

    buttonDesign: {
        backgroundColor: '#026efd'
    },

});