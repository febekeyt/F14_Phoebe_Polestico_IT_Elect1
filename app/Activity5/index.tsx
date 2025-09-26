import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <CounterApp />
        <ColorChangerApp />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30, 
    paddingVertical: 20,
  },
});