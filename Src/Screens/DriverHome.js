import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Tripcard from "../Componetns/Tripcard";
import { DeletePost, get_MY_Trip_Posts } from "../Config/Functions/Driverfunc";

export default function DriverHome({ navigation }) {
    let [allTrip_Posts, setAllTrip_Posts] = useState([]);
    let [update, setupdate] = useState("");

    let getPosts = async() => {
        try {
            let post = await get_MY_Trip_Posts();
            console.log(post, "=======>error");
            setAllTrip_Posts(post);
            setupdate(!update);
        } catch (error) {
            alert("Error", error);
        }
    };

    let Delete_func = async(uid) => {
        try {
            let res = await DeletePost(uid);
            getPosts();
            alert(res);
        } catch (error) {
            alert(error);
        }
    };
    let Delete_Post_func = async(uid) => {
        Alert.alert(
            "Delete Alert",
            "Are You Want To Delete This Post", [{
                    text: "Cancel",
                    // onPress: () => ,
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: () => Delete_func(uid),
                    style: "cancel",
                },
            ], {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            getPosts();
        });
    }, []);

    return ( <
        View style = { styles.contaienr } >
        <
        View style = { styles.Header } >
        <
        Text style = { styles.name } > Driver Portal < /Text> <
        Ionicons name = "add-outline"
        size = { 24 }
        color = "black"
        onPress = {
            () => navigation.navigate("PostTrip")
        }
        /> < /
        View > <
        ScrollView > {
            allTrip_Posts.length > 0 ? (
                allTrip_Posts.map((val, ind) => ( <
                    Tripcard key = { ind }
                    data = { val }
                    Delete_Post_func = { Delete_Post_func }
                    />
                ))
            ) : ( <
                Text style = {
                    { textAlign: "center", fontWeight: "bold" }
                } >
                Data Not Found <
                /Text>
            )
        } <
        /ScrollView> < /
        View >
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
});