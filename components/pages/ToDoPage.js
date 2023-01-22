import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';

function ToDoScreen({navigation}) {

  //A Component which is a button which once pressed will create a new task
  const TaskAdder = () => {

    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        //setTasks([...tasks, ]);
    };

    return (
        <View>
            <Button title="Add Task" onPress={handleAddTask} />
            {tasks}
        </View>
    );
  };

  return (
    <>
      <View>
        <Button 
              title="Add task"
              onPress={() => navigation.navigate("FinishedScreen")}
          />
        <Text>This is the TODO screen</Text>
        <Button 
              title="Assigned Tasks"
              onPress={() => navigation.navigate("AssignedScreen")}
          />
          <Button 
              title="Finished Tasks"
              onPress={() => navigation.navigate("FinishedScreen")}
          />
      </View>
    </>
  );
}
export default ToDoScreen;
