import { Jersey20_400Regular } from "@expo-google-fonts/jersey-20";
import { useFonts } from "expo-font";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen ({navigation} : any) {
  
  const [fontsLoaded] = useFonts({
    Jersey20_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={page.container}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }  
  
  
  return (
        <View style ={page.container}>
            {/*TuneIt*/}
            <Text style={page.jersey20}>TuneIt</Text>

            <View style = {items.blueBox}>
              <Text style = {items.boxText}>Find music...</Text>

              <Text style = {items.boxText}>Find music...</Text>

            </View>

            <Button 
            title = "Add to Spotify"
            onPress={() => {
                // Coming soon!!! Connect to Spotify to add your favorite songs!
            }}
            />

            <Button
            title = "History"
            onPress={() => {
                // Coming soon!!! View Your Song History!!!
            }}
            />

            <Button
            title = "Take Quiz Bitch!" 
            onPress={() => {
                // Coming soon!!!! YAWSSSSSS!
            }}
            />
            
        </View>
  );
}

// create one for the background with the TuneIt logo.
const page = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 45,
    paddingHorizontal: 0,
    backgroundColor: '#94A7C7',
    alignItems: "center"
  },
  jersey20: {
    fontSize: 60,
    fontFamily: "Jersey20_400Regular",
    color: '#546888',
    fontWeight: "400",
    letterSpacing: 5,
    textShadowColor: "#FFFDFD", // outline color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    display: "flex",
    width: 318,
    height: 66,
    textAlign: "center",
    flexDirection: "column",
  }, 
});

const items = StyleSheet.create({
  blueBox : {
    width: 366,
    height: 358,
    flexShrink: 0,
    borderRadius: 6,
    borderWidth: 5,
    borderColor: '#516585ff',
    backgroundColor: '#5D6C86',
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000000a2',
    shadowRadius: 1,
  },

  boxText: {
    textAlign: "center",
    fontStyle: "normal",
    fontFamily: "SF Pro",
    fontSize: 16,
    paddingVertical: 150,
  }
})