import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import AssignedScreen from './components/pages/AssignedPage';
import ToDoScreen from './components/pages/ToDoPage';
import FinishedScreen from './components/pages/FinishedPage';
import HomeScreen from './components/pages/HomePage';

//The variable that creates a stack for the pages
const stack = createStackNavigator;

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>New changes</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const pageStack = () => {
  return(
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
          name="Finished"
          component={FinishedScreen}
          options={{title: 'Finished Tasks'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});