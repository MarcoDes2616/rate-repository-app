import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: '#ffffff',
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    font: {
        main: Platform.select({
            android: 'sans-serif',
            ios: 'Arial',
            default: 'times new roman'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    },
    appBar: {
        primary: '#676767',
        textPrimary: '#ffffff',
        textSecondary: '#f2f2f2',
    }
}

export default theme;