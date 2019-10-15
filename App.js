import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home'
import ListMateri from './screen/ListMateri'
import Main from './route/Navigasi'
import Quiz from './screen/Quiz'
import DashQuiz from './screen/DashQuiz'
export default function App() {
  return (
    //<View style={styles.container}>
    //<Text>Open up App.js to start working on your app!</Text>
    //</View>
    //<Home />
    //<ListMateri/>
    <Main />
    //<Quiz />
    //<DashQuiz />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
