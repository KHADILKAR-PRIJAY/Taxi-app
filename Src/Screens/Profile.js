import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';

export default function Profile({ navigation, route }) {


    return ( <
        View style = {
            { marginBottom: 10 } } >
        <
        Image source = {
            {
                uri: 'https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223',
            }
        }
        style = {
            {
                width: '100%',
                height: 200,
            }
        }
        />


        <
        View style = {
            {
                flexDirection: 'row',
                margin: 5,
            }
        } >
        <
        MaterialIcons name = "lock"
        size = { 40 }
        color = "Black" / >
        <
        View style = {
            {
                marginLeft: 10,
            }
        } >
        <
        Text style = {
            {
                fontSize: 20,
                color: 'Black',
                width: Dimensions.get('screen').width - 50,
            }
        }
        ellipsizeMode = "tail"
        numberOfLines = { 2 } >
        Password <
        /Text>

        <
        /View> <
        /View> <
        View style = {
            {
                flexDirection: 'row',
                margin: 5,
            }
        } >
        <
        MaterialIcons name = "update"
        size = { 40 }
        color = "Black" / >
        <
        View style = {
            {
                marginLeft: 10,
            }
        } >

        <
        Text style = {
            {
                fontSize: 20,
                color: 'black',
                width: Dimensions.get('screen').width - 50,
            }
        }
        ellipsizeMode = "tail"
        numberOfLines = { 2 } >
        Update Profile <
        /Text>

        <
        /View> <
        /View> <
        View style = {
            {
                flexDirection: 'row',
                margin: 5,
            }
        } >
        <
        MaterialIcons name = "delete"
        size = { 40 }
        color = "Black" / >
        <
        View style = {
            {
                marginLeft: 10,
            }
        } >
        <
        TouchableOpacity onPress = {
            () => { navigation.dispatch(StackActions.popToTop()) } } >
        <
        Text style = {
            {
                fontSize: 20,
                color: 'black',
                width: Dimensions.get('screen').width - 50,
            }
        }
        ellipsizeMode = "tail"
        numberOfLines = { 2 } >
        Delete Account <
        /Text> <
        /TouchableOpacity> <
        /View> <
        /View> <
        /View>
    );
}