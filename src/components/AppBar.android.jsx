import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const style = StyleSheet.create({
  container: {
    backgroundColor: "peru",
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
    flexDirection: "row",
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  textInactive: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
});

const AppBar = () => {
  return (
    <View style={style.container}>
      <ScrollView horizontal style={style.scroll}>
        <AppBarTab active to="/">
          Repositories
        </AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
