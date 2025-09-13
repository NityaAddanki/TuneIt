import {StyleSheet} from "react-native";

export const page = StyleSheet.create({
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

export const items = StyleSheet.create({
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
  },
  radioSect : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
    flexWrap: "nowrap",
    padding: 10,
    width: 100,
    //backgroundColor: "black"
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
  },

});