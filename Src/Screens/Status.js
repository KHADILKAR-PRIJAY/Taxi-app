import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { get_All_Requests } from "../Config/Functions/Riderfunc";

export default function Status() {
  let [AllRequests, setAllRequsts] = useState([]);
  let [update, setUpdate] = useState(true);
  let GetAllRequestsFunc = async () => {
    try {
      let response = await get_All_Requests();
      console.log(response);
      setAllRequsts(response);
      setUpdate(!update);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    GetAllRequestsFunc();
  }, [1]);
  return (
    <View style={styles.container}>
      <Text style={styles.seatbookTitle}>All Ride Book Status : </Text>

      {AllRequests.length > 0 ? (
        AllRequests.map((val, ind) => (
          <View style={styles.requests} key={ind}>
            <TouchableOpacity style={styles.requesticon}>
              <Text style={styles.iconName}>{val.name.slice(0, 1)}</Text>
            </TouchableOpacity>
            <View style={styles.detail}>
              <Text style={{ fontWeight: "bold" }}> {val.ride}</Text>
              <Text>Current location: {val.Location}</Text>
            </View>
            <View
              style={[
                styles.reject,
                {
                  backgroundColor:
                    val.Status === "Pending"
                      ? "orange"
                      : val.Status === "Accepted"
                      ? "green"
                      : "red",
                },
              ]}
            >
              <Text style={styles.rejecttext}>{val.Status}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          You Did Not Book Any Ride
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },

  seatbookTitle: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
  },

  requests: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 20,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  requesticon: {
    height: 30,
    width: 30,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: 5,
    backgroundColor: "white",
    elevation: 10,
  },
  iconName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  detail: {
    width: "55%",
    marginLeft: 20,
  },

  reject: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    borderRadius: 30,
  },
  rejecttext: {
    color: "white",
  },
});