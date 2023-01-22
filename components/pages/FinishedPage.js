import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


function FinishedScreen({navigation}) {
  return (
    <View>
      <Text>This is the Finished screen</Text>
      <Button 
            title="To Do Tasks"
            onPress={() => navigation.navigate("ToDoPage")}
        />
        <Button 
            title="Assigned Tasks"
            onPress={() => navigation.navigate("AssignedScreen")}
        />
    </View>
  );
}
export default FinishedScreen;
