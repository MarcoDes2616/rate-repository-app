import React from "react";
import { View, FlatList } from "react-native";
import repositories from "../data/repositories.js";
import RepositoryItems from "./RepositoryItems.jsx";

const Repositories = (props) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item: repo }) => (
       <RepositoryItems {...repo} />
      )}
    ></FlatList>
  );
};

export default Repositories;
