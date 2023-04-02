import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento:</Text>
      <Text style={styles.eventDate}>Sexta, 7 de Abril de 2023.</Text>
    </View>
  );
};

export default index;
