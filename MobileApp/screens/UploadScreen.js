import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';

export default function UploadScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'VertebrAI',
      headerLeft: () => (
        <TouchableOpacity style={styles.headerLeft} onPress={() => setModalVisible(true)}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Sorry, we need permission to access your photo library!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      navigation.navigate('ImageDisplay', { imageUri: result.assets[0].uri });
    }
  };

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
    <View style={styles.container}>
      <Text style={styles.title}>Upload X-ray Image</Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Ionicons name="cloud-upload-outline" size={40} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Choose Image</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleNavigation('home')}>
              <Ionicons name="home" size={30} color="white" style={styles.modalIcon} />
              <Text style={styles.modalText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => handleNavigation('logout')}>
              <Ionicons name="log-out" size={30} color="white" style={styles.modalIcon} />
              <Text style={styles.modalText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={30} color="white" style={styles.modalIcon} />
              <Text style={styles.modalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#09A5C7',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
  },
  icon: {
    marginRight: 15,
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
    alignItems: 'flex-start', // Align buttons to the left
  },
  modalButton: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#09A5C7',
    borderRadius: 10,
    width: '100%',
    alignItems: 'flex-start', // Align text and icon to the left
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align icons and text to the left
  },
  modalIcon: {
    marginRight: 15,
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
