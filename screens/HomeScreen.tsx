import React from "react";
import {View, Text, Button} from "react-native";

export default function HomeScreen ({navigation} : any) {
    return (
        <View style ={styles.container}>
            {/*TuneIt*/}
            <Text style={styles.title}>TuneIt</Text>

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
    )
}
