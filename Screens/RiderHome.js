import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DriverHome from './DriverHome';
import { Input, NativeBaseProvider } from 'native-base';
import { WebView } from 'react-native-webview';

const Tab = createMaterialTopTabNavigator();


function RiderHome({navigation,route}) {
  return (
      <HomeScreen/>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <RiderHome />
      
    </NativeBaseProvider>
  )
}
function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarTintColor:'white',
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { backgroundColor: 'blue' },
      }}>
      <Tab.Screen
        name="Categories"
        component={RiderTrips}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ tintColor }) => {
            return (
              <Ionicons name="stats-chart-sharp" color="white" size={20} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapDisplay}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ tintColor }) => {
            return <Ionicons name="locate-outline" color="white" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => {
            return (
              <Ionicons name="person-outline" color="white" size={20} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Profile({ navigation, route }) {

  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={{
          uri: 'https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223',
        }}
        style={{
          width: '100%',
          height: 200,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
        }}>
        <MaterialIcons name="email" size={40} color="black" />
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#black',
              width: Dimensions.get('screen').width - 50,
            }}
            ellipsizeMode="tail"
            numberOfLines={2}>
            Email
          </Text>
          <Text style={{ color: '#808080' }}>'johndoe@yahoo.com'</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
        }}>
        <MaterialIcons name="lock" size={40} color="black" />
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#black',
              width: Dimensions.get('screen').width - 50,
            }}
            ellipsizeMode="tail"
            numberOfLines={2}>
            Password
          </Text>
          <Text style={{ color: '#808080' }}>'*****'</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
        }}>
        <MaterialIcons name="update" size={40} color="#black" />
        <View
          style={{
            marginLeft: 10,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: '#black',
                width: Dimensions.get('screen').width - 50,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
        }}>
        <MaterialIcons name="delete" size={40} color="#black" />
        <View
          style={{
            marginLeft: 10,
          }}>
          <TouchableOpacity onPress={()=>{navigation.dispatch(StackActions.popToTop())}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                width: Dimensions.get('screen').width - 50,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



function MapDisplay(){
  return (
    <WebView source={{ uri: 'https://www.google.com/maps' }} />
  );
}

function RiderTrips({navigation,route}) {
  
  const getList = [
    {
      location:'Damam'
    },
    {
      location:'Jaddah'
    },
    {
      location:'Makkah'
    },
    {
      location:'Dubai'
    },
    {
      location:'Doha'
    },
  ];

  

  return (
    
      <ScrollView style={{ width: '80%',marginTop:20, marginLeft: 40}}>
      <Button
              onPress={() => navigation.navigate("DriverHome")}
              title="Driver Mode"
              color="#36a1a3"
            />

             <Button
              onPress={() => navigation.navigate("ChatScreen")}
              title="Chat"
              color="#0000FF"
            />
        {getList.map((record, index) => (
          <TouchableOpacity>
            <View style = {styles.recordAppearance} key={record.key}>
              <Text style = {styles.recordText}>{record.location}</Text>
              {
                index%2==0 ? (<TouchableOpacity>
                <View style={{backgroundColor:'green', borderRadius:50}}>
                  <Text style = {styles.recordText}>Accepted</Text>
                </View>
              </TouchableOpacity>):
              (<TouchableOpacity>
                <View style={{backgroundColor:'red', borderRadius:50}}>
                  <Text style = {styles.recordText}>Rejected</Text>
                </View>
              </TouchableOpacity>)
              }
              
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  recordAppearance:{
    backgroundColor:'orange',
    borderRadius:50,
    width:'90%',
    flexDirection:'row',
    alignSelf:'center',
    padding:10,
    margin:5,
    justifyContent:"space-between"
  },
  recordText:{
    fontSize: 15,
    margin: 10,
    color: 'white'
  }
});
