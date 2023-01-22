import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Pressable, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Tasks from '../tasks/task';

function ToDoScreen({navigation}) {

  return (
    <View style={styles.container}>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add a Task'} />

        <TouchableOpacity >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}></Text>
          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>

      
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>To-Do Tasks</Text>

        <View style={styles.items}>
          
          <Tasks content={{text: 'Task 1\t'}} name={{text: 'Hunter'}}/>
          <Tasks content={{text: 'Task 2\t'}} name={{text: 'Tony'}}/>
          <Tasks content={{text: 'Task 3\t'}} name={{text: 'Alex'}}/>
          <Tasks content={{text: 'Task 4\t'}} name={{text: 'Carissa'}}/>
        </View>
      </View>

      
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

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: '#C0C0C0',
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#AAA',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'C0C0C0',
    borderWidth: 1,
  },
  addText: {},

  taskWrapper: {
    paddingTop: 75,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: '35',
    fontWeight: 'bold',
    textAlign: 'right',
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
    borderRadius: 10,
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

export default ToDoScreen;
