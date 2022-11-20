import React from "react";
import { SafeAreaView, StyleSheet, Text, View,ImageBackground, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {useEffect} from "react";

function Splash(){
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 4000);
  });
return (
      <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../assets/SplashScreen.png')}
      >
        <View style={styles.container}>

        </View>
      </ImageBackground>
    </SafeAreaView>
    );
}



export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
