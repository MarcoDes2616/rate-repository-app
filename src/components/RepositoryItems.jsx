import { Image, View } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import { StyleSheet } from "react-native";

const RepositoryHeader = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={{ flexShrink: 1 }}>
        <StyledText fontWeight="bold" testID="fullName">
          {props.fullName}
        </StyledText>
        <StyledText color="secondary" testID="description">
          {props.description}
        </StyledText>
        <StyledText style={styles.lenguage} testID="language">
          {props.lenguage}
        </StyledText>
      </View>
    </View>
  );
};

const RepositoryItems = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  lenguage: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    marginVertical: 4,
    alignSelf: "flex-start",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});

export default RepositoryItems;
