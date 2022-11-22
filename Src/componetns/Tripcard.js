import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Tripcard({ data, Delete_Post_func }) {
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
        <MaterialIcons
          name="delete"
          size={30}
          color="red"
          style={{ marginLeft: 20 }}
          onPress={() => Delete_Post_func(data.id)}
        />
      </View>
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
});