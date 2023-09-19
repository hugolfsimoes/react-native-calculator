import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

function App(): JSX.Element {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState<string | null>(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const addDigit = (n: string) => {
    const clearPrevDisplay = displayValue === '0' || clearDisplay;

    if (n === '.' && !clearDisplay && displayValue.includes('.')) return;

    const currentValue = clearPrevDisplay ? '' : displayValue;
    const newDisplay = currentValue + n;
    setDisplayValue(newDisplay);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(newDisplay);
      const copyValues = [...values];
      copyValues[current] = newValue;
      setValues(copyValues);
    }
  };

  const clearMemory = () => {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
  };

  const setNewOperation = (op: string) => {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = op === '=';
      const copyValues = [...values];
      try {
        copyValues[0] = eval(`${copyValues[0]} ${operation} ${copyValues[1]}`);
      } catch (error) {
        copyValues[0] = values[0];
      }

      copyValues[1] = 0;
      setDisplayValue(copyValues[0].toString());
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(copyValues);
    }
  };

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" onClick={clearMemory} triple />
        <Button label="/" onClick={setNewOperation} operation />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" onClick={setNewOperation} operation />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" onClick={setNewOperation} operation />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" onClick={setNewOperation} operation />
        <Button label="0" onClick={addDigit} double />
        <Button label="." onClick={addDigit} />
        <Button label="=" onClick={setNewOperation} operation />
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
