import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body, 
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
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    blue: {
        color: 'blue'
    },
    small: {
        fontSize: 10,
    }
})


const StyledText = ({children, color, fontSize, fontWeight, align, style, ...restOfProps}) => {

    const textStyles = [
        styles.text,
        style,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontWeight === 'bold' && styles.bold,
        fontSize === 'subheading' && styles.subheading,
        align === 'center' && {textAlign: 'center'},
        color === 'white' && {color: 'white'},
    ]


    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
};

export default StyledText;