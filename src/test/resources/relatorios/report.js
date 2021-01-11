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
  "duration": 1227810700,
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
  "duration": 2353846600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 469416600,
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
  "duration": 343000,
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
  "duration": 32320000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 20167900,
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
  "duration": 436300,
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
  "duration": 41038100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 23334700,
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
  "duration": 314400,
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
  "duration": 48642300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 17505800,
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
  "duration": 296800,
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
  "duration": 31130500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 18341100,
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
  "duration": 315800,
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
  "duration": 42145200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 15346600,
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
  "duration": 292400,
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
  "duration": 28345700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 11943500,
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
  "duration": 1584200,
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
  "duration": 34493200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 71231800,
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
  "duration": 1146300,
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
  "duration": 74405700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 12306800,
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
  "duration": 329300,
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
  "duration": 30991100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 11399400,
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
  "duration": 143448800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.consultoOCPFGerado()"
});
formatter.result({
  "duration": 36468000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCPFSemRestrição()"
});
formatter.result({
  "duration": 351700,
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
  "duration": 896266600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 41318500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 71623800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 43717000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 31355200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoConsultarTodasAsSimulaçoesCadastradas()"
});
formatter.result({
  "duration": 37640700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarUmaListaComAsSimulaçõesCadastradas()"
});
formatter.result({
  "duration": 15214300,
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
  "duration": 46543900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 39261500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAdicionada()"
});
formatter.result({
  "duration": 46000,
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
  "duration": 35208500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 26588000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAdicionada()"
});
formatter.result({
  "duration": 39400,
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
  "duration": 58576100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 18789200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.configuroUmaOutraSimulaçãoComOMesmoCPF()"
});
formatter.result({
  "duration": 422900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 21010600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente()"
});
formatter.result({
  "duration": 47988100,
  "error_message": "java.lang.AssertionError: expected:\u003c409\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente(stepdefs.java:101)\r\n\tat ✽.Then deve retornar status code de simulação com CPF já existente(src/test/java/features/Simulacoes.feature:49)\r\n",
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
  "duration": 44566200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 23630700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeCPF()"
});
formatter.result({
  "duration": 239600,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeCPF(stepdefs.java:132)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de CPF(src/test/java/features/Simulacoes.feature:54)\r\n",
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
  "duration": 38254100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 25678500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNome()"
});
formatter.result({
  "duration": 244000,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNome(stepdefs.java:147)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de nome(src/test/java/features/Simulacoes.feature:59)\r\n",
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
  "duration": 31681800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 28552600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeEmail()"
});
formatter.result({
  "duration": 11943500,
  "status": "passed"
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
  "duration": 33188600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 24856600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMínimo()"
});
formatter.result({
  "duration": 172500,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMínimo(stepdefs.java:177)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de valor mínimo(src/test/java/features/Simulacoes.feature:69)\r\n",
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
  "duration": 34721500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 15819000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMáximo()"
});
formatter.result({
  "duration": 10405800,
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
  "duration": 45134400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 18553000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMínimo()"
});
formatter.result({
  "duration": 20267000,
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
  "duration": 36749600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 24760600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMáximo()"
});
formatter.result({
  "duration": 228500,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMáximo(stepdefs.java:222)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas máximo(src/test/java/features/Simulacoes.feature:84)\r\n",
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
  "duration": 32997800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 21227800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoCPF()"
});
formatter.result({
  "duration": 708400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 40717800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 1577000,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:258)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:91)\r\n",
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
  "duration": 40446400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 22109800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoNome()"
});
formatter.result({
  "duration": 867000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 62344400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 2983300,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:258)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:98)\r\n",
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
  "duration": 105990600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 25198400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoEmail()"
});
formatter.result({
  "duration": 453300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 54469500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 2486900,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:258)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:105)\r\n",
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
  "duration": 55035500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 19196600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoValor()"
});
formatter.result({
  "duration": 502600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 49497400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 897600,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:258)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:112)\r\n",
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
  "duration": 53628400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 30002400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoNúmeroDeParcelas()"
});
formatter.result({
  "duration": 469100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 61120200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 7153000,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada(stepdefs.java:258)\r\n\tat ✽.Then deve retornar status code de simulação alterada(src/test/java/features/Simulacoes.feature:119)\r\n",
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
  "duration": 55212700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 21812400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.informoAAlteraçãoQueDesejoRealizarNoSeguro()"
});
formatter.result({
  "duration": 740900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 39076600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAlterada()"
});
formatter.result({
  "duration": 645400,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "Retornar erro quando solicitar alteração em CPF não existente",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-solicitar-alteração-em-cpf-não-existente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 129,
  "name": "que tenho um CPF não cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "solicito alterar a simulação",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "deve retornar status code de CPF não encontrado",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queTenhoUmCPFNãoCadastrado()"
});
formatter.result({
  "duration": 36724300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoAlterarASimulação()"
});
formatter.result({
  "duration": 271600,
  "error_message": "java.lang.NullPointerException\r\n\tat steps.stepdefs.solicitoAlterarASimulação(stepdefs.java:252)\r\n\tat ✽.When solicito alterar a simulação(src/test/java/features/Simulacoes.feature:130)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeCPFNãoEncontrado()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 133,
  "name": "Remover simulação com sucesso",
  "description": "",
  "id": "simulacoes;remover-simulação-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 134,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "solicito criar uma simulação",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "extraio o id da simulação",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "solicito deletar a simulação",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "deve retornar status code de deletada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 34767500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 21934200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.extraioOIdDaSimulação()"
});
formatter.result({
  "duration": 14365300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoDeletarASimulação()"
});
formatter.result({
  "duration": 32677200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeDeletadaComSucesso()"
});
formatter.result({
  "duration": 219000,
  "error_message": "java.lang.AssertionError: expected:\u003c204\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeDeletadaComSucesso(stepdefs.java:316)\r\n\tat ✽.Then deve retornar status code de deletada com sucesso(src/test/java/features/Simulacoes.feature:138)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 140,
  "name": "Retornar erro quando remover simulação inexistente",
  "description": "",
  "id": "simulacoes;retornar-erro-quando-remover-simulação-inexistente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 141,
  "name": "que possuo um Id inexistente",
  "keyword": "Given "
});
formatter.step({
  "line": 142,
  "name": "solicito deletar a simulação",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "deve retornar status code de simulação não encontrada",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.quePossuoUmIdInexistente()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoDeletarASimulação()"
});
formatter.result({
  "duration": 417700,
  "error_message": "java.lang.NullPointerException\r\n\tat steps.stepdefs.solicitoDeletarASimulação(stepdefs.java:311)\r\n\tat ✽.When solicito deletar a simulação(src/test/java/features/Simulacoes.feature:142)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoNãoEncontrada()"
});
formatter.result({
  "status": "skipped"
});
});