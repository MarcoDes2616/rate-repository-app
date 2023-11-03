import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories.js";
import StyledText from "./StyledText.jsx";

const Repositories = (props) => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <View key={props.id}>
          <StyledText bold>{repo.id}</StyledText>
          <StyledText primary>{repo.fullName}</StyledText>
        </View>
      )}
    ></FlatList>
  );
};

export default Repositories;
