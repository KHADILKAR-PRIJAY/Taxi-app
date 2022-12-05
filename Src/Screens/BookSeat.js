import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Book_Seats } from "../Config/Functions/Riderfunc";

export default function BookSeat({ route, navigation }) {
    let data = route.params;
    console.log(data);

    let [disabled, setDisabled] = useState(false);
    let [name, setName] = useState("");
    let [Location, setLocation] = useState("");
    let [seats, setSeats] = useState("");

    let Bookseat = async() => {
        setDisabled(true);
        if (name === "" || Location === "" || seats === "") {
            alert("Please Enter All Data");
            setDisabled(false);
        } else {
            try {
                let res = await Book_Seats({
                    name,
                    Location,
                    seats,
                    rideId: data.id,
                });
                alert(res);
                setDisabled(false);
                navigation.navigate("RiderTrip");
            } catch (error) {
                alert(error);
                setDisabled(false);
            }
        }
    };

    return ( <
            View style = { styles.container } >
            <
            TouchableOpacity style = { styles.back } >
            <
            Ionicons name = "arrow-back"
            size = { 24 }
            color = "black"
            onPress = {
                () => navigation.goBack()
            }
            /> < /
            TouchableOpacity > <
            Text style = { styles.destination } > { data.origin_location }
            to { data.destination_location } <
            /Text>

            <
            View style = { styles.form } >
            <
            View style = { styles.add } >
            <
            Text style = { styles.title } > Add Detail < /Text> < /
            View > <
            TextInput style = { styles.input }
            placeholder = "Name"
            onChangeText = {
                (text) => setName(text)
            }
            /> <
            TextInput style = { styles.input }
            placeholder = "Location"
            onChangeText = {
                (text) => setLocation(text)
            }
            /> <
            TextInput style = { styles.input }
            placeholder = "No of Seat book"
            onChangeText = {
                (text) => setSeats(text)
            }
            keyboardType = "number-pad" /
            >

            <
            TouchableOpacity style = {
                [
                    styles.Post,
                    {
                        backgroundColor: disabled ? "#c1e9bd" : "green",
                    },
                ]
            }
            onPress = {
                () => Bookseat()
            }
            disabled = { disabled } >
            <
            Text style = { styles.title } > Book < /Text> { disabled && < ActivityIndicator size = "small"
            color = "gray" / >
        } <
        /TouchableOpacity> < /
        View > <
        /View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    destination: {
        fontSize: 25,
        fontWeight: "bold",
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
        // margin: 10,
        padding: 10,
        marginTop: 30,
        borderRadius: 10,
        elevation: 15,
        width: "90%",
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
    back: {
        alignSelf: "flex-start",
        marginLeft: 10,
    },
});