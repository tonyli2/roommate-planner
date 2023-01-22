import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, SafeAreaView, Pressable, Platform } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({navigation}) {
  const [pressed, setPressed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <SafeAreaView style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')}/>
      </SafeAreaView>

     <SafeAreaView style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Intelliphant</Text>
        <Text style={styles.subTitle}>So a roommate never forgets</Text>
      </SafeAreaView>

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
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2CBF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flex: 3,
    marginBottom: 20
  },
  logo:{
    marginTop: 50,
    width: 180,
    height: 180

  },
  taskWrapper: {
    flex: 6,
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
    flex: 10,
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 100
    // flexDirection: 'column-reverse'
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
    marginBottom: 5
    // top: 250

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
    // top: 80,
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
    // top: 2,
  },

  text: {
    fontSize: 30,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#000000',
  }
});