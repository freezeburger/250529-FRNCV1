import { Animated, ImageBackground, StyleSheet, View } from "react-native";
import { useEffect, useRef } from "react";
import AppButton from "@/components/AppButton";

const image = require('@/assets/bg-home.png');

export default function MainView() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => { fadeIn() }, []);

  return (
    <View style={pres.container}>
      <ImageBackground source={image} style={pres.image}>

        <View style={{ flex: 10 }}>
          <Animated.Text style={ [pres.title, { opacity: fadeAnim }] }>App Movie</Animated.Text>
        </View>

        <Animated.View style={{ flex: 1, flexDirection: 'row', opacity: fadeAnim }}>

          <AppButton href="/edition" children="Edition"></AppButton>

          <AppButton href="/movies" color="black" backgroundColor="#f4e61e">Movies</AppButton>

          <AppButton href="/users" color="black" backgroundColor="#f4e61e">Users</AppButton>

        </Animated.View>

      </ImageBackground>
    </View>
  );
}


const pres = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    textShadowColor: '#f4511e',
    textShadowRadius: 20,
  },
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '100%'
  }
});


