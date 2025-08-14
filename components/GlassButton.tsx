import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function GlassButton({label, onPress}: {label: string, onPress: () => void}) {
    return (
    <TouchableOpacity style={styles.glassButton} onPress = {onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    glassButton: {
    width: 109,
    height: 47,
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    marginLeft: 22,
    marginTop: 512,
    marginRight: 297
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});