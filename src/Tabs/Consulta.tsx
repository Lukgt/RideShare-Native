import {VStack, Text, Divider, ScrollView} from 'native-base';
import { CardMatch } from '../components/CardMatch';
import { Titulo } from '../components/Titulo';
import { Botao } from '../components/Botao';

export default function Consulta(){
    return(
        <ScrollView p="5">
            <Titulo color="blue.500" mb="5">Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardMatch
                nome='Dr. Andre'
                setor= 'Cardiologista'
                foto= 'https://avatars.githubusercontent.com/u/126521288?v=4'
                data='20/04/2024'
                foiAgendado
            />

            <Divider mt={5}/>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardMatch
                nome='Dr. Andre'
                setor= 'Cardiologista'
                foto= 'https://avatars.githubusercontent.com/u/126521288?v=4'
                data='20/04/2024'
                foiAtendido
            />

            <CardMatch
                nome='Dr. Andre'
                setor= 'Cardiologista'
                foto= 'https://avatars.githubusercontent.com/u/126521288?v=4'
                data='20/04/2024'
                foiAtendido
            />

            <CardMatch
                nome='Dr. Andre'
                setor= 'Cardiologista'
                foto= 'https://avatars.githubusercontent.com/u/126521288?v=4'
                data='20/04/2024'
                foiAtendido
            />

        </ScrollView>
    )
}