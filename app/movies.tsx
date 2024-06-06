import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { FC, useEffect, useRef, useState } from "react";
import { Input } from '@rneui/themed';

import AppButton from "@/components/AppButton";

export interface Movie {
  title: string
  year: number
  cast: string[]
  genres: string[]
  href: string
  extract: string
  thumbnail: string
  thumbnail_width: number
  thumbnail_height: number
}

const movies = require('@/assets/movies.json') as Movie[];

const MovieItem: FC<{ movie: Movie }> = ({ movie }) => {

  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setDetailsVisible(!detailsVisible)}>
      <View style={styles.movie} >
        <Text style={styles.movieTitle}>🔰 {movie.title}</Text>
        {
          detailsVisible && (
            <>
              <Text>{movie.year}</Text>
              <Text>{movie.cast?.join(', ')}</Text>
              <Text>{movie.genres?.join(', ')}</Text>
            </>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

export default function MainView() {

  const [search, setSearch] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) (inputRef.current as any).shake();
  }, []);

  const searchMovies = (movies: Movie[]): Movie[] => {
    if (search === '') return movies;
    return movies.filter( movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <>
      <View style={styles.header}>

        <Text style={styles.headerTitle}> My Movies - {search}</Text>

        <Input
          ref={inputRef}
          leftIcon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Type in to search" inputStyle={{ color: 'white' }}
          value={search}
          onChangeText={setSearch}
        />

      </View>

      <SafeAreaView style={styles.list}>

        <FlatList
          data={searchMovies(movies)}
          renderItem={({ item: movie }) => <MovieItem movie={movie} />}
          keyExtractor={(_, i) => i.toString()}
        />
      </SafeAreaView>

      <AppButton href="/" color="black">🏠 Back to Home</AppButton>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'black',
  },
  headerTitle: {
    color: 'white',
    fontSize: 32,
    margin: 10
  },
  list: {
    flex: 8.5
  },
  movie: {
    backgroundColor: 'grey',
    padding: 20,
    margin: 5
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});


/*
<View style={styles.generic}>
    {
        movies.map( (movie,i) => <Text key={i}>{movie.title}</Text>)
    }
</View>
*/
