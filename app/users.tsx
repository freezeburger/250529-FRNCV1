import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { FC, useEffect, useRef, useState } from "react";
import { Input } from '@rneui/themed';

import AppButton from "@/components/AppButton";

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


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

const UserItem: FC<{ user: User }> = ({ user }) => {

  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setDetailsVisible(!detailsVisible)}>
      <View style={styles.movie} >
        <Text style={styles.movieTitle}>🔰 {user.name}</Text>
        {
          detailsVisible && (
            <>
              <Text>{user.email}</Text>
              <Text>{user.email}</Text>
              <Text>{user.website}</Text>
            </>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

export default function MainView() {

  const [users,setUsers] = useState<User[]>([]);

  const [search, setSearch] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    if (inputRef.current) (inputRef.current as any).shake();
  }, []);

  const searchUsers= (users: User[]): User[] => {
    if (search === '') return users;
    return users.filter( user => user.name.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <>
      <View style={styles.header}>

        <Text style={styles.headerTitle}> Users - {search}</Text>

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
          data={searchUsers(users)}
          renderItem={({ item }) => <UserItem user={item} />}
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
