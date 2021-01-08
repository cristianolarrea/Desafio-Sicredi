$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Simulacoes.feature");
formatter.feature({
  "line": 1,
  "name": "Simulacoes",
  "description": "",
  "id": "simulacoes",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 26,
  "name": "Consultar todas as simulações cadastradas",
  "description": "",
  "id": "simulacoes;consultar-todas-as-simulações-cadastradas",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@apenas"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "que excluo todas as simulações existentes caso existam",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "solicito criar uma simulação",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "que configuro uma simulação com sucesso",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "solicito criar uma simulação",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "solicito consultar todas as simulaçoes cadastradas",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "deve retornar uma lista com as simulações cadastradas",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.queExcluoTodasAsSimulaçõesExistentesCasoExistam()"
});
formatter.result({
  "duration": 4838119300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 49078700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 94311900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.queConfiguroUmaSimulaçãoComSucesso()"
});
formatter.result({
  "duration": 54422200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoCriarUmaSimulação()"
});
formatter.result({
  "duration": 36881900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.solicitoConsultarTodasAsSimulaçoesCadastradas()"
});
formatter.result({
  "duration": 46207700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.deveRetornarUmaListaComAsSimulaçõesCadastradas()"
});
formatter.result({
  "duration": 24267600,
  "status": "passed"
});
});