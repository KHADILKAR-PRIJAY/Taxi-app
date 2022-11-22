import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function DriverProfile({ navigation }) {
  let [user, setUser] = useState("");

  let logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((snap) => {
            setUser(snap.data());
          });
      }
    });
  }, []);
  return (
    <View>
      <Image
        source={{
          uri: "https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223",
        }}
        style={styles.image}
      />
      <View style={styles.item}>
        <Text style={styles.property}> Name : </Text>
        <Text style={styles.name}>{user?.username}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.property}> Email : </Text>
        <Text style={styles.name}>{user?.email}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.property}> Mode : </Text>
        {/* <Text style={styles.name}>{user?.mode && user?.mode}</Text> */}
      </View>
      <TouchableOpacity style={styles.logout} onPress={() => logOut()}>
        <Text style={styles.logouttext}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

let styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginBottom: 50,
  },
  name: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  property: {
    fontSize: 20,
    width: "50%",
  },
  item: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    marginVertical: 5,
  },
  logout: {
    alignSelf: "center",
    backgroundColor: "black",
    padding: 10,
    width: "50%",
    height: 50,
    marginTop: 50,
    borderRadius: 10,
  },
  logouttext: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});