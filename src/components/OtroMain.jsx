import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import Repositories from "./Repositories";
import SignIn from "../pages/SignIn";

const OtroMain = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default OtroMain;
