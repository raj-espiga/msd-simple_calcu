import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.operatorContainer}>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorText}>Divide</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
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
  operatorContainer: {
    width: '80%',
  },
  operatorButton: {
    backgroundColor: '#5E94E7',
    padding: 5,
    borderRadius: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  operatorText: {
    color: '#fff',
    textAlign: 'center',
  },
});
