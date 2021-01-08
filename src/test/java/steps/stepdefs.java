package steps;

import base.Constants;
import cucumber.api.java.en.*;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.Matchers;
import org.junit.Assert;
import pages.GeraCpf;
import pages.SimulacoesMetodos;

import java.util.ArrayList;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;

public class stepdefs implements Constants {

    Response response;
    RequestSpecification requestSpecification;
    String cpfConsultado;
    String cpfGerado;
    String[] cpfComRestricao = {"97093236014", "60094146012", "84809766080", "62648716050", "26276298085", "01317496094",
    "55856777050", "19626829001", "24094592008", "58063164083"};

    @Given("^que quero consultar um CPF$")
    public void que_quero_consultar_um_CPF() {
        baseURI = APP_BASE_URL;
        port = APP_PORT;
        basePath = "restricoes";
        requestSpecification = given();
    }

    @When("^consulto um \"([^\"]*)\"$")
    public void consulto_um(String arg1) {
        cpfConsultado = arg1;
        response = requestSpecification.get("/" + cpfConsultado);
    }

    @Then("^recebo o status code de cpf com restrição$")
    public void receboOStatusCodeDeCpfComRestrição() {
        assertThat(cpfComRestricao, hasItemInArray(cpfConsultado));
        assertEquals(200, response.statusCode());
        assertEquals("O CPF " + cpfConsultado + " tem problema", response.body().path("mensagem"));
    }

    @Given("^que gero um CPF$")
    public void queGeroUmCPF() {
        baseURI = APP_BASE_URL;
        port = APP_PORT;
        basePath = "restricoes";
        requestSpecification = given();
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
    }

    @When("^consulto o CPF gerado$")
    public void consultoOCPFGerado() {
        response = requestSpecification.get("/" + cpfGerado);
    }

    @Then("^recebo o status code de CPF sem restrição$")
    public void receboOStatusCodeDeCPFSemRestrição() {
        assertEquals(204, response.statusCode());
    }

    @Given("^que configuro uma simulação com sucesso com valores mínimos$")
    public void queConfiguroUmaSimulaçãoComSucessoComValoresMínimos() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 1000f, 2, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Given("^que configuro uma simulação com sucesso com valores máximos$")
    public void queConfiguroUmaSimulaçãoComSucessoComValoresMáximos() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 40000f, 48, true );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @When("^solicito criar uma simulação$")
    public void solicitoCriarUmaSimulação() {
        response = requestSpecification.post("http://localhost:8080/api/v1/simulacoes");
    }

    @Then("^deve retornar status code de simulação adicionada$")
    public void deveRetornarStatusCodeDeSimulaçãoAdicionada() {
        assertEquals(201, response.statusCode());
    }

    @Then("^deve retornar status code de simulação com CPF já existente$")
    public void deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente() {
        response.then().log().all();
        assertEquals(409, response.statusCode());
        assertEquals("CPF duplicado", response.body().path("mensagem"));
    }

    @Given("^que configuro uma simulação com sucesso$")
    public void queConfiguroUmaSimulaçãoComSucesso() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 20000f, 35, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @And("^configuro uma outra simulação com o mesmo CPF$")
    public void configuroUmaOutraSimulaçãoComOMesmoCPF() {
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Fulano", "fulano@gmail.com", 11000.00f, 3, true );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Given("^que configuro uma simulação com erro no formato do CPF$")
    public void queConfiguroUmaSimulaçãoComErroNoFormatoDoCPF() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(true);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 20000f, 35, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a mensagem de erro de CPF$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeCPF() {
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.cpf"), is(notNullValue())); //Deve informar que CPF não deve ser no formatado 999.999.999-99
    }

    @Given("^que configuro uma simulação com caracteres especiais no nome$")
    public void queConfiguroUmaSimulaçãoComCaracteresEspeciaisNoNome() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Jo@o $ilva", "testes@teste.com", 20000f, 35, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a mensagem de erro de nome$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNome() {
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.nome"), is(notNullValue())); //Deve informar que o nome não pode conter caracteres especiais
    }

    @Given("^que configuro uma simulação com erro no formato do email$")
    public void queConfiguroUmaSimulaçãoComErroNoFormatoDoEmail() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes.teste.com", 20000f, 35, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a mensagem de erro de email$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeEmail() {
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.email"), Matchers.<Object>is("não é um endereço de e-mail"));
    }

    @Given("^que configuro uma simulação com valor abaixo do mínimo permitido$")
    public void queConfiguroUmaSimulaçãoComValorAbaixoDoMínimoPermitido() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 999.99f, 35, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a mensagem de erro de valor mínimo$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMínimo() {
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.valor"), is(notNullValue())); //Deve informar que o valor deve ser superior igual ou maior que 1000
    }

    @Given("^que configuro uma simulação com valor acima do máximo permitido$")
    public void queConfiguroUmaSimulaçãoComValorAcimaDoMáximoPermitido() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 40000.01f, 35, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a mensagem de erro de valor máximo$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeValorMáximo() {
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.valor"), is(notNullValue())); //Deve informar que o valor deve ser inferior ou igual a 40000,00
    }

    @Given("^que configuro uma simulação com número de parcelas abaixo do mínimo permitido$")
    public void queConfiguroUmaSimulaçãoComNúmeroDeParcelasAbaixoDoMínimoPermitido() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 20000.01f, 1, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas mínimo$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMínimo() {
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.parcelas"), Matchers.<Object>is("Parcelas deve ser igual ou maior que 2"));
    }

    @Given("^que configuro uma simulação com número de parcelas acima do máximo permitido$")
    public void queConfiguroUmaSimulaçãoComNúmeroDeParcelasAcimaDoMáximoPermitido() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 20000.01f, 49, false );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a mensagem de erro de número de parcelas máximo$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAMensagemDeErroDeNúmeroDeParcelasMáximo() {
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.parcelas"), Matchers.<Object>is("Parcelas deve ser igual ou menor que 48"));
    }

    @Given("^que excluo todas as simulações existentes caso existam$")
    public void queExcluoTodasAsSimulaçõesExistentesCasoExistam() {
        requestSpecification = given();
        ArrayList idsArray = requestSpecification
            .when().get("http://localhost:8080/api/v1/simulacoes")
            .then().extract().path("id");
        if (idsArray.size()>0) {
            requestSpecification = given();
            for (int i = 0; i < idsArray.size(); i++) {
            requestSpecification.delete("http://localhost:8080/api/v1/simulacoes/" + idsArray.get(i)); }
        }
    }

    @And("^solicito consultar todas as simulaçoes cadastradas$")
    public void solicitoConsultarTodasAsSimulaçoesCadastradas() {
        response = requestSpecification.get("http://localhost:8080/api/v1/simulacoes");
    }

    @Then("^deve retornar uma lista com as simulações cadastradas$")
    public void deveRetornarUmaListaComAsSimulaçõesCadastradas() {
        ArrayList idsArray = response.then().extract().path("id");
        Assert.assertEquals(idsArray.size(), 2);
    }
}


