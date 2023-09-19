import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

function App(): JSX.Element {
  const [displayValue, setDisplayValue] = useState('0');

  const addDigit = (n: string) => {
    setDisplayValue(displayValue !== '0' ? displayValue + n : n);
  };

  const clearMemory = () => {
    setDisplayValue('0');
  };

  const setOperation = (operation: string) => {};

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" onClick={clearMemory} triple />
        <Button label="/" onClick={setOperation} operation />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" onClick={setOperation} operation />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" onClick={setOperation} operation />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" onClick={setOperation} operation />
        <Button label="0" onClick={addDigit} double />
        <Button label="." onClick={addDigit} />
        <Button label="=" onClick={setOperation} operation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
