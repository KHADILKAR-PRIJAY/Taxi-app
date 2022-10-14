import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.navigation.navigate("Login");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Taxi App</Text>
      </View>
    );
  }
}

export default Splash;