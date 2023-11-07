import React from "react";
import OtroMain from "./src/components/OtroMain.jsx";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NativeRouter>
      <OtroMain />
    </NativeRouter>
    </>
  );
}
