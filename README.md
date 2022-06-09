# Tela de Login Material Cy.expect()

## Intuíto do projeto
- Desenvolver uma aplicação simples utilizando conceitos importantes para aplicações React.
- Testar aplicação utilizando o Cypress CT
- Arquitetura em "hooks" deixando o markdown ter acesso somente as funções que  a interessa, algo que melhora a legibilidade e manutenção do código.

## Tools

- React 18 
- Typescript
- Cypress 10
- Vite
- Material UI
- React Query
- React Hook Form


## Como rodar o projeto

### É estritamente necessário ter o Node 16 ou superior instalado.
`yarn install ou npm install`

`yarn run dev npm run dev`

## Para abrir o Cypress 

`yarn cypress open`

## Escolha o Component Testing 
abra o arquivo signin.cy.tsx

## TO Do
- [] Validações no formulario, impedindo de enviar uma senha com menos de 6 caracteres e garantindo que o email segue o padrão.
- [] Testar se enviando um valoor diferente de um email, ou uma senha com menos que 6 caracteres irá emitir uma mensagem de e impedir que a request seja enviada se os valores não forem corretos.