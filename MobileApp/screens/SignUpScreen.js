import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth, createUserWithEmailAndPassword } from './firebase';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (password === confirmPassword && email && password) {
      setErrorMessage('');
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Sign Up Successful');
        navigation.navigate('Login'); // Navigate to Login screen after successful sign-up
      } catch (error) {
        setErrorMessage('Error signing up: ' + error.message);
      }
    } else {
      setErrorMessage('Please ensure passwords match and fields are filled');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person-add" size={50} color="white" style={styles.icon} />
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

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="white" style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="white"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
  loginText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});

export default SignUpScreen;
