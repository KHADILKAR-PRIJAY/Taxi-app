import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RiderTripcard({ data, navigation }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>
        {data.origin_location} to {data.destination_location}
      </Text>
      <View style={styles.subContainer}>
        <View style={styles.left}>
          <View style={styles.item}>
            <Text style={styles.property}>No of Seats : </Text>
            <Text style={styles.value}>{data.Total_Seats}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.property}>Date And Time : </Text>
            <Text style={styles.value}>{data.Date_Time}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.property}>Price : </Text>
            <Text style={styles.value}>{data.Price_Seat}$ /Seat</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.book}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("BookSeat", data)}
      >
        <Text style={styles.bookTitle}>Book A Seat</Text>
        <MaterialCommunityIcons
          name="bookmark-check"
          size={30}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    elevation: 5,

    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    width: "80%",
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  value: {
    fontWeight: "bold",
  },
  property: {
    width: "50%",
    fontWeight: "bold",
  },
  book: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "green",
    padding: 3,
    borderRadius: 10,
    justifyContent: "center",
    width: "40%",
    marginTop: 20,
  },
  bookTitle: {
    color: "white",
  },
});
