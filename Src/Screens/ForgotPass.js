import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';


function ForgotPass() {
    const navigation = useNavigation();
    return (

        
        <View style = { styles.container } >

        <
        View style = { styles.Middle } >

        <
        Text style = { styles.LoginText } > Forgot Password < /Text> <
        /View>


        { /*  Email Input Field */ } <
        View style = { styles.buttonStyle } >

        <
        View style = { styles.emailInput } >
        <
        Input InputLeftElement = { <
            Icon
            as = { < FontAwesome5 name = "key" / > }
            size = "sm"
            m = { 2 }
            _light = {
                {
                    color: "black",
                }
            }
            _dark = {
                {
                    color: "gray.300",
                }
            }
            />
        }
        variant = "outline"
        placeholder = "Current Password"
        _light = {
            {
                placeholderTextColor: "blueGray.400",
            }
        }
        _dark = {
            {
                placeholderTextColor: "blueGray.50",
            }
        }

        /> <
        /View> <
        /View>

        { /* Password Input Field */ } <
        View style = { styles.buttonStyleX } >

        <
        View style = { styles.emailInput } >
        <
        Input InputLeftElement = { <
            Icon
            as = { < FontAwesome5 name = "key" / > }
            size = "sm"
            m = { 2 }
            _light = {
                {
                    color: "black",
                }
            }
            _dark = {
                {
                    color: "gray.300",
                }
            }
            />
        }
        variant = "outline"
        secureTextEntry = { true }
        placeholder = "Enter New Password"
        _light = {
            {
                placeholderTextColor: "blueGray.400",
            }
        }
        _dark = {
            {
                placeholderTextColor: "blueGray.50",
            }
        }
        />

        <
        /View> <
        View style = { styles.text2 } >
        <
        Text > Already have account ? < /Text> <
        TouchableOpacity onPress = {
            () => navigation.navigate("LoginScreen") } > < Text style = { styles.signupText } > Login < /Text></TouchableOpacity >
        <
        /View> <
        /View>


        { /* Button */ }

        <
        View style = { styles.buttonStyle } >

        <
        Button style = { styles.buttonDesign } >
        Reset Password <
        /Button> <
        /View>



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
        ForgotPass / >

        <
        /NativeBaseProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    LoginText: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    signupText: {
        fontWeight: 'bold'
    },

    emailInput: {
        marginTop: 10,
        marginRight: 5
    },
    buttonStyle: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15
    },
    buttonStyleX: {
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15
    },
    buttonDesign: {
        backgroundColor: '#026efd'
    },

});