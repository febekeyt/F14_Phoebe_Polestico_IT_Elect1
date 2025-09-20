import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Messenger from './Messenger';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.contentContainer,
          { flexGrow: 1 } 
        ]}
      >
        <Messenger />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
