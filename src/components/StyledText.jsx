import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fonts.small,
        fontFamily: theme.fonts.main,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },  
    colorSecondary: {
        color: theme.colors.textSecondary
    }, 
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    big: {
        fontSize: theme.fontSizes.heading
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeading
    }, 
    small: {
        fontSize: theme.fonts.small
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

const StyledText = ({children, color, align, fontSize, fontWeight, style, ...restOfProps}) => {
    const textStyles = [
        styles.text,
        align === "right" && styles.textAlignRight,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subHeading" && styles.subHeading,
        fontSize === "small" && styles.small,
        fontSize === "big" && styles.big,
        fontWeight === "bold" && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}

export default StyledText 