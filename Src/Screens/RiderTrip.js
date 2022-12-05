import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Tripcard from "../Componetns/Tripcard";
import { get_All_Trip_Posts } from "../Config/Functions/Driverfunc";
import RiderTripcard from "../Componetns/RiderTripCard";

export default function RiderTrip({ navigation }) {
  let [allTrip_Posts, setAllTrip_Posts] = useState([]);
  let [update, setupdate] = useState("");

  let getPosts = async () => {
    try {
      let post = await get_All_Trip_Posts();
      console.log(post, "=======>error");
      setAllTrip_Posts(post);
      setupdate(!update);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getPosts();
    });
  }, []);

  return (
    <View style={styles.contaienr}>
      <View style={styles.Header}>
        <Text style={styles.name}>Rider Portal</Text>
      </View>
      <Text style={styles.active}>Active Trips</Text>
      <ScrollView>
        {allTrip_Posts.length > 0 ? (
          allTrip_Posts.map((val, ind) => (
            <RiderTripcard key={ind} data={val} navigation= {navigation}/>
          ))
        ) : (
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Data Not Found
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    marginTop: 20,
  },
  Header: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    elevation: 5,
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  active: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
