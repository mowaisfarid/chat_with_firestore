import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ToastAndroid} from 'react-native';

// Import Firestore correctly
import firestore from '@react-native-firebase/firestore';

const Signup = () => {
  const addUser = async () => {
    try {
      // Add a user to the Firestore collection
      await firestore().collection('Users').doc('ABC').set({
        name: 'Ada Lovelace',
        age: 30,
      });
      console.log('User added successfully!');
      ToastAndroid.showWithGravity(
        'User added successfully!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  useEffect(() => {
    addUser();
  }, []);

  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
