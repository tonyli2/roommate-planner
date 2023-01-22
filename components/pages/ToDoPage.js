import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Pressable } from 'react-native';
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

      {/* changed button to pressable cuz button cannot use style prop
      but I haven't figure out how to put two buttons side by side. */}
      
      <SafeAreaView style={styles.bottomNavigation}>
        <Pressable 
        style={styles.buttonLeft} 
        onPress={() => navigation.navigate("AssignedScreen")}>
          <Text style={styles.text}>Assigned Tasks</Text>
        </Pressable>
        
        <Pressable 
        style={styles.buttonRight} 
        onPress={() => navigation.navigate("FinishedScreen")}>
          <Text style={styles.text}>Finished Tasks</Text>
        </Pressable>
      </SafeAreaView>
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
  bottomNavigation: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  buttonLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: '30%',
    borderRadius: 4,
    backgroundColor: '#FCF9FF',
    borderRadius: 10
  },
  buttonRight: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: '30%',
    borderRadius: 4,
    backgroundColor: '#FCF9FF',
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    top: 529

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  }
});

export default ToDoScreen;
