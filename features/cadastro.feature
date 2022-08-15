Feature: Cadastro no app Clima
  Eu como usuário
  Gostaria de fazer o cadastro
  Para acessar os dados no sistema de Clima local

  Scenario: Realizar o cadastro de usuário no app de Clima local
    Given entro no APP de clima e clicar no botão Cadastrar
    When preencho o campo Celular apenas com o número de telefone celular - Valor númerico
    And clico no botão > para validação do número celular
    Then preencho o campo Nome Completo
    And clico no botão > para validação do número celular
    And clico no botão Localização Automática
    And clico no botão Sim para localizar o local onde reside
    Then valido os dados climáticos acordados de acordo com a região onde reside