import React from 'react';
import { StyleSheet } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import StyledText from './StyledText';
import theme from '../theme';
import { Pressable } from "react-native";
import Constants from "expo-constants";

const AppBarTab = ({children, to}) => {
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
      const { pathname } = useLocation();
  const styles = [pathname == to ? style.text : style.textInactive];
    return (
        <Link to={to} component={Pressable}>
        <StyledText style={styles}>{children}</StyledText>
      </Link>
    );
};

export default AppBarTab;