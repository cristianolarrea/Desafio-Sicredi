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

  Scenario: Criar simulação com sucesso
    Given que configuro uma simulação com sucesso
    When solicito criar uma simulação
    Then deve retornar status code de simulação adicionada