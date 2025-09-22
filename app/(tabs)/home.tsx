import { Jersey20_400Regular } from "@expo-google-fonts/jersey-20";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Cloud from '../../assets/images/source_image.png';
import { calculateResult } from "../results";

export default function HomeScreen () {
  
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState<{ [key: string]: string }>({});
  const [spotifyLoggedIn, setSpotifyLoggedIn] = useState(false);
  const [song, setSong] = useState<string|null>(null);
  const [authenticationModal, setAuthenticationModal] = useState(false);

  // function to handle spotify login

  const addToSpotify = () => {

    if (!spotifyLoggedIn) {
      setAuthenticationModal(true);
    }
  }

  const router = useRouter();

  const handleLogout = () => {
    router.replace('/login');
  }

  function handleSubmit() {

    if (Object.keys(selected).length == 0) {
      setOpenModal(false);
    } else if (Object.keys(selected).length < 8) {
      alert("please answer all questions!");
    } else {
      console.log("final answers: ", selected);

      const convertToNum = Object.fromEntries(
        Object.entries(selected).map(([mood, val]) => [mood, parseInt(val)])
      )

      console.log("Numeric Answers: ", convertToNum);
      
      // calculate the arousal and valence of the quiz results
      calculateResult(convertToNum);
      setOpenModal(false);
      setSelected({});
    }
  }

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

            <Pressable style = {[items.leftButton, {height: 35}, {width: 125}, {marginTop: 20}, {position: 'absolute'}, {flex: 1}, {top: "1%"}, {left: "1%"}]}
                          onPress = { () => handleLogout()}>
                          <Text style = {[page.jersey20, {fontSize: 25}, {marginTop: 5}]}>Logout</Text>
            </Pressable>

          <Modal visible = {authenticationModal} transparent = {true}>
            <View style = {page.modalDarkenBackground}>
              <View style = {[page.authentication, {height: 180}]}>
                <Text style = {{fontFamily: 'monospace',color: 'black',fontSize: 18, letterSpacing: 0}}> You're not connected to Spotify.</Text>
                                <Text style = {{fontFamily: 'monospace',color: 'black',fontSize: 18, letterSpacing: 0, marginBottom: 10}}> Connect to Spotify?</Text>

                <View style = {items.buttonRow}>
                  <Pressable style = {[items.leftButton, {height: 35}, {width: 125}]}
                    onPress = { () => setAuthenticationModal(false)}>
                    <Text style = {[page.jersey20, {fontSize: 25}, {marginTop: 5}]}>Yes</Text>
                  </Pressable>
                  <Pressable style = {[items.rightButton, {height: 35}, {width: 125}]}>
                    <Text style = {[page.jersey20, {fontSize: 25}, {marginTop: 5}]}>No</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <Modal visible={openModal} transparent = {true} animationType="slide">
            <View style = {page.overlay}>

              <View style = {[items.blueBox, {height: 825}]}>
                <Text style = {[page.directions, {fontSize: 30}, {marginTop: -1}]}>How___ are you?</Text>
                <Text style = {[page.directions, {fontSize: 20}, {marginBottom: 15}]}>1 - least  5 - most</Text>

                <View>
                  {['excited','energetic','happy','calm','sleepy','sad','bored','anxious'].map(mood =>(
                    <View key = {mood}>
                       <Text style = {[page.directions, {fontSize: 20},]}>{mood}</Text>
                       <View style = {[items.radioSect, {marginLeft: 50}]}>
                        {['1','2','3','4','5'].map((feeling: string) => (
                        <View key = {feeling}>
                          <Text>{feeling}</Text>
                          <TouchableOpacity style = {items.outer}
                          onPress = {() => 
                            setSelected( {...selected, [mood]: feeling})}>
                              {selected[mood] === feeling && <View style = {items.inner}/>}
                          </TouchableOpacity>
                        </View>
                      ))}
                      </View>
                    </View>
                  ))}
                </View>


                <Pressable style = {[items.quizButton, {height: 35}, {width: 125}]}
                onPress = { () => {
                  handleSubmit();
                }}>
                <Text style = {[page.jersey20, {fontSize: 25}, {marginTop: 5}]}>Submit</Text>

                </Pressable>

              </View>
            </View>
          </Modal>

            {/*TuneIt*/}
          <View style={items.titleRow}>
            <Image
            source={Cloud}
            resizeMode= "contain"
            style = {items.cloud}>  
            </Image>
            <Text style={[page.jersey20, {marginTop: 10}, {width: 180}]}>TuneIt</Text>
            <Image
            source={Cloud}
            resizeMode= "contain"
            style = {items.cloud}>  
            </Image>
          </View>
            

            <View style = {[items.blueBox, {marginBottom: 15}]}>

              <Text style = {items.boxText}>Find music...</Text>

            </View>

            <View style = {items.buttonRow}>
              <Pressable
                style = {items.leftButton}
                onPress={() => {
                    addToSpotify();
                }}>
                  <Text style = {{fontFamily: 'monospace',fontSize: 15, letterSpacing: 0}}>Add to Spotify</Text>
              </Pressable>
              
              <Pressable
                  style = {items.rightButton}
                  onPress={() => {
                      alert('Coming soon!!! Connect to Spotify to add your favorite songs!')
                  }}>
                    <Text style = {{fontFamily: 'monospace',fontSize: 15, letterSpacing: 0}}>History</Text>
              </Pressable>

            </View>
            
            <Text style = {[page.directions, {marginBottom: 20}]}> How are you feeling? </Text>
            <Text style = {{fontFamily: 'monospace',color: 'white',fontSize: 20, letterSpacing: 0}}> 1.Click on take quiz below </Text>
            <Text style = {{fontFamily: 'monospace',color: 'white',fontSize: 20, letterSpacing: 0}}> 2.Fill out questionnaire </Text>            
            <Text style = {{fontFamily: 'monospace',color: 'white',fontSize: 20, letterSpacing: 0, marginBottom: 15}}> 3.Listen to recommended songs </Text>
           
            <Pressable
                  style = {items.quizButton}
                  onPress={() => {
                    setOpenModal(true)
                  }}>
                    <Text style = {[page.jersey20, {fontSize: 30}, {marginTop: 10}]}>Take Quiz</Text>
            </Pressable>
            
        </View>
  );
}

// create one for the background with the TuneIt logo.
const page = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 0,
    backgroundColor: '#2a2a2bff',
    alignItems: "center",
    justifyContent: "center"
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
  directions: {
    fontSize: 44,
    fontFamily: "Jersey20_400Regular",
    color: '#eeeeeeff',
    fontWeight: "400",
    letterSpacing: 4,
    textShadowColor: "#4d4d4dff", // outline color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    display: "flex",
    width: 392,
    textAlign: "center",
    flexDirection: "column",
  },
  regularText: {
    fontSize: 44,
    fontFamily: "Jersey20_400Regular",
    color: '#1c1c1cff',
    fontWeight: "400",
    letterSpacing: 4,
    display: "flex",
    width: 392,
    textAlign: "center",
    flexDirection: "column",
  },
  overlay : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: '#5D6C86'
  },
  modalDarkenBackground : {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000a6"
  },
  authentication: {
    width: '90%',
    maxWidth: 400,
    aspectRatio: 1,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#87aac4b6',
    backgroundColor: '#d8d7d7ff',
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000000a2',
    shadowRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const items = StyleSheet.create({
  blueBox : {
    width: '90%',
    maxWidth: 400,
    aspectRatio: 1,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#131313b6',
    backgroundColor: '#5D6C86',
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000000a2',
    shadowRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  boxText: {
    textAlign: "center",
    fontStyle: "normal",
    fontFamily: "SF Pro",
    fontSize: 16,
    paddingVertical: 150,
  },

  leftButton: {
    flex: 1, 
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    backgroundColor: '#d0dcf0e8',
    borderWidth: 2,
    borderColor: '#707885ff',
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000000a2',
    shadowRadius: 1,
  },
  rightButton: {
    flex: 1,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    backgroundColor: '#d0dcf0f1',
    borderWidth: 2,
    borderColor: '#707885ff',
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000000a2',
    shadowRadius: 1,
  },

  buttonRow : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%', 
    maxWidth: 350, 
    marginBottom: 20,
    gap: 70,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",   // vertically aligns clouds with text
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 10
  },
  
  quizButton : {
    flexShrink: 0,
    width: 195,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#BFCADD',
    opacity: 0.75,
    flexDirection: "column",
    justifyContent: 'center', // centers text vertically
    alignItems: 'center', 
  },

  cloud : {
    width: 90,
    height: 60,
    opacity: 0.8,
    //resizeMode: "contain"
  },
  radioButton : {
    width: 44,
    height: 44,
    borderColor: "#a1acbdff",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "#8D98AA",
    justifyContent: "center",
    alignItems: "center",
  },
  radioSect : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
    flexWrap: "nowrap",
    padding: 10,
    width: 100,
  },
  outer: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#8D98AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner : {
    width: 30,
    height: 20,
    backgroundColor: '#8D98AA',
    borderRadius: 10,
  }
})