import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Input, NativeBaseProvider } from 'native-base';
import { WebView } from 'react-native-webview';

const Tab = createMaterialTopTabNavigator();

function DriverHome({navigation,route}) {
  return (
      <DriverHomeScreen/>
  );
}
function DriverHomeScreen() {
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
        component={DriverTrips}
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
              color: 'black',
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
              color: 'black',
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
        <MaterialIcons name="update" size={40} color="black" />
        <View
          style={{
            marginLeft: 10,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
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
        <MaterialIcons name="delete" size={40} color="black" />
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
    
      <ScrollView style={{ width: '100%',marginTop:15 }}>
      
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
function DriverTrips({navigation,route}) {
  const [location, setlocation] = useState('');
  const [country, setcountry] = useState('');
  const [eta, seteta] = useState('');
  const [editrecord,setEditRecord] = useState(0);
  const [getList, setList] = useState([]);

  const addRecord = () => {
    setList([
      ...getList,
      { key: Math.random().toString(), location: location, country: country, eta: eta },
    ]);
    setlocation('');
    setcountry('');
    seteta('');
    Keyboard.dismiss();
  };

  const updateList = () => {
    setList((list) =>
      getList.map((element) =>
        element.key === editrecord ? { key: element.key, location: location, country:country, eta:eta } : element
      )
    );
    setlocation('');
    setcountry('');
    seteta('');
    setEditRecord(0);
  };


  const updateRecord = (item) => {
    setlocation(item.location);
    setcountry(item.country);
    seteta(item.eta);
    setEditRecord(item.key);
  };

  const deleteRecord = (key) => {
    setList((list) => getList.filter((element) => element.key != key));
  }

  return (
    <View style={styles.containerStyle}>
    <Button
              onPress={() => navigation.navigate("RiderHome")}
              title="Rider Mode"
              color="#36a1a3"
            />

      <Text style={styles.textStyle}>Location:</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Your location"
        value={location}
        onChangeText={setlocation}></TextInput>
      <Text style={styles.textStyle}>Country Code:</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Your Country Code."
        value={country}
        onChangeText={setcountry}></TextInput>
      <Text style={styles.textStyle}>ETA:</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Your eta:"
        value={eta}
        onChangeText={seteta}></TextInput>
      <View style={styles.buttonLayout}>
        <Button
          color="red"
          title="Reset"
          onPress={() => {
            setlocation(''), setcountry(''), seteta('');
          }}
          disabled={location.length == 0 || country.length == 0 || eta.length == 0}
        />
        <Button
          color="green"
          title= {editrecord==0?"ADD":"UPDATE"}
          onPress={editrecord==0?addRecord:updateList}
          disabled={location.length == 0 || country.length == 0 || eta.length == 0}
        />
             <Button
              onPress={() => navigation.navigate("ChatScreen")}
              title="Chat"
              color="#36a1a3"
            />
      </View>
      <ScrollView style={{ width: '100%',marginTop:15 }}>
        {getList.map((record, index) => (
          <TouchableOpacity key={record.key} onPress={()=>updateRecord(record)}>
            <View style = {styles.recordAppearance} key={record.key}>
              <Text style = {styles.recordText}>{record.location}</Text>
              <TouchableOpacity>
                <View style={{backgroundColor:'green', borderRadius:50}}>
                  <Text style = {styles.recordText}>Accept</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{backgroundColor:'red', borderRadius:50}}>
                  <Text style = {styles.recordText}>Reject</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


export default () => {
  return (
    <NativeBaseProvider>
     
        <DriverHome />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 8,
    margin: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  textStyle: {
    padding: 4,
    fontSize: 15,
    fontWeight: 'italic',
  },
  buttonLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 10,
  },
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
  },
  
});
