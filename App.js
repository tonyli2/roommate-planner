import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AssignedScreen from './components/pages/AssignedPage';
import ToDoScreen from './components/pages/ToDoPage';
import FinishedScreen from './components/pages/FinishedPage';
import HomeScreen from './components/pages/HomePage';
import { TaskContext } from "./components/context";
import React, { useState } from 'react';

//The variable that creates a stack for the pages
const Stack = createNativeStackNavigator();

export default function App() {

  const [tasks, setTasks] = useState([]);

  return (

    //In combination with the usedTasks, lets you pull task state from any page in the application.
    <TaskContext.Provider value={{tasks, setTasks}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen 
            name="ToDoPage"
            component={ToDoScreen}
            options={{title: ''}}
          />
          <Stack.Screen
            name="AssignedScreen"
            component={AssignedScreen}
            options={{title: ''}}
          />
          <Stack.Screen 
            name="FinishedScreen"
            component={FinishedScreen}
            options={{title: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContext.Provider>
  );
}