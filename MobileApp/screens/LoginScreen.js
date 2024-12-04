import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth, signInWithEmailAndPassword } from './firebase'; // Import firebase functions
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (email && password) {
      setErrorMessage('');
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login Successful');
        navigation.navigate('Upload'); // Navigate to UploadScreen after successful login
      } catch (error) {
        setErrorMessage('Invalid email or password');
      }
    } else {
      setErrorMessage('Please enter both email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="log-in" size={50} color="white" style={styles.icon} />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="white" style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="white" style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="white"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  icon: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    marginBottom: 15,
    width: '80%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  iconInput: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
    color: 'white',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  signupText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});

export default LoginScreen;
