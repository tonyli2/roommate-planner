import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Tasks from '../tasks/task';

function ToDoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the TODO screen</Text>

      {/* Main module starts */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>TODO tasks</Text>

        <View style={styles.items}>
          {/* Add tasks here */}
          <Tasks text={'Task 1'}/>
          <Tasks text={'Task 2'}/>
        </View>
      </View>

      <Button 
            title="Assigned Tasks"
            onPress={() => navigation.navigate("AssignedScreen")}
        />
        <Button 
            title="Finished Tasks"
            onPress={() => navigation.navigate("FinishedScreen")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A686BF',
  },
  taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: '24',
    fontWeight: 'bold',
  },
  items: {

  },
});

export default ToDoScreen;
