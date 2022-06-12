import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import getUpcomingTitles from '../api/rapidApiHub'
import MovieRepositoryItem from './MovieRepositoryItem'

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
            console.log(data.data.results);
            setMovies(data.data);
        }).catch((err) => {
            setErrorMessage(err)
        })
    }, [])



    return (
        <View>
            {
                movies && <FlatList style={{marginTop: 2, marginBottom: 2}}
                    data={movies.results}
                    ItemSeparatorComponent={() => <Text> </Text>}
                    renderItem={({ item }) => (
                        <MovieRepositoryItem {...item} />
                    )}
                />
            }
        </View>
    )
}

export default MoviesRepository