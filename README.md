# Api REST - Node.JS 

Esse aqui é uma pequena API feita em JS para o cadastro de pessoas numa agenda. A ideia não é nova, mas é ótima para testar um monte de conceitos, incluindo conceitos do próprio Javascript, modelagem de objetos, padrão REST etc. Sinta-se a vontade para clonar esse projeto e fazer o que bem entender com ele, obviamente creditando a fonte de inspiração original (eu).

## Configurações

O projeto é definido no seguinte modelo:
- **Model**: Define os objetos do sistema, de maneira que o banco de dados saiba quais entidades estão trabalhando;
- **Services**: Define os serviços do sistema, ou seja, a parte lógica do sistema e das suas funcionalidades, tais como verificações, critérios das regras de negócio etc;
- **Controller**: Define a "porta de entrada" do sistema, a parte da qual o *index.js* chama para realizar as funcionalidades. De maneira geral, é uma maneira de que eu possa mudar as regras de negócio sem, necessariamente, mudar a chamada nas outras partes do sistema.

A arquitetura utilizada aqui nesse projeto é a MVC, com algumas leves modificações. 

### Rotas utilizadas no projeto

* GET:
   - **/user/recuperar**: Recupera todos os usuários do sistema;
   - **/user/recuperar/{id}**: Recupera um usuário mediante passagem do id
* POST:
  - **/user/criar**: Cria um usuário mediante payload
  ``{ "nome": "Nome", "sobrenome": "Sobrenome", "email": "teste@teste.com", "senha": "senha!123", "idade": 21 }``
  - **/user/atualizar**: Atualiza o usuário mediante payload 
  ``{ "_id": "uyaiuas7d68d76d87adiadu", "nome": "OutroNome" }``
 * DELETE:
    - **/user/remover/**: Remove todos os usuários na base de dados. Alerta: **CUIDADO, TODOS OS USUÁRIOS SERÃO EXCLUÍDOS**
    - **/user/remover/{id}**: Remove um usuário mediante passagem do id 


### Tecnologias utilizadas

* **Javascript**: Linguagem padrão do projeto, sendo utilizada de ponta a ponta e esse será o padrão. A ideia, no final, é fazer um sisteminha básico de agenda, com uma interface feita em React.
* **MongoDB**: BD padrão do sistema. Escolhido principalmente pela facilidade de manipulação e pela facilidade de implementação junto com o JS. E também foi a mais fácil que eu achei em todos os tutoriais.

## Contato
Qualquer coisa, se alguém tiver alguma dúvida, me chama pelo e-mail ou manda DM lá no Twitter...
* E-mail: eduardoribeiro.6899@yahoo.com
* Twitter: @EduSe7en42

