import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Tasks = (content, name) => {

    return (
        <View>
            <Text>{content.text}</Text>
            <Text>Assignee: {name.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Tasks;