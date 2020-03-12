import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Inciando</Text>
      <Text style={styles.title}>DevRadar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title:{
    fontWeight: "bold",
    fontSize: 45,
    color: '#FFF', 
  },
  subTitle: {
    color: '#FFF',
    height: 60,
    fontSize: 14,
  }
})


