import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
  } from "react-native";
  import React, { useState } from "react";
  import { Post_Trip_Func } from "../Config/Functions/Driverfunc";
  import { Ionicons } from "@expo/vector-icons";
  
  export default function PostTrip({ navigation }) {
    let [origin_location, setOrigin_Location] = useState("");
    let [destination_location, setDestination_Location] = useState("");
    let [Date_Time, setDate_Time] = useState("");
    let [Total_Seats, setTotal_Seats] = useState("");
    let [Price_Seat, setPrice_Seat] = useState("");
    let [disabled, setDisabled] = useState(false);
  
    let Post = async () => {
      setDisabled(true);
      if (
        origin_location === "" ||
        destination_location === "" ||
        Date_Time === "" ||
        Total_Seats === "" ||
        Price_Seat === ""
      ) {
        alert("Please Enter All Data");
      } else {
        try {
          let res = await Post_Trip_Func({
            origin_location,
            destination_location,
            Date_Time,
            Total_Seats,
            Price_Seat,
          });
          alert(res);
          setDisabled(true);
  
          navigation.navigate("DriverHome");
        } catch (error) {
          alert(error);
          setDisabled(true);
        }
      }
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Header_title}>ADD A TRIP POST</Text>
        </View>
  
        <View style={styles.form}>
          <View style={styles.add}>
            <Text style={styles.title}>Add Detail</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Origin Location"
            onChangeText={(text) => setOrigin_Location(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Destination Location"
            onChangeText={(text) => setDestination_Location(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Date & Time"
            onChangeText={(text) => setDate_Time(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="How Many People"
            onChangeText={(text) => setTotal_Seats(text)}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Price Per Seat"
            onChangeText={(text) => setPrice_Seat(text)}
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={[
              styles.Post,
              {
                backgroundColor: disabled ? "#c1e9bd" : "green",
              },
            ]}
            onPress={() => Post()}
          >
            <Text style={styles.title}>Post</Text>
            {disabled && <ActivityIndicator size="small" color="#00ff00" />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    header: {
      backgroundColor: "white",
      padding: 10,
      margin: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    Header_title: {
      fontSize: 18,
      fontWeight: "bold",
      borderRadius: 10,
      textAlign: "center",
      marginLeft: 50,
    },
    input: {
      backgroundColor: "white",
      margin: 10,
      padding: 10,
      elevation: 10,
      borderRadius: 10,
    },
    form: {
      backgroundColor: "white",
      margin: 10,
      padding: 10,
      marginTop: 30,
      borderRadius: 10,
      elevation: 15,
    },
    title: {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
    add: {
      backgroundColor: "black",
      marginTop: -30,
      height: 40,
      width: "50%",
      alignSelf: "center",
      marginBottom: 20,
      justifyContent: "center",
      borderRadius: 10,
    },
    Post: {
      backgroundColor: "green",
      height: 40,
      width: "50%",
      alignSelf: "center",
      marginTop: 20,
      justifyContent: "center",
      borderRadius: 10,
      elevation: 15,
      flexDirection: "row",
      alignItems: "center",
    },
  });
  