const secoes = [
    {
      id: 1,
      titulo: 'Crie uma conta',
      entradaTexto: [
        {
          id:1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id:2,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
        {
            id: 3,
            label: 'Confimação de email',
            placeholder: 'Digite seu email novamente',
          },
        {
            id: 4,
            label: 'Empresa',
            placeholder: 'Digite a empresa onde trabalha',
            secureTextEntry: true,
          },
          {
            id: 5,
            label: 'Matricula',
            placeholder: 'Digite sua matricula',
          }
      ],
      checkbox: [] 
    },
    {
      id:2,
      titulo: 'Crie uma conta',
      entradaTexto: [
        {
          id:1,
          label: 'Logradouro',
          placeholder: 'Digite seu logradouro'
        },
        {
          id: 2,
          label: 'Número',
          placeholder: 'Insira seu número'
        },
        {
          id: 3,
          label: 'Bairro',
          placeholder: 'Insira seu bairro'
        },
        {
          id: 4,
          label: 'Cidade',
          placeholder: 'Insira sua cidade'
        },
        {
          id: 5,
          label: 'UF',
          placeholder: 'Insira seu UF'
        },
        {
            id: 6,
            label: 'Crie uma senha',
            placeholder: 'Insira sua senha',
            secureTextEntry: true,
          },
          {
            id: 7,
            label: 'Confirme sua senha',
            placeholder: 'Insira sua senha',
            secureTextEntry: true,
          }
      ],
      checkbox: [] 
    },
    {
      id: 3,
      titulo: 'Para finalizar, quais são seus interreses?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Ar-condicionado'
        },
        {
          id: 2,
          value: 'Fumante'
        },
        {
          id: 3,
          value: 'Não fumante'
        },
        {
          id: 4,
          value: 'Música Pop'
        },
        {
          id: 5,
          value: 'Música Funk'
        },
        {
          id: 6,
          value: 'Música Rock'
        },
        {
          id: 7,
          value: 'Outros'
        },
      ],
    }
  ]

  export {secoes}