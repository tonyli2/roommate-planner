import { StatusBar } from 'expo-status-bar';
import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <View style = {styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Assigned Tasks</Text>

        <View style = {styles.items}>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  taskWrapper: {
    paddingTop: 75,
    paddingHorizontal: 30,

  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  items: {},
});
