import {VStack, Text, ScrollView, Avatar, Divider, Box, HStack} from 'native-base';
import { Titulo } from '../components/Titulo';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="flex-start" p={5}>
                <Titulo color="black">Perfil</Titulo>
                <HStack flex={1} space={10} alignItems="flex-start">

                    <Avatar size="xl" source={{uri: "https://avatars.githubusercontent.com/u/126521288?v=4"}} mt={5} />

                    <Box>
                    <Titulo color="black" fontSize="lg" mb={1}>Lucas Teixeira</Titulo>
                    <Text>Setor: Administrativo</Text>
                    <Text>Olinda-PE</Text>
                    </Box>
                </HStack>
                <Divider mt={5}/>
                <VStack space={2} alignItems="flex-start">
                    <Titulo color="black">Interreses</Titulo>
                    <Box ml="5">
                        <HStack alignItems="center">
                            <Ionicons name="caret-forward" size={24} color="blue" />
                            <Text ml={2}>Não Fumante</Text>
                        </HStack>
                        <HStack alignItems="center">
                            <Ionicons name="caret-forward" size={24} color="blue" />
                            <Text ml={2}>Música Eletronica</Text>
                        </HStack>
                        <HStack alignItems="center">
                            <Ionicons name="caret-forward" size={24} color="blue" />
                            <Text ml={2}>Ar-condicionado</Text>
                        </HStack>
                    </Box>
                </VStack>
            </VStack>
        </ScrollView>
    )
}