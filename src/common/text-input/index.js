import React from 'react';
import {TextInput as Input, View} from 'react-native';

// style imports
import styles from './styles';

const TextInput = () => {
  return <Input placeholder="enter something" style={styles.input} />;
};

export default TextInput;
