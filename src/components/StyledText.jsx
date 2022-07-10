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
    subheading: {
        fontSize: theme.fontSizes.subHeading
    }, 
    small: {
        fontSize: theme.fonts.small
    }
})

const StyledText = ({children, color, fontSize, fontWeight, style, ...restOfProps}) => {
    const textStyles = [
        styles.text,
        color === "primary" && styles.colorPrimary
        
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}

export default StyledText 