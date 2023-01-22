import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Pressable } from 'react-native';
import Task from '../tasks/task';
import { useTasks } from '../context.js';
import { STATUS_enum } from '../util';

function AssignedScreen({navigation}) {
  const {tasks, setTasks} = useTasks();
  return (
    <View style={styles.container}>
      <View style = {styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Assigned Tasks</Text>
        <View style = {styles.items}>
          {
            tasks.filter((item) => item.status == STATUS_enum.TODO).map((item, index) => <Task task={item} key={item.id} id={index} onPress={(e) => {
                console.log(tasks)
                item.status = STATUS_enum.FINISHED
                tasks[index] = item
                setTasks([...tasks])
            }}/>)
          }
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
    paddingTop: 75,
    paddingHorizontal: 30,

  },
  sectionTitle: {
    fontSize: 35,
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

export default AssignedScreen;
