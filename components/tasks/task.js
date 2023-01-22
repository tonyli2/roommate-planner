import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Tasks = (content) => {

    return (
        <View>
            <Text>{content.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Tasks;