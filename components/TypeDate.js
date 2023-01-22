import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const typeDate = () => {
  const [text, setText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      mode="outlined"
      label="Date"
      placeholder="Deadline"
      right={<TextInput.Affix text="/20" />}
    />
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: "100%",
    position: 'relative',
    justifyContent: 'center'
    }

});

export default typeDate;