import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native-web";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";
import { Pressable } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
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
const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const styles = [pathname == to ? style.text : style.textInactive];

  return (
    <Link to={to} component={Pressable}>
      <StyledText style={styles}>{children}</StyledText>
    </Link>
  );
};

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
