Feature: Simulacoes

  Scenario Outline: Consultar CPF com restrição
    Given que quero consultar um CPF
    When consulto um <CPF>
    Then recebo o status code de cpf com restrição
    Examples:
      |      CPF      |
      | "97093236014" |
      | "60094146012" |
      | "84809766080" |
      | "62648716050" |
      | "26276298085" |
      | "01317496094" |
      | "55856777050" |
      | "19626829001" |
      | "24094592008" |
      | "58063164083" |

  Scenario: Consultar CPF sem restrição
    Given que gero um CPF
    When consulto o CPF gerado
    Then recebo o status code de CPF sem restrição

  Scenario: Consultar todas as simulações cadastradas
    Given que excluo todas as simulações existentes caso existam
    And que configuro uma simulação com sucesso
    And solicito criar uma simulação
    And que configuro uma simulação com sucesso
    And solicito criar uma simulação
    And solicito consultar todas as simulaçoes cadastradas
    Then deve retornar uma lista com as simulações cadastradas

  Scenario: Criar simulação com sucesso com extremos mínimos
    Given que configuro uma simulação com sucesso com valores mínimos
    When solicito criar uma simulação
    Then deve retornar status code de simulação adicionada

  Scenario: Criar simulação com sucesso com extremos máximos
    Given que configuro uma simulação com sucesso com valores máximos
    When solicito criar uma simulação
    Then deve retornar status code de simulação adicionada

  Scenario: Retornar erro quando criar simulação com CPF já existente
    Given que configuro uma simulação com sucesso
    And solicito criar uma simulação
    And configuro uma outra simulação com o mesmo CPF
    When solicito criar uma simulação
    Then deve retornar status code de simulação com CPF já existente

  Scenario: Retornar erro quando criar simulação com erro em CPF
    Given que configuro uma simulação com erro no formato do CPF
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a mensagem de erro de CPF

  Scenario: Retornar erro quando criar simulação com erro em nome
    Given que configuro uma simulação com caracteres especiais no nome
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a mensagem de erro de nome

  Scenario: Retornar erro quando criar simulação com erro em email
    Given que configuro uma simulação com erro no formato do email
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a mensagem de erro de email

  Scenario: Retornar erro quando criar simulação com erro em regra de valor mínimo
    Given que configuro uma simulação com valor abaixo do mínimo permitido
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a mensagem de erro de valor mínimo

  Scenario: Retornar erro quando criar simulação com erro em regra de valor máximo
    Given que configuro uma simulação com valor acima do máximo permitido
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a mensagem de erro de valor máximo

  Scenario: Retornar erro quando criar simulação com erro em regra de parcela mínima
    Given que configuro uma simulação com número de parcelas abaixo do mínimo permitido
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas mínimo

  Scenario: Retornar erro quando criar simulação com erro em regra de parcela máxima
    Given que configuro uma simulação com número de parcelas acima do máximo permitido
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas máximo

  Scenario: Alterar atributo CPF da simulação com sucesso
    Given que configuro uma simulação com sucesso
    When solicito criar uma simulação
    And informo a alteração que desejo realizar no CPF
    And solicito alterar a simulação
    Then deve retornar status code de simulação alterada

  Scenario: Alterar atributo nome da simulação com sucesso
    Given que configuro uma simulação com sucesso
    When solicito criar uma simulação
    And informo a alteração que desejo realizar no nome
    And solicito alterar a simulação
    Then deve retornar status code de simulação alterada

  Scenario: Alterar atributo email da simulação com sucesso
    Given que configuro uma simulação com sucesso
    When solicito criar uma simulação
    And informo a alteração que desejo realizar no email
    And solicito alterar a simulação
    Then deve retornar status code de simulação alterada

  Scenario: Alterar atributo valor da simulação com sucesso
    Given que configuro uma simulação com sucesso
    When solicito criar uma simulação
    And informo a alteração que desejo realizar no valor
    And solicito alterar a simulação
    Then deve retornar status code de simulação alterada

  Scenario: Alterar atributo parcelas da simulação com sucesso
    Given que configuro uma simulação com sucesso
    When solicito criar uma simulação
    And informo a alteração que desejo realizar no número de parcelas
    And solicito alterar a simulação
    Then deve retornar status code de simulação alterada

  Scenario: Alterar atributo seguro da simulação com sucesso
    Given que configuro uma simulação com sucesso
    When solicito criar uma simulação
    And informo a alteração que desejo realizar no seguro
    And solicito alterar a simulação
    Then deve retornar status code de simulação alterada