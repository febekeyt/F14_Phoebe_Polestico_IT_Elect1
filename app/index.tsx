import React, { useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import Activity5 from './Activity5';
import MidAct1 from './MidAct1';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'activity5' | 'midact1'>('activity5');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Menu buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
        <Button title="Activity 5" onPress={() => setActiveScreen('activity5')} />
        <Button title="Mid Act 1" onPress={() => setActiveScreen('midact1')} />
      </View>

      {/* Render selected screen */}
      {activeScreen === 'activity5' ? <Activity5 /> : <MidAct1 />}
    </SafeAreaView>
  );
}
