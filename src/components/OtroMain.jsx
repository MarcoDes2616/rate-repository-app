import React from "react";
import { Text, View } from "react-native";
import Constants from 'expo-constants';
import Repositories from "./Repositories";

const OtroMain = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}>
      <Repositories />
    </View>
  );
};

export default OtroMain;
