import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import StyledText from './StyledText'

const styles = StyleSheet.create({
    container: {

    },
    text: {

    }
})

const AppBar = (props) => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' st yles={styles.text}>App Bar</StyledText>
        </View>
    )
}

export default AppBar