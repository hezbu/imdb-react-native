import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import getUpcomingTitles from '../api/rapidApiHub'

const MoviesRepository = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [movies, setMovies] = useState({
        page: 0,
        next: null,
        entries: 0,
        results: []
    });

    useEffect(() => {
        getUpcomingTitles().then((data) => {
            setMovies(data.data);
        }).catch((err) => {
            setErrorMessage(err)
        })
    }, [])

    return (
        <View>
            {
                movies && <FlatList
                    data={movies.results}
                    renderItem={({item}) => (
                        <View key={item.id}>
                            <Text>{item.titleText.text}</Text>
                            <Text>Fecha de estreno: {item.releaseDate.day}/{item.releaseDate.month}/{item.releaseDate.year}</Text>
                        </View>
                    )}
                />
            }
        </View>
    )
}

export default MoviesRepository