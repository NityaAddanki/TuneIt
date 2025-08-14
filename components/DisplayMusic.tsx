import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function DisplayMusic({songName, onPress} : {songName: string, onPress: () => void}) {
    return (
        <TouchableOpacity style={styles.displayMusic} onPress = {onPress}>
            <Text style={styles.DisplayText}>{songName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    displayMusic: {
        width: 388,
        height: 433,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(30, 9, 49, 1)',
        marginLeft: 22,
        marginTop: 54,
        marginRight: 18,
        marginBottom: 439
    },
    DisplayText: {
        color: '#fff',
        fontWeight: '500',
    },
});