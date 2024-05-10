import React, { useState } from 'react';

import {Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';

import {styles} from './styles'

import { Participant } from '../../components/Participant';



export function Home(){
const [participants, setParticipants] = useState<String[]>([]);   
const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd(){
    if(participants.includes(participantName)){
        return Alert.alert("Participante já existe", "Já existe um participante com esse nome na lista")
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
        
    }

    function handleParticipantRemove(name: string){

        Alert.alert("Remover", `Remover participante ${name}?`, [
            { 
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])

        console.log(`Você clicou, remover o participante ${name}`);
    }

  return(
    <View style={styles.container}>

        <Text style={styles.eventName}>
        Evento do reversinha
        </Text>

        <Text style={styles.eventDate}>
        Quarta, 8 de Maio de 2024.
        </Text>

      <View style={styles.forms}>
            <TextInput style={styles.textInput} 
                placeholder='Nome do participante'
                placeholderTextColor="#6b6b6b"
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
    </View> 
    <FlatList 
        data={participants}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({ item }) =>(
            <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
            /> 
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() =>(
            <Text style={styles.listEmptyText}>
                Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
            </Text>
        )}
    /> 
    </View>
  )
}