import { Box, Text } from 'native-base';
import { ImageBackground } from 'react-native';

export default function CardAds({ imagem, titulo, frase }) {
    return (
        <Box
            borderRadius="lg"
            height={140}
            w='50%'
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            p={4}
            borderColor="gray.300" // Adiciona a cor da borda
            borderWidth={1} // Define a largura da borda
            mr={3}
        >
            <ImageBackground
                source={{ uri: imagem }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <Text fontSize="lg" color="black" fontWeight="bold" textAlign="" mb={2}>{titulo}</Text>
                <Text fontSize="md" color="black" textAlign="center">{frase}</Text>
            </ImageBackground>
        </Box>
    );
}