import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import Repositories from "./Repositories";

const OtroMain = () => {
  const styless = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      width: "100%",
      padding: 10
    }
  })
  return (
    <View style={styless.container}>
      <Repositories />
    </View>
  );
};

export default OtroMain;
