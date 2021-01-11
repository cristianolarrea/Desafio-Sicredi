$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Simulacoes.feature");
formatter.feature({
  "line": 1,
  "name": "Simulacoes",
  "description": "",
  "id": "simulacoes",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \u003cCPF\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;",
  "rows": [
    {
      "cells": [
        "CPF"
      ],
      "line": 8,
      "id": "simulacoes;consultar-cpf-com-restrição;;1"
    },
    {
      "cells": [
        "\"97093236014\""
      ],
      "line": 9,
      "id": "simulacoes;consultar-cpf-com-restrição;;2"
    },
    {
      "cells": [
        "\"60094146012\""
      ],
      "line": 10,
      "id": "simulacoes;consultar-cpf-com-restrição;;3"
    },
    {
      "cells": [
        "\"84809766080\""
      ],
      "line": 11,
      "id": "simulacoes;consultar-cpf-com-restrição;;4"
    },
    {
      "cells": [
        "\"62648716050\""
      ],
      "line": 12,
      "id": "simulacoes;consultar-cpf-com-restrição;;5"
    },
    {
      "cells": [
        "\"26276298085\""
      ],
      "line": 13,
      "id": "simulacoes;consultar-cpf-com-restrição;;6"
    },
    {
      "cells": [
        "\"01317496094\""
      ],
      "line": 14,
      "id": "simulacoes;consultar-cpf-com-restrição;;7"
    },
    {
      "cells": [
        "\"55856777050\""
      ],
      "line": 15,
      "id": "simulacoes;consultar-cpf-com-restrição;;8"
    },
    {
      "cells": [
        "\"19626829001\""
      ],
      "line": 16,
      "id": "simulacoes;consultar-cpf-com-restrição;;9"
    },
    {
      "cells": [
        "\"24094592008\""
      ],
      "line": 17,
      "id": "simulacoes;consultar-cpf-com-restrição;;10"
    },
    {
      "cells": [
        "\"58063164083\""
      ],
      "line": 18,
      "id": "simulacoes;consultar-cpf-com-restrição;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"97093236014\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 1291038800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "97093236014",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 3055557700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 614126700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"60094146012\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 407000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60094146012",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 38018300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 24129800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"84809766080\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 305000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "84809766080",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 32921800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 13828300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"62648716050\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 322800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "62648716050",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 44915800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 15906300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"26276298085\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 281300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26276298085",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 32390800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 12276400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"01317496094\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 278000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01317496094",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 36292400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 40015400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"55856777050\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 271800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55856777050",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 32297800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 15163200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"19626829001\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 296500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19626829001",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 34570600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 24115500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"24094592008\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 841300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24094592008",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 31434000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 15939700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Consultar CPF com restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-com-restrição;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "que quero consultar um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "consulto um \"58063164083\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "recebo o status code de cpf com restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.que_quero_consultar_um_CPF()"
});
formatter.result({
  "duration": 308500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58063164083",
      "offset": 13
    }
  ],
  "location": "stepdefs.consulto_um(String)"
});
formatter.result({
  "duration": 30229400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 23001400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Consultar CPF sem restrição",
  "description": "",
  "id": "simulacoes;consultar-cpf-sem-restrição",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "que gero um CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "consulto o CPF gerado",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "recebo o status code de CPF sem restrição",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queGeroUmCPF()"
});
formatter.result({
  "duration": 90762900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.consultoOCPFGerado()"
});
formatter.result({
  "duration": 25799200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCPFSemRestrição()"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Consultar todas as simulações cadastradas",
  "description": "",
  "id": "simulacoes;consultar-todas-as-simulações-cadastradas",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "que excluo todas as simulações existentes caso existam",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "solicito criar uma simulação",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "solicito criar uma simulação",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "solicito consultar todas as simulaçoes cadastradas",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "deve retornar uma lista com as simulações cadastradas",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queExcluoTodasAsSimulaçõesExistentesCasoExistam()"
});
formatter.result({
  "duration": 787740900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 67100500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 83420100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 58333900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 41747500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoConsultarTodasAsSimulaçoesCadastradas()"
});
formatter.result({
  "duration": 42270500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarUmaListaComAsSimulaçõesCadastradas()"
});
formatter.result({
  "duration": 23338300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Criar simulação com sucesso com extremos mínimos",
  "description": "",
  "id": "simulacoes;criar-simulação-com-sucesso-com-extremos-mínimos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "que configuro uma simulação com sucesso com valores mínimos",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "deve retornar status code de simulação adicionada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucessoComValoresMínimos()"
});
formatter.result({
  "duration": 66889300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 34486200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAdicionada()"
});
formatter.result({
  "duration": 45500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Criar simulação com sucesso com extremos máximos",
  "description": "",
  "id": "simulacoes;criar-simulação-com-sucesso-com-extremos-máximos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "que configuro uma simulação com sucesso com valores máximos",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "deve retornar status code de simulação adicionada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucessoComValoresMáximos()"
});
formatter.result({
  "duration": 44262200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 30184200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAdicionada()"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Retornar erro quando criar simulação com CPF já existente",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-cpf-já-existente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "solicito criar uma simulação",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "configuro uma outra simulação com o mesmo CPF",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "deve retornar status code de simulação com CPF já existente",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 74427300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 41947200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.configuroUmaOutraSimulaçãoComOMesmoCPF()"
});
formatter.result({
  "duration": 632100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 83356400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente()"
});
formatter.result({
  "duration": 65869000,
  "error_message": "java.lang.AssertionError: expected:\u003c409\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente(stepdefs.java:100)\r\n\tat ✽.Then deve retornar status code de simulação com CPF já existente(src/test/java/features/Simulacoes.feature:49)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 51,
  "name": "Retornar erro quando criar simulação com erro em CPF",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-erro-em-cpf",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "que configuro uma simulação com erro no formato do CPF",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "deve retornar status code de simulação com problema e a mensagem de erro de CPF",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComErroNoFormatoDoCPF()"
});
formatter.result({
  "duration": 55621300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 39471200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeCPF()"
});
formatter.result({
  "duration": 256000,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeCPF(stepdefs.java:131)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de CPF(src/test/java/features/Simulacoes.feature:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 56,
  "name": "Retornar erro quando criar simulação com erro em nome",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-erro-em-nome",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "que configuro uma simulação com caracteres especiais no nome",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "deve retornar status code de simulação com problema e a mensagem de erro de nome",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComCaracteresEspeciaisNoNome()"
});
formatter.result({
  "duration": 74231600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 32316200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNome()"
});
formatter.result({
  "duration": 249700,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNome(stepdefs.java:146)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de nome(src/test/java/features/Simulacoes.feature:59)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 61,
  "name": "Retornar erro quando criar simulação com erro em email",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-erro-em-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "que configuro uma simulação com erro no formato do email",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "deve retornar status code de simulação com problema e a mensagem de erro de email",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComErroNoFormatoDoEmail()"
});
formatter.result({
  "duration": 59613000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 54521100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeEmail()"
});
formatter.result({
  "duration": 18814300,
  "error_message": "java.lang.AssertionError: \nExpected: is \"não é um endereço de e-mail\"\n     but: was \"E-mail deve ser um e-mail válido\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeEmail(stepdefs.java:162)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de email(src/test/java/features/Simulacoes.feature:64)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 66,
  "name": "Retornar erro quando criar simulação com erro em regra de valor mínimo",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-erro-em-regra-de-valor-mínimo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "que configuro uma simulação com valor abaixo do mínimo permitido",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "deve retornar status code de simulação com problema e a mensagem de erro de valor mínimo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComValorAbaixoDoMínimoPermitido()"
});
formatter.result({
  "duration": 57995600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 42000700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMínimo()"
});
formatter.result({
  "duration": 321100,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMínimo(stepdefs.java:176)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de valor mínimo(src/test/java/features/Simulacoes.feature:69)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 71,
  "name": "Retornar erro quando criar simulação com erro em regra de valor máximo",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-erro-em-regra-de-valor-máximo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 72,
  "name": "que configuro uma simulação com valor acima do máximo permitido",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "deve retornar status code de simulação com problema e a mensagem de erro de valor máximo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComValorAcimaDoMáximoPermitido()"
});
formatter.result({
  "duration": 75681700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 35442300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMáximo()"
});
formatter.result({
  "duration": 17138800,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Retornar erro quando criar simulação com erro em regra de parcela mínima",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-erro-em-regra-de-parcela-mínima",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "que configuro uma simulação com número de parcelas abaixo do mínimo permitido",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas mínimo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComNúmeroDeParcelasAbaixoDoMínimoPermitido()"
});
formatter.result({
  "duration": 62760400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 36329000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMínimo()"
});
formatter.result({
  "duration": 19974000,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Retornar erro quando criar simulação com erro em regra de parcela máxima",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-criar-simulação-com-erro-em-regra-de-parcela-máxima",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 82,
  "name": "que configuro uma simulação com número de parcelas acima do máximo permitido",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas máximo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComNúmeroDeParcelasAcimaDoMáximoPermitido()"
});
formatter.result({
  "duration": 79613400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 26110400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMáximo()"
});
formatter.result({
  "duration": 298800,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMáximo(stepdefs.java:221)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas máximo(src/test/java/features/Simulacoes.feature:84)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 86,
  "name": "Alterar atributo CPF da simulação com sucesso",
  "description": "",
  "id": "simulacoes;alterar-atributo-cpf-da-simulação-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 87,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "informo a alteração que desejo realizar no CPF",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "solicito alterar a simulação",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "deve retornar status code de simulação alterada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 53204300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 23619200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoCPF()"
});
formatter.result({
  "duration": 894900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 62762200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 343500,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:256)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:91)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 93,
  "name": "Alterar atributo nome da simulação com sucesso",
  "description": "",
  "id": "simulacoes;alterar-atributo-nome-da-simulação-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 94,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "informo a alteração que desejo realizar no nome",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "solicito alterar a simulação",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "deve retornar status code de simulação alterada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 89839100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 90313200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoNome()"
});
formatter.result({
  "duration": 620600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 118737500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 860900,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:256)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:98)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 100,
  "name": "Alterar atributo email da simulação com sucesso",
  "description": "",
  "id": "simulacoes;alterar-atributo-email-da-simulação-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 101,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "informo a alteração que desejo realizar no email",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "solicito alterar a simulação",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "deve retornar status code de simulação alterada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 62870100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 36307900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoEmail()"
});
formatter.result({
  "duration": 1190000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 135724100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 300600,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:256)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:105)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 107,
  "name": "Alterar atributo valor da simulação com sucesso",
  "description": "",
  "id": "simulacoes;alterar-atributo-valor-da-simulação-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "informo a alteração que desejo realizar no valor",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "solicito alterar a simulação",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "deve retornar status code de simulação alterada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 78856000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 40307400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoValor()"
});
formatter.result({
  "duration": 493400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 82746000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 255800,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:256)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:112)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 114,
  "name": "Alterar atributo parcelas da simulação com sucesso",
  "description": "",
  "id": "simulacoes;alterar-atributo-parcelas-da-simulação-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 115,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "informo a alteração que desejo realizar no número de parcelas",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "solicito alterar a simulação",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "deve retornar status code de simulação alterada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 67548700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 25423500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoNúmeroDeParcelas()"
});
formatter.result({
  "duration": 519100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 109496100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 419800,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:256)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:119)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 121,
  "name": "Alterar atributo seguro da simulação com sucesso",
  "description": "",
  "id": "simulacoes;alterar-atributo-seguro-da-simulação-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 122,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "solicito criar uma simulação",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "informo a alteração que desejo realizar no seguro",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "solicito alterar a simulação",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "deve retornar status code de simulação alterada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 65067200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 44449300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoSeguro()"
});
formatter.result({
  "duration": 428000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 88735200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 258200,
  "error_message": "java.lang.AssertionError: expected:\u003c201\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:256)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:126)\r\n",
  "status": "failed"
});
});