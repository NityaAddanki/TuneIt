import { Jersey20_400Regular } from "@expo-google-fonts/jersey-20";
import { useFonts } from "expo-font";
import React, {useState} from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Cloud from '../../assets/images/source_image.png';

export default function HomeScreen ({navigation} : any) {
  
  const [openModal, setOpenModal] = useState(false);

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

          <Modal visible={openModal} transparent = {true} animationType="slide">
            <View style = {page.overlay}>

              <View style = {[items.blueBox, {height: 825}]}>
                <Text style = {[page.directions, {fontSize: 30}, {marginTop: -750}]}>How___ are you?</Text>
                <Text style = {[page.directions, {fontSize: 20}]}>1 - least  5 - most</Text>

                {Array.from({length: 8}).map((_,rowIndex) => (
                  < View key = {rowIndex} style = {items.radioSect}>
                    {[1,2,3,4,5].map((num) => (
                      <TouchableOpacity key = {num} style = {items.radioButton}>
                        <Text style = {[page.directions, {fontSize: 20}]}>1</Text>
                      </TouchableOpacity>
                    ))}
                  

                  <TouchableOpacity style = {items.radioButton}>
                    <Text style = {[page.directions, {fontSize: 20}]}>2</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {items.radioButton}>
                    <Text style = {[page.directions, {fontSize: 20}]}>3</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {items.radioButton}>
                    <Text style = {[page.directions, {fontSize: 20}]}>4</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {items.radioButton}>
                    <Text style = {[page.directions, {fontSize: 20}]}>5</Text>
                  </TouchableOpacity>
                </View>
                ))}
                
                

                <Pressable style = {items.quizButton}
                onPress = { () => {
                  setOpenModal(false);
                }}>
                </Pressable>

              </View>
            </View>
          </Modal>

            {/*TuneIt*/}
          <View style={items.titleRow}>
            <Image
            source={Cloud}
            style = {items.cloud}>  
            </Image>
            <Text style={[page.jersey20, {marginTop: 10}, {width: 180}]}>TuneIt</Text>
            <Image
            source={Cloud}
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
                    alert('Coming soon!!! Connect to Spotify to add your favorite songs!')
                }}>
                  <Text style = {items.boxText}>Add to Spotify</Text>
              </Pressable>
              
              <Pressable
                  style = {items.rightButton}
                  onPress={() => {
                      alert('Coming soon!!! Connect to Spotify to add your favorite songs!')
                  }}>
                    <Text style = {items.boxText}>History</Text>
              </Pressable>

            </View>
            
            <Text style = {[page.directions, {marginBottom: 20}]}> How are you feeling? </Text>
            <Text style = {[page.directions, {fontSize:20}, {letterSpacing:2}]}> 1.Click on take quiz below </Text>
            <Text style = {[page.directions, {fontSize:20}, {letterSpacing:2}]}> 2.Fill out questionnaire </Text>            
            <Text style = {[page.directions, {fontSize:20}, {letterSpacing:2},{marginBottom: 20}]}> 3.Listen to recommended songs </Text>
           
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
    backgroundColor: '#94A7C7',
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
    color: '#FFFF',
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
  }
});

const items = StyleSheet.create({
  blueBox : {
    width: '90%',
    maxWidth: 400,
    aspectRatio: 1,
    borderRadius: 6,
    borderWidth: 7,
    borderColor: '#4e6284ff',
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
    backgroundColor: '#D0DCF0',
  },
  rightButton: {
    flex: 1,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    backgroundColor: '#D0DCF0',
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
    height: 58,
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
    resizeMode: "contain"
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
    margin: 10
  },
  radioSect : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  }
})