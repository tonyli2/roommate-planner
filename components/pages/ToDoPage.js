import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Tasks from '../tasks/task';

function ToDoScreen({navigation}) {
  return (
    <View style={styles.container}>

      {/* Main module starts */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>TODO tasks</Text>

        <View style={styles.items}>
          {/* Add tasks here */}
          <Tasks content={{text: 'Task 1\t'}} name={{text: 'Hunter'}}/>
          <Tasks content={{text: 'Task 2\t'}} name={{text: 'Tony'}}/>
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
    backgroundColor: '#E2CBF4',
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
    position: 'relative',
    top: 50,
    
    

  },
});

export default ToDoScreen;
