import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AssignedScreen from './components/pages/AssignedPage';
import ToDoScreen from './components/pages/ToDoPage';
import FinishedScreen from './components/pages/FinishedPage';
import HomeScreen from './components/pages/HomePage';

//The variable that creates a stack for the pages
const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
          options={{title: 'To-Do Tasks'}}
        />
        <Stack.Screen
          name="AssignedScreen"
          component={AssignedScreen}
          options={{title: 'Assigned Tasks'}}
        />
        <Stack.Screen 
          name="FinishedScreen"
          component={FinishedScreen}
          options={{title: 'Finished Tasks'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}