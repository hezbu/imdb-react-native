import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import MovieRepositoryInfoItem from './MovieRepositoryInfoItem'

const styles = StyleSheet.create({
    container: {
        padding: 50,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: `bold`,
        marginBottom: 5
    },
    image: {
        width: '100%',
        height: 400,
        
    }
})


const MovieRepositoryItem = (props) => {

    
    return (
        <View key={props.id} style={styles.container}>
            {props.primaryImage && <Image 
            resizeMode={'center'} 
            style={styles.image} 
            source={{ uri: props.primaryImage.url}}/>}
            <StyledText fontSize="big" fontWeight="bold" color="secondary">{props.titleText.text}</StyledText>
            <MovieRepositoryInfoItem {...props} />
        </View>
    )
}

export default MovieRepositoryItem