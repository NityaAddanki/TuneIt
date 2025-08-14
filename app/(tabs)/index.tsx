import DisplayMusic from '@/components/DisplayMusic';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import GlassButton from '../../components/GlassButton';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <DisplayMusic songName="Style" onPress={() => alert('Yay!')} />
      <GlassButton label="Mood" onPress={() => alert('Button Pressed!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#222',
  },
});
