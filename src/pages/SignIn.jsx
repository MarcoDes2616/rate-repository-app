import React from "react";
import { Formik } from "formik";
import { Button, View, StyleSheet } from "react-native";
import FormikInput from "../components/FormikInput";
import { signInValidator } from "../validators/signInValidator";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const styles = StyleSheet.create({
    form: {
      backgroundColor: "white",
      paddingHorizontal: 20,
      margin: 12,
    },
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInValidator}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInput name="email" placeholder="Email" />
            <FormikInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

export default SignIn;
