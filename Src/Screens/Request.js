import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import {
  AcceptRequest,
  get_All_Accepted_Requests,
  get_All_Pending_Requests,
  get_All_Rejected_Requests,
  get_All_Requests,
  RejectRequest,
} from "../Config/Functions/Driverfunc";

import firebase from "firebase";

export default function Request({ route, navigation }) {
  console.log(route);

  let [AllAcceptedRequest, setAllAcceptedRequest] = useState([]);
  let [AllPendingRequest, setAllPendingRequest] = useState([]);
  let [AllRejectRequest, setAllRejectRequest] = useState([]);

  let Getpendingrequests = async () => {
    try {
      let response = await get_All_Pending_Requests(route.params.id);
      setAllPendingRequest(response);
      console.log(response, "=======<");
    } catch (error) {
      alert(error);
    }
  };

  let GetAcceptedrequests = async () => {
    try {
      let response = await get_All_Accepted_Requests(route.params.id);
      console.log(response, "=======<");
      setAllAcceptedRequest(response);
    } catch (error) {
      alert(error);
    }
  };

  let GetRejectedrequests = async () => {
    try {
      let response = await get_All_Rejected_Requests(route.params.id);
      console.log(response, "=======<");
      setAllRejectRequest(response);
    } catch (error) {
      alert(error);
    }
  };

  let AcceptRequestFunc = async (rid) => {
    try {
      let response = await AcceptRequest(route.params.id, rid);
      Getpendingrequests();
      GetAcceptedrequests();
    } catch (error) {
      alert(error);
    }
  };

  let RejectRequestFunc = async (rid) => {
    try {
      let response = await RejectRequest(route.params.id, rid);
      Getpendingrequests();
      GetRejectedrequests();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    Getpendingrequests();
    GetAcceptedrequests();
    GetRejectedrequests();
  }, [1]);
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back-sharp"
        size={30}
        color="black"
        style={styles.back}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.seatbookTitle}>Seats Booked : </Text>
      <View style={styles.booked}>
        {AllAcceptedRequest.length > 0 ? (
          AllAcceptedRequest.map((val, ind) => (
            <TouchableOpacity style={styles.item} key={ind}>
              <Text style={styles.name}>{val.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              alignSelf: "center",
              width: "100%",
              fontWeight: "bold",
            }}
          >
            No Any Remaining Request
          </Text>
        )}
      </View>
      <Text style={styles.seatbookTitle}>Pending Requests : </Text>
      {AllPendingRequest.length > 0 ? (
        AllPendingRequest.map((val, ind) => (
          <View style={styles.requests} key={ind}>
            <TouchableOpacity style={styles.requesticon}>
              <Text style={styles.iconName}>{val.name.slice(0, 1)}</Text>
            </TouchableOpacity>
            <View style={styles.detail}>
              <Text>Name: {val.name}</Text>
              <Text>Current location: {val.Location}</Text>
            </View>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => AcceptRequestFunc(val.rid)}
            >
              <Ionicons name="checkmark-sharp" size={30} color="green" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icons}
              onPress={() => RejectRequestFunc(val.rid)}
            >
              <Entypo name="cross" size={30} color="red" />
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          No Any Remaining Request
        </Text>
      )}
      {AllRejectRequest.length > 0 && (
        <>
          <Text style={styles.seatbookTitle}>Rejected Requests : </Text>

          {AllRejectRequest.length > 0 ? (
            AllRejectRequest.map((val, ind) => (
              <View style={styles.requests} key={ind}>
                <TouchableOpacity style={styles.requesticon}>
                  <Text style={styles.iconName}>{val.name.slice(0, 1)}</Text>
                </TouchableOpacity>
                <View style={styles.detail}>
                  <Text>Name: {val.name}</Text>
                  <Text>Current location: {val.Location}</Text>
                </View>
                <View style={styles.reject}>
                  <Text style={styles.rejecttext}>Rejected</Text>
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
              No Any Remaining Request
            </Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  back: {
    marginTop: 20,
  },
  seatbookTitle: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  booked: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    height: 50,
    width: 50,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: 5,
    backgroundColor: "white",
    elevation: 10,
  },
  name: {
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
  icons: {
    height: 35,
    width: 35,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 3,
    backgroundColor: "white",
    elevation: 10,
  },
  reject: {
    backgroundColor: "red",
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