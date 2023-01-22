import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function ToDoScreen({navigation}) {
  return (
    <View>
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
  );
}
export default ToDoScreen;
