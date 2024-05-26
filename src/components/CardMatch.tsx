import { Text, Avatar, VStack, HStack, Button, Spacer, Box } from 'native-base';

interface CardProps {
    nome: string;
    foto: string;
    setor: string;
    carro?: string;
    cor?: string;
    placa?: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
    compatibilidade: number;
}

export function CardMatch({
    nome,
    foto,
    data,
    setor,
    carro,
    cor,
    placa,
    foiAgendado,
    foiAtendido,
    compatibilidade
}: CardProps) {
    return (
        <VStack w="100%" bg={foiAtendido ? 'blue.100' : '#F5EEFF'} p="5" borderRadius="lg" shadow="2" mb={5}>
            <HStack w="100%" alignItems="center">

                <Avatar size="lg" source={{ uri: foto }} />
                <VStack pl="4" flex={1} >
                    <Text fontSize="md" bold>{nome}</Text>
                    <Text>{setor}</Text>
                    <Text>{carro}</Text>
                    <HStack space={4}>
                        <Text>{cor}</Text>
                        <Text>{placa}</Text>
                    </HStack>
                    <Text>{data}</Text>
                </VStack>
                <Box
                    bg="teal.500"
                    px={4}
                    py={2}
                    borderRadius="10"
                    alignItems="center"
                >
                    <Text w='10' textAlign='center' color="white" fontWeight="bold">
                        {compatibilidade}% Match
                    </Text>
                </Box>
            </HStack>
        </VStack>
    );
}