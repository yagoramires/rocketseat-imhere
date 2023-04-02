import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

const Home = () => {
  const handleParticipantAdd = () => {
    console.log('Clicou em add');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento:</Text>
      <Text style={styles.eventDate}>Sexta, 7 de Abril de 2023.</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
