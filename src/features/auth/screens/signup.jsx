import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// external libararies
import firestore from '@react-native-firebase/firestore';

const Signup = () => {
  useEffect(() => {
    const addUser = async () => {
      console.log('this');
      firestore()
        .collection('Users')
        .doc('ABC')
        .set({
          name: 'Ada Lovelace',
          age: 30,
        })
        .then(() => {
          console.log('User added!');
        })
        .catch(err => {
          console.log('error', err);
        });
    };

    addUser();
    console.log('this runs');
  }, []);

  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
