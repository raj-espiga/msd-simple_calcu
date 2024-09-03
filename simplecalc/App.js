import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setResult(parseFloat(number1) + parseFloat(number2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(number1) - parseFloat(number2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(number1) * parseFloat(number2));
  };

  const handleDivide = () => {
    if (parseFloat(number2) !== 0) {
      setResult(parseFloat(number1) / parseFloat(number2));
    } else {
      setResult('Error: Division by zero');
    }
  };

  const handleReset = () => {
    setNumber1('');
    setNumber2('');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Calculator</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.inputFirst}>First Number:</Text>
        <TextInput style={styles.inputBox1} keyboardType="numeric" value={number1} onChangeText={setNumber1} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.inputSecond}>Second Number:</Text>
        <TextInput style={styles.inputBox2} keyboardType="numeric" value={number2} onChangeText={setNumber2} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button title="Add" onPress={handleAdd} />
          </View>
          <View style={styles.buttonRow}>
          <Button title="Subtract" onPress = {handleSubtract} />
        </View>
        <View style={styles.buttonRow}>
          <Button title="Multiply" onPress={handleMultiply} />
          </View>
          <View style={styles.buttonRow}>
          <Button title="Divide" onPress={handleDivide} />
        </View>
      </View>
      <Text style={styles.result}>
        Result: {result !== null ? result : ''}
      </Text>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
  },
  inputFirst: {
    fontSize: 20,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 47,
  },
  inputSecond: {
    fontSize: 20,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  inputBox1: {
    height: 50,
    width: 173,
    justifyContent: 'flex-end',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  inputBox2: {
    height: 50,
    width: 173,
    justifyContent: 'flex-end',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  buttonRow : {
    marginBottom: 8,
    borderRadius: 18,
    overflow: 'hidden',
  },
  result: {
    fontSize: 15,
    textAlign: 'left',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    borderRadius: 18,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#007BFF',
  },
});