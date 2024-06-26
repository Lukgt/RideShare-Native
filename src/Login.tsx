
import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base';
import Logo from './assets/logo.png';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo RideShare" />

      <Titulo>
          Faça login em sua conta
      </Titulo>
      
      <Box>
        <EntradaTexto
          label="Usuário"
          placeholder="Insira seu usuário"
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry={true}
        />
      </Box>
      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


