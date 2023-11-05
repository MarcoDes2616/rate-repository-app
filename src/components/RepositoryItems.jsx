import { View } from "react-native-web";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import { StyleSheet } from "react-native";



const RepositoryItems = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontWeight="bold" fontSize="subheading">
        {props.fullName}
      </StyledText>
      <StyledText >{props.description}</StyledText>
      <StyledText color={"white"} style={styles.lenguage}>{props.lenguage}</StyledText>
      <RepositoryStats {...props} />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        },
    lenguage: {
        padding: 4,
        borderRadius: 5,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        },
    })

export default RepositoryItems;
