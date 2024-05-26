import React, { useState } from 'react';
import { VStack, HStack, Box, Button, Input, Icon, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones desejados

export default function EntradaAssento() {
    const [quantidade, setQuantidade] = useState(1);

    const handleIncrement = () => {
        if (quantidade < 4) { // Verifica se a quantidade é menor que 4 antes de aumentar
            setQuantidade(quantidade + 1);
        }
    };

    const handleDecrement = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    return (
        <HStack space={2} alignItems="center" justifyContent="space-between" mt={5} mb={5}>
            <Text fontSize="md" >Assentos Disponiveis:</Text>
            <HStack space={2}>
                <Button borderRadius="lg" w='10' bgColor='#4F008E' onPress={handleDecrement} variant="outline">
                    <Icon as={<Ionicons name="remove-outline" />} color="white" size="lg" />
                </Button>
                <Input
                    value={quantidade.toString()}
                    size="lg"
                    w={10}
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3}
                    keyboardType="numeric"
                    onChangeText={(value) => {
                        const parsedValue = parseInt(value, 10);
                        if (!isNaN(parsedValue)) {
                            setQuantidade(parsedValue);
                        }
                    }}
                    textAlign="center"
                />
                <Button borderRadius="lg" w='10' bgColor='#4F008E' onPress={handleIncrement} variant="outline">
                    <Icon as={<Ionicons name="add-outline" />} color="white" size="lg" />
                </Button>
            </HStack>
        </HStack>
    );
}