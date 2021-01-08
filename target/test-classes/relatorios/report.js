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
  "duration": 1275883300,
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
  "duration": 2968436600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 533334300,
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
  "duration": 367900,
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
  "duration": 29271600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 12261500,
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
  "duration": 304400,
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
  "duration": 40328600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 13332400,
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
  "duration": 368100,
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
  "duration": 39845400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 16674700,
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
  "duration": 284500,
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
  "duration": 31589800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 13314300,
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
  "duration": 329100,
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
  "duration": 31428900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 11450100,
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
  "duration": 292500,
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
  "duration": 30112100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 11373300,
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
  "duration": 289200,
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
  "duration": 34882300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 24487300,
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
  "duration": 408300,
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
  "duration": 28061400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 9416200,
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
  "duration": 327000,
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
  "duration": 30467700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCpfComRestrição()"
});
formatter.result({
  "duration": 14270300,
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
  "duration": 223387900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.consultoOCPFGerado()"
});
formatter.result({
  "duration": 22018500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.receboOStatusCodeDeCPFSemRestrição()"
});
formatter.result({
  "duration": 80800,
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
  "duration": 3030070000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 41166400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 60517000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 51147100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 26130600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoConsultarTodasAsSimulaçoesCadastradas()"
});
formatter.result({
  "duration": 33739800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarUmaListaComAsSimulaçõesCadastradas()"
});
formatter.result({
  "duration": 10871700,
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
  "duration": 65162400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 23457600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoAdicionada()"
});
formatter.result({
  "duration": 49900,
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
  "duration": 48702300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 25435500,
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
  "duration": 56822000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 23751900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.configuroUmaOutraSimulaçãoComOMesmoCPF()"
});
formatter.result({
  "duration": 510000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 42917100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente()"
});
formatter.result({
  "duration": 52317200,
  "error_message": "java.lang.AssertionError: expected:\u003c409\u003e but was:\u003c400\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente(stepdefs.java:99)\r\n\tat ✽.Then deve retornar status code de simulação com CPF já existente(src/test/java/features/Simulacoes.feature:49)\r\n",
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
  "duration": 40397600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 26626100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeCPF()"
});
formatter.result({
  "duration": 265000,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeCPF(stepdefs.java:130)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de CPF(src/test/java/features/Simulacoes.feature:54)\r\n",
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
  "duration": 54012800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 22700500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNome()"
});
formatter.result({
  "duration": 267700,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNome(stepdefs.java:145)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de nome(src/test/java/features/Simulacoes.feature:59)\r\n",
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
  "duration": 43647500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 18815700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeEmail()"
});
formatter.result({
  "duration": 16208900,
  "error_message": "java.lang.AssertionError: \nExpected: is \"não é um endereço de e-mail\"\n     but: was \"E-mail deve ser um e-mail válido\"\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeEmail(stepdefs.java:161)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de email(src/test/java/features/Simulacoes.feature:64)\r\n",
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
  "duration": 42614500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 19108300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMínimo()"
});
formatter.result({
  "duration": 185000,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMínimo(stepdefs.java:175)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de valor mínimo(src/test/java/features/Simulacoes.feature:69)\r\n",
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
  "duration": 33350300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 25027600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMáximo()"
});
formatter.result({
  "duration": 13192600,
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
  "duration": 41845000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 20406900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMínimo()"
});
formatter.result({
  "duration": 11126400,
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
  "duration": 59044900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 30153200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMáximo()"
});
formatter.result({
  "duration": 246700,
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat steps.stepdefs.deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMáximo(stepdefs.java:220)\r\n\tat ✽.Then deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas máximo(src/test/java/features/Simulacoes.feature:84)\r\n",
  "status": "failed"
});
});