import {VStack, Text, ScrollView, Avatar, Divider} from 'native-base';
import { Titulo } from '../components/Titulo';

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar size="xl" source={{uri: "https://avatars.githubusercontent.com/u/126521288?v=4"}} mt={5} />

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Lucas Teixeira</Titulo>
                <Text>Setor: Administrativo</Text>
                <Text>Olinda-PE</Text>

                <Divider mt={5}/>

                <Titulo color="blue.500" mb={1}>Interresses</Titulo>
                <Text>Ar-condicionado</Text>
                <Text>Pop</Text>
                
            </VStack>
        </ScrollView>
    )
}