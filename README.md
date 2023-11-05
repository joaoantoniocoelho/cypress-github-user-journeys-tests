# GitHub User Journeys Tests

## Sobre o Projeto

Este projeto é uma suíte de testes automatizados criados com Cypress para testar jornadas de usuários no site do GitHub. O GitHub é uma plataforma de hospedagem de código para controle de versão e colaboração. Ela permite que os usuários e empresas trabalhem juntos em projetos de todos os tipos e tamanhos.

## Jornadas de Usuário Testadas

Foram testadas as seguintes jornadas de usuário:

1. **Fazer Login:**
   - O teste verifica a capacidade do usuário de fazer login no GitHub com suas credenciais.

2. **Criação de Novo Repositório:**
   - Após o login, o teste confirma se o botão "Novo repositório" leva o usuário à página de criação de um novo repositório.

3. **Editar Perfil:**
   - O teste assegura que, uma vez logado, o usuário tem a capacidade de editar seu perfil.

## Pré-requisitos
Para executar este projeto, você precisará ter o Node.js e o npm instalados em sua máquina. Isso é necessário para instalar o Cypress e suas dependências.

### Instalação
Siga os passos abaixo para configurar o ambiente de testes:
1. Clone o repositório para sua máquina local (VIA SSH)
```bash
git clone git@github.com:joaoantoniocoelho/github-cypress-test.git
```

2. Clone o repositório para sua máquina local
```bash
cd caminho-para-o-projeto
```

3. Instale as dependências do projeto
```bash
npm install
```

### Configurando Credenciais

Para que os testes de login funcionem, você precisará fornecer suas credenciais do GitHub de forma segura. Isso é feito usando o arquivo `cypress.env.json`. 

Abra o arquivo `cypress.env.json` e adicione suas credenciais da seguinte maneira:

```json
{
  "GITHUB_USERNAME": "SEU_USERNAME",
  "GITHUB_PASSWORD": "SUA_SENHA"
}
```
> **Importante: não commite este arquivo no seu repositório, pois ele conterá informações sensíveis.**.

## Executando os Testes
Para executar os testes, você só precisa rodar um comando dentro do diretório do projeto:
```bash
npm start
```

Esse comando irá iniciar o Cypress e executar todos os testes definidos para as jornadas de usuários no GitHub. Após a execução, você poderá ver os resultados no console e também através da interface do Cypress.
