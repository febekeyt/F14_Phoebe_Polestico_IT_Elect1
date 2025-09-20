import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white'); 

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer App</Text>
      <Button title="White" onPress={() => setBgColor('white')} />
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
