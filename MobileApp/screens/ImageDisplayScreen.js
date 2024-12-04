import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable, Modal, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';

const ImageDisplayScreen = ({ route, navigation }) => {
  const { imageUri } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  // Setting up header options for the navigation bar
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'VertebrAI',
      headerLeft: () => (
        <Pressable style={styles.headerLeft} onPress={() => setModalVisible(true)}>
          <Ionicons name="menu" size={30} color="black" />
        </Pressable>
      ),
    });
  }, [navigation]);

  // Handling navigation based on modal option selected
  const handleNavigation = (option) => {
    setModalVisible(false);
    if (option === 'home') {
      navigation.navigate('Upload');
    } else if (option === 'logout') {
      Alert.alert('Logged Out', 'You have been logged out.');
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>VertebrAI Result</Text>
      <Image source={{ uri: imageUri }} style={styles.image} />
      
      {/* Button to go back to the Upload screen */}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Upload</Text>
      </Pressable>
      
      {/* Modal for additional navigation options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleNavigation('home')}>
              <Text style={styles.modalText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleNavigation('logout')}>
              <Text style={styles.modalText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#09A5C7',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerLeft: {
    marginLeft: 15,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  modalButton: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#09A5C7',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ImageDisplayScreen;
