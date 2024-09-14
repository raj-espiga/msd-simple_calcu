import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const App = () => {
  const [result, setResult] = useState(null);

  const handleAdd = (values) => {
    setResult(parseFloat(values.number1) + parseFloat(values.number2));
  };

  const handleSubtract = (values) => {
    setResult(parseFloat(values.number1) - parseFloat(values.number2));
  };

  const handleMultiply = (values) => {
    setResult(parseFloat(values.number1) * parseFloat(values.number2));
  };

  const handleDivide = (values) => {
    if (parseFloat(values.number2) !== 0) {
      setResult(parseFloat(values.number1) / parseFloat(values.number2));
    } else {
      setResult('Error: Division by zero');
    }
  };

  const validationSchema = Yup.object().shape({
    number1: Yup.number().required('First number is required'),
    number2: Yup.number().required('Second number is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <Formik
        initialValues={{ number1: '', number2: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.inputFirst}>First Number:</Text>
              <TextInput
                style={styles.inputBox1}
                keyboardType="numeric"
                value={values.number1}
                onChangeText={handleChange('number1')}
                onBlur={handleBlur('number1')}
              />
            </View>
            {errors.number1 && touched.number1 ? (
                <Text style={{ fontSize: 15, color: 'red', marginLeft: 180, marginTop: 0 }}>{errors.number1}</Text>
              ) : null}
            <View style={{ marginTop: 50, flexDirection: 'row' }}>
              <Text style={styles.inputSecond}>Second Number:</Text>
              <TextInput
                style={styles.inputBox2}
                keyboardType="numeric"
                value={values.number2}
                onChangeText={handleChange('number2')}
                onBlur={handleBlur('number2')}
              />
            </View>
            {errors.number2 && touched.number2 ? (
                <Text style={{ fontSize: 15, color: 'red', marginLeft: 170, marginTop: 0 }}>{errors.number2}</Text>
              ) : null}
            <View style={styles.buttonContainer}>
              <View style={styles.buttonRow}>
                <Button title="Add" onPress={() => handleAdd(values)} />
              </View>
              <View style={styles.buttonRow}>
                <Button title="Subtract" onPress={() => handleSubtract(values)} />
              </View>
              <View style={styles.buttonRow}>
                <Button title="Multiply" onPress={() => handleMultiply(values)} />
              </View>
              <View style={styles.buttonRow}>
                <Button title="Divide" onPress={() => handleDivide(values)} />
              </View>
            </View>
            <Text style={styles.result}>
              Result: {result !== null ? result : ''}
            </Text>
            <TouchableOpacity style={styles.resetButton} onPress={handleSubmit}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

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

export default App;