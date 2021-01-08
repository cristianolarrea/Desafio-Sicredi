package steps;

import base.Constants;
import cucumber.api.java.en.*;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
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

    @Given("^que configuro uma simulação com sucesso$")
    public void queConfiguroUmaSimulaçãoComSucesso() {
        GeraCpf geraCpf = new GeraCpf();
        cpfGerado = geraCpf.cpf(false);
        SimulacoesMetodos simulacoesMetodos = new SimulacoesMetodos();
        String body = simulacoesMetodos.configurarSimulacao(cpfGerado, "Joao Silva", "testes@teste.com", 20000f, 35, true );
        requestSpecification = given().body(body).contentType(APP_CONTENT_TYPE);
    }

    @When("^solicito criar uma simulação$")
    public void solicitoCriarUmaSimulação() {
        response = requestSpecification.post("http://localhost:8080/api/v1/simulacoes");
    }

    @Then("^deve retornar status code de simulação adicionada$")
    public void deveRetornarStatusCodeDeSimulaçãoAdicionada() {
        response.then().log().all();
        assertEquals(201, response.statusCode());
    }
}