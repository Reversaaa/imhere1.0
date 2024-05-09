import {Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';

import {styles} from './styles'

import { Participant } from '../../components/Participant';



export default function Home(){

    const participants = ['Vini', 'Gluglu', 'Strom', 'Jaum', 'felipe', 'Kelly', 'Alex', 'Leonardo', 'Ilse']      

    function handleParticipantAdd(){
        console.log("Você clicou");
    }

    function handleParticipantRemove(name: string){
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
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
    </View> 
    <ScrollView showsHorizontalScrollIndicator={false}>
    {
        participants.map(participant => (
            <Participant 
            key={participant}
            name={participant} 
            onRemove={() => handleParticipantRemove('Rodrigo')}
            />
        ))
    }
    </ScrollView>
    </View>
  )
}