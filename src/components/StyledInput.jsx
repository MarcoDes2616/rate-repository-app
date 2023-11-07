import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const StyledInput = ({style, error, ...props}) => {
    const styles = StyleSheet.create({
        input: {
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "grey",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginVertical: 10,
        },
    });

    const styleInput = [
        styles.input,
        style,
        error && { borderColor: "red" }
    ]

    return (
        <TextInput style={styleInput} {...props}/>
    );
};

export default StyledInput;