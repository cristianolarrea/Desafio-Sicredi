package steps;

import base.Constants;
import cucumber.api.java.en.*;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.Matchers;
import pages.GeraCpf;
import pages.SimulacoesMetodos;
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

    @Given("^que configuro uma simulação com CPF já existente$")
    public void queConfiguroUmaSimulaçãoComCPFJáExistente() {
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao("66414919004", "Fulano", "fulano@gmail.com", 11000.00f, 3, true );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com CPF já existente$")
    public void deveRetornarStatusCodeDeSimulaçãoComCPFJáExistente() {
        response.then().log().all();
        assertEquals(409, response.statusCode());
        assertEquals("CPF duplicado", response.body().path("mensagem"));
    }

    @Given("^que configuro uma simulação com erros em todas as regras com valores mínimos$")
    public void queConfiguroUmaSimulaçãoComErrosEmTodasAsRegrasComValoresMínimos() {
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao("123.456.789-10", "Ful@no", "fulano.gmail.com", 999.00f, 1, false);
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a lista de erros de valores mínimos$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAListaDeErrosDeValoresMínimos() {
        response.then().log().all();
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.cpf"), is(notNullValue())); //Deve informar que CPF não deve ser no formatado 999.999.999-99
        assertThat(response.body().path("erros.nome"), is(notNullValue())); //Deve informar que o nome não pode conter @
        assertThat(response.body().path("erros.parcelas"), Matchers.<Object>is("Parcelas deve ser igual ou maior que 2"));
        assertThat(response.body().path("erros.email"), Matchers.<Object>is("E-mail deve ser um e-mail válido"));
        assertThat(response.body().path("erros.valor"), is(notNullValue())); //Deve informar que o valor deve ser superior igual ou maior que 1000
    }

    @Given("^que configuro uma simulação com erros em todas as regras com valores máximos$")
    public void queConfiguroUmaSimulaçãoComErrosEmTodasAsRegrasComValoresMáximos() {
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao("123.456.789-10", "Ful@no", "fulano.gmail.com", 40001f, 49, true);
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @Then("^deve retornar status code de simulação com problema e a lista de erros de valores máximos$")
    public void deveRetornarStatusCodeDeSimulaçãoComProblemaEAListaDeErrosDeValoresMáximos() {
        response.then().log().all();
        assertEquals(400, response.statusCode());
        assertThat(response.body().path("erros.cpf"), is(notNullValue())); //Deve informar que CPF não deve ser no formatado 999.999.999-99
        assertThat(response.body().path("erros.nome"), is(notNullValue())); //Deve informar que o nome não pode conter @
        assertThat(response.body().path("erros.parcelas"), Matchers.<Object>is("Parcelas deve ser igual ou menor que 48"));
        assertThat(response.body().path("erros.email"), Matchers.<Object>is("E-mail deve ser um e-mail válido"));
        assertThat(response.body().path("erros.valor"), is(notNullValue())); //Deve informar que o valor deve ser superior igual ou maior que 1000
    }
}