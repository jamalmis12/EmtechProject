import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('D:/JamXin/FinalProject/MobileApp/assets/verr.png')} style={styles.image} />
      <Text style={styles.vertebraiText}>VERTEBRAI</Text>
      <Text style={styles.descriptionText}>Automated Keypoint Detection for Scoliosis Assessment</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 50,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: -10,
    marginTop: 20,
  },
  vertebraiText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 45,
  },
  descriptionText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#09A5C7',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
