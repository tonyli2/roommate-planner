import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, 
  Pressable, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from '../tasks/task';
import { useTasks } from '../context.js';
import { customAlphabet } from 'nanoid/non-secure'; 
import { STATUS_enum } from '../util';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); 

function ToDoScreen({navigation}) {

  const {tasks, setTasks} = useTasks();
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    Keyboard.dismiss();
    const newTask = {
      taskId: nanoid(),
      content: taskInput,
      name: "Unassigned",
      status: STATUS_enum.TODO
    }
    setTasks(tasks => [...tasks, newTask]) 
    setTaskInput("");
  }

  return (
    <View style={styles.container}>

    <KeyboardAvoidingView keyboardVerticalOffset={100}>
      <TextInput style={styles.input} placeholder={'Enter Task'} value={taskInput} onChangeText={text => setTaskInput(text)}/>
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        
        
      </KeyboardAvoidingView>

      
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>To-Do Tasks</Text>

        <View style={styles.items}>
          {
            tasks.filter((item) => item.status == STATUS_enum.TODO).map((item) => <Task task={item} key={item.taskId} onPress={() => navigation.navigate("AssignedScreen")}/>)
          }
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
    borderColor: '#000000',
    width: 200,
    position: 'relative',
    left: 30,
    top: 10
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'C0C0C0',
    borderWidth: 1,
    position: "relative",
    top: -45,
    left: 250
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
    position: 'relative',
    top: -109,
  },
  items: {
    position: 'relative',
    top: -58,
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

export default ToDoScreen;
