import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: theme.colors.textPrimary
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: '#09f',
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    }
})

const StyledText = ({blue, bold, big, small, children}) => {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small
    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}

export default StyledText 