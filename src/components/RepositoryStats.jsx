import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const RepositoryStats = (props) => {
  const parseThousands = (number) => {
    return number > 1000 ? `${Math.round(number / 100) / 10}k` : number;
  };
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </StyledText>
        <StyledText align="center" >
          STARS
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText align="center" >
          FORKS
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.reviewCount)}
        </StyledText>
        <StyledText align="center" >
          REVIEWS
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(props.ratingAverage)}
        </StyledText>
        <StyledText align="center" >
          RATING
        </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
