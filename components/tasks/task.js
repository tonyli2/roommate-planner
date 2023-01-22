import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Tasks = ({content, name}) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <TextInput style={styles.itemText}placeholder={content.text}></TextInput>
                <Text style={styles.itemText}>Assignee:</Text>
                <TextInput style={styles.itemTextAssignee} placeholder={name.text}></TextInput>
                
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#A686BF',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    itemTextAssign: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#AAA',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 150,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#A686BF',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Tasks;