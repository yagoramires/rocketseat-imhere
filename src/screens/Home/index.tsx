import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Participant from '../../components/Participant';
import styles from './styles';

const Home = () => {
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [participant, setParticipant] = useState('');

  const handleParticipantAdd = () => {
    if (participants.includes(participant.toLocaleLowerCase())) {
      return Alert.alert(
        'Participante já registrado',
        'Já existe um participante na lista com esse nome.',
      );
    } else {
      setParticipants([...participants, participant.toLowerCase()]);
      setParticipant('');
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          Alert.alert('Removido!');
          setParticipants(removeParticipant(name));
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  const removeParticipant = (participant: string) => {
    const filter = participants.filter(
      (name) => name !== participant.toLowerCase(),
    );

    return filter;
  };

  const handleCleanList = () => {
    Alert.alert(
      'Remover tudo',
      'Tem certeza que deseja remover todos os participantes?',
      [
        {
          text: 'Sim',
          onPress: () => setParticipants([]),
        },
        { text: 'Não', style: 'cancel' },
      ],
    );
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
          onChangeText={setParticipant}
          // onChangeText={(textEvent) => setParticipant(textEvent)}
          value={participant}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            Ninguém chegou no evento ainda? Adicione os participantes a sua
            lista de presença.
          </Text>
        )}
      />
      {/* <ScrollView>
        {participants &&
          participants.map((participant, index) => (
            <Participant
              key={index}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))}
      </ScrollView> */}
      {participants.length > 0 && (
        <TouchableOpacity style={styles.cleanButton} onPress={handleCleanList}>
          <Text style={styles.cleanText}>Limpar lista</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;
