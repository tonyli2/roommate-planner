import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AssignedScreen() {
  return (
    <View style={styles.container}>
    
      <View style = {styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Assigned Task</Text>

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

export default AssignedScreen;
