import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

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
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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
