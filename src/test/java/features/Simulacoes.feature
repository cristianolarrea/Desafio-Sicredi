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

  Scenario: Criar simulação com sucesso com extremos mínimos
    Given que configuro uma simulação com sucesso com valores mínimos
    When solicito criar uma simulação
    Then deve retornar status code de simulação adicionada

  Scenario: Criar simulação com sucesso com extremos máximos
    Given que configuro uma simulação com sucesso com valores máximos
    When solicito criar uma simulação
    Then deve retornar status code de simulação adicionada

  Scenario: Retornar erro quando criar simulação com CPF já existente
    Given que configuro uma simulação com CPF já existente
    When solicito criar uma simulação
    Then deve retornar status code de simulação com CPF já existente

  Scenario: Retornar erro quando criar simulação com erro em regra de valores mínimos
    Given que configuro uma simulação com erros em todas as regras com valores mínimos
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a lista de erros de valores mínimos

  Scenario: Retornar erro quando criar simulação com erro em regra de valores máximos
    Given que configuro uma simulação com erros em todas as regras com valores máximos
    When solicito criar uma simulação
    Then deve retornar status code de simulação com problema e a lista de erros de valores máximos