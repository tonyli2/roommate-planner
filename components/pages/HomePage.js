import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, SafeAreaView, Pressable } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({navigation}) {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>App Title</Text>
        <Text style={styles.subTitle}>Organize Your Roommates</Text>
      </View>

      <SafeAreaView style={styles.Menu}>

        <Pressable 
        style={styles.ToDoButton} 
        onPress={() => navigation.navigate("ToDoPage")}>
          <Text style={styles.text}>To-Do</Text>
        </Pressable>

        <Pressable 
        style={styles.AssignedButton} 
        onPress={() => navigation.navigate("AssignedScreen")}>
          <Text style={styles.text}>Assigned Tasks</Text>
        </Pressable>

        <Pressable 
        style={styles.FinishedButton} 
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWrapper: {
    paddingTop: 75,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    position: 'relative',
    textAlign: 'center',
    top: 120,
    color: '#856C99'
  },
  subTitle: {
    fontSize: 25,
    position: 'relative',
    textAlign: 'center',
    top: 130,
    color: '#494949'
  },

  Menu: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  ToDoButton: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 80.7,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#856C99',
    top: 350,

  },

  AssignedButton: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#856C99',
    top: 180,
  },

  FinishedButton: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25.5,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#856C99',
    top: 7.2,
  },

  text: {
    fontSize: 30,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#000000',
  }
});