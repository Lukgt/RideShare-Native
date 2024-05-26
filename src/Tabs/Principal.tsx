import { VStack, Image, Box, ScrollView, Text, Divider, HStack } from "native-base";
import { Botao } from "../components/Botao";
import { EntradaTexto } from "../components/EntradaTexto";
import { Titulo } from "../components/Titulo";
import { EntradaData } from "../components/EntradaData";
import { EntradaHora } from "../components/EntradaHora";
import { CardMatch } from "../components/CardMatch";
import { useState } from "react";
import EntradaAssento from "../components/EntradaAssentos";
import CardAds from "../components/CardAds";

export default function Principal(){

    const [modo, setModo] = useState('Motorista');
  
    const handleModoChange = (novoModo) => {
      setModo(novoModo);
    };

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>

        {/* Botões para alternar entre Motorista e Passageiro */}
        <HStack space={4}>
        <Botao
            flex={1}
            onPress={() => handleModoChange('Passageiro')}
            variant={modo === 'Passageiro' ? 'solid' : 'outline'}
            bgColor={modo === 'Passageiro' ? '#4F008E' : 'transparent'}
            borderColor={"black"}
        >
            <Text color={modo === 'Passageiro' ? 'white' : 'black'}>Passageiro</Text>
        </Botao>

        <Botao
            flex={1}
            onPress={() => handleModoChange('Motorista')}
            variant={modo === 'Motorista' ? 'solid' : 'outline'}
            bgColor={modo === 'Motorista' ? '#4F008E' : 'transparent'}
            borderColor={"black"}
           
        >
            <Text color={modo === 'Motorista' ? 'white' : 'black'}>Motorista</Text>
        </Botao>
          
        </HStack>

        {/* Conteúdo para Passageiro */}
        {modo === 'Passageiro' && (
                    <>
                        <Box w="100%" bgColor="#F5EEFF" borderRadius="lg" p={5} mt={10} shadow="1" borderRightRadius="md">
                            <VStack space={4}>
                                <EntradaTexto placeholder="De onde" />
                                <EntradaTexto placeholder="Para Onde" />
                                <HStack space={4}>
                                    <EntradaData label="Data" />
                                    <EntradaHora label="Hora" />
                                </HStack>
                            </VStack>
                            <Botao mt={3} mb={3}>
                                Solicitar Viagem
                            </Botao>
                        </Box>

                        <Titulo color='black' mb="2">Sugestão de Viagens</Titulo>

                        <CardMatch
                            setor="Financieiro"
                            foto=""
                            nome="João Campos"
                            carro="Fiat" cor="Branco" placa="PCP-5403"
                            compatibilidade={85}
                        />

                        <CardMatch
                            setor="Recursos Humanos"
                            foto=""
                            nome="Ana Paula"
                            carro="HB20" cor="Branco" placa="PCC-7113"
                            compatibilidade={75}
                        />
                    </>
                )}

                {/* Conteúdo para Motorista */}
                {modo === 'Motorista' && (
                    <>
                        <Box w="100%" bgColor="#F5EEFF" borderRadius="lg" p={5} mt={10} shadow="1" borderRightRadius="md">
                            <VStack space={1}>
                                <EntradaTexto placeholder="Para Onde" />
                                <HStack space={4}>
                                    <EntradaData label="Data" />
                                    <EntradaHora label="Hora" />
                                </HStack>
                                <EntradaAssento/>
                            </VStack>
                            <Botao mt={3} mb={3}>
                                Oferecer viagem
                            </Botao>
                        </Box>

                        <Titulo color='black' mb="2">Solicitações</Titulo>

                        <CardMatch
                            setor="Financieiro"
                            foto=""
                            nome="João Campos"
                            carro="Fiat" cor="Branco" placa="PCP-5403"
                            compatibilidade={85}
                        />

                        <Titulo color='black' mb="2"> Conheça +</Titulo>
                        <ScrollView
                            horizontal // Isso faz com que a rolagem seja horizontal
                            showsHorizontalScrollIndicator={false} // Esconde a barra de rolagem horizontal
                            contentContainerStyle={{ paddingHorizontal: 10 }} // Adiciona algum espaço horizontal
                        >
                            <Box flexDirection="row" > {/* Adicione a propriedade space para adicionar espaçamento entre os cards */}
                                <CardAds imagem={undefined} titulo={'Card Informativo'} frase={'Grau de compatibilidade'} />
                                <CardAds imagem={undefined} titulo={'Card Informativo'} frase={'Grau de compatibilidade'} />
                                {/* Adicione mais cards conforme necessário */}
                            </Box>
                        </ScrollView>
                    </>
                )}
      </VStack>

    </ScrollView>
  );
}