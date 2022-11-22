import React, { useState } from 'react';
import {
  Alert,
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackActions } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function UpdateProfile({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.heading}>Edit Profile!</Text>
      </View>
      {/* <Animatable.View animation="fadeInUpBig" style={styles.footer}> */}
        <ScrollView>
          <Text style={styles.fielddata2}>Email</Text>
          <View style={styles.display}>
            <MaterialIcons name="email" color="#db14a2" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize="none"
              defaultValue = {route.params.email}
              onChangeText={setEmail}
            />
          </View>
          <Text style={styles.fielddata2}>Password</Text>
          <View style={styles.display}>
            <MaterialIcons name="lock" color="#db14a2" size={20} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              autoCapitalize="none"
              defaultValue = {route.params.password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.buttonview}>
            <TouchableOpacity style={styles.controller} onPress={()=>{
              route.params.setEmail(email);
              route.params.setPassword(password);
              navigation.navigate('Profile');
            }}>
              <LinearGradient
                colors={['#20bf55', '#01baef']}
                style={styles.controller}>
                <Text
                  style={[
                    styles.submit,
                    {
                      color: '#fff',
                    },
                  ]}>
                  UPDATE PROFILE
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonview}>
            <TouchableOpacity style={styles.controller} onPress={()=>{
              navigation.dispatch(StackActions.popToTop())
            }}>
              <LinearGradient
                colors={['#FD3A2D','#db14a2']}
                style={styles.controller}>
                <Text
                  style={[
                    styles.submit,
                    {
                      color: '#fff',
                    },
                  ]}>
                  DELETE ACCOUNT
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      {/* </Animatable.View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d65bca',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 5,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    paddingVertical: 30,
  },
  controller: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  display: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#db14a2',
    marginTop: 10,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#db14a2',
  },
  submit: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
  fielddata2: {
    color: '#db14a2',
    fontSize: 18,
    marginTop: 16,
  },
  buttonview: {
    alignItems: 'center',
    marginTop: 40,
  },
});