import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Pressable } from 'react-native';
import Tasks from '../tasks/task';

function FinishedScreen({navigation}) {
  return (

    <View style={styles.container}>
      <View style = {styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Finished Tasks</Text>
        <View style = {styles.items}>
          <Tasks content={{text: 'Task 1\t'}} name={{text: 'Hunter'}}/>
          <Tasks content={{text: 'Task 2\t'}} name={{text: 'Tony'}}/>
          <Tasks content={{text: 'Task 3\t'}} name={{text: 'Alex'}}/>
        </View>
      </View>

      <SafeAreaView style={styles.bottomNavigation}>
        <Pressable 
        style={styles.buttonLeft} 
        onPress={() => navigation.navigate("ToDoPage")}>
          <Text style={styles.text}>To-Do</Text>
        </Pressable>
        
        <Pressable 
        style={styles.buttonRight} 
        onPress={() => navigation.navigate("AssignedScreen")}>
          <Text style={styles.text}>Assigned Tasks</Text>
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
    paddingTop: 75,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: '24',
    fontWeight: 'bold',
  },
  items: {
    position: 'relative',
    top: 50,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right',
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
    borderRadius: 10,
    borderWidth: 1,
    right: -50
  },
  buttonRight: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: '30%',
    borderRadius: 4,
    backgroundColor: '#FCF9FF',
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    right: -240,
    top: -45,

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
  }
});

export default FinishedScreen;
