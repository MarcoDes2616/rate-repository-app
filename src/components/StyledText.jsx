import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.font.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: "bold"
    },
    blue: {
        color: 'blue'
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    small: {
        fontSize: 10
    }
})


const StyledText = ({children, blue, bold, big, small, primary, secondary, ...restOfProps}) => {

    const textStyles = [
        styles.text,
        primary && styles.colorPrimary,
        secondary && styles.colorSecondary,
        bold && styles.bold,
        blue && styles.blue,
        big && styles.subheading,
        small && styles.small,
    ]


    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
};

export default StyledText;