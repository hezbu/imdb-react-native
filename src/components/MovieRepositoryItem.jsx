import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
    }
})

const MovieRepositoryItem = (props) => {

    const translateType = (type) => {
        switch (type) {
            case 'Movie': return 'Pelicula';
            case 'Short': return 'Cortometraje';
            case 'TV Episode': return 'Episodio de TV';
            case 'TV Series': return 'Serie';
            case 'Music Video': return 'Video Musical';
            default: return type;
        }
    }

    return (
        <View key={props.id} style={styles.container}>
            <Text style={styles.strong}>{props.titleText.text}</Text>
            <Text>Fecha de estreno: {props.releaseDate.day}/{props.releaseDate.month}/{props.releaseDate.year}</Text>
            <Text>Tipo: {translateType(props.titleType.text)}</Text>
        </View>
    )
}

export default MovieRepositoryItem