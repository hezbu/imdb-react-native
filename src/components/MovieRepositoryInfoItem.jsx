import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'

const MovieRepositoryInfoItem = (props) => {

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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <StyledText fontWeight="bold">Fecha de estreno:</StyledText>
                <StyledText>{props.releaseDate.day}/{props.releaseDate.month}/{props.releaseDate.year}</StyledText>
            </View>
            <View>
                <StyledText align='right' fontWeight="bold">Tipo:</StyledText>
                <StyledText align='right'>{translateType(props.titleType.text)}</StyledText>
            </View>
        </View>
    )
}

export default MovieRepositoryInfoItem