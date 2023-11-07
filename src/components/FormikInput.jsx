import React from "react";
import StyledInput from "./StyledInput";
import { useField } from "formik";
import { StyleSheet, Text } from "react-native";

const FormikInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const styless = StyleSheet.create({
    error: {
        color: "red",
        fontSize: 12,
        marginTop: -5,
        marginLeft: 10,
        },
    });

  return (
    <>
    <StyledInput
      value={field.value}
      onChangeText={(text) => helpers.setValue(text)}
      {...props}
      error={meta.error}
    />
    {meta.error && <Text style={styless.error}>{meta.error}</Text>}
    </>
  );
};

export default FormikInput;
