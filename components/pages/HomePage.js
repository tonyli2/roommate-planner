import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text>This is the Home Screen</Text>
        <Button 
            title="To Do Tasks"
            onPress={() => navigation.navigate("ToDoPage")}
        />
        <Button 
            title="Assigned Tasks"
            onPress={() => navigation.navigate("AssignedScreen")}
        />
        <Button 
            title="Finished Tasks"
            onPress={() => navigation.navigate("FinishedScreen")}
        />
        <StatusBar style="auto"/>
    </View>
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