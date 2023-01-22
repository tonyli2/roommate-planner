import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function AssignedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style = {styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Assigned Task</Text>
        <View style = {styles.items}>
          <Button 
              title="To Do Tasks"
              onPress={() => navigation.navigate("ToDoPage")}
          />
          <Button 
            title="Finished Tasks"
            onPress={() => navigation.navigate("FinishedScreen")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  items: {},
});

export default AssignedScreen;
