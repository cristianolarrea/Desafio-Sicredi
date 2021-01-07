package steps;

import base.Constants;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import gherkin.deps.com.google.gson.JsonObject;
import groovy.json.JsonOutput;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.Matchers;
import org.junit.Assert;
import pages.GeraCpf;
import pages.SimulacoesMetodos;

import static org.hamcrest.Matchers.*;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.containsStringIgnoringCase;
import static org.junit.Assert.*;

public class stepdefs implements Constants {

    Response response;
    RequestSpecification requestSpecification;
    String cpfConsultado;
    String cpfGerado;
    double cpfGeradoDouble;
    String[] cpfComRestricao = {"97093236014", "60094146012", "84809766080", "62648716050", "26276298085", "01317496094",
    "55856777050", "19626829001", "24094592008", "58063164083"};

    @Given("^que quero consultar um CPF$")
    public void que_quero_consultar_um_CPF() {
        RestAssured.baseURI = APP_BASE_URL;
        RestAssured.port = APP_PORT;
        RestAssured.basePath = "restricoes";
        requestSpecification = RestAssured.given();
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
        RestAssured.baseURI = APP_BASE_URL;
        RestAssured.port = APP_PORT;
        RestAssured.basePath = "restricoes";
        requestSpecification = RestAssured.given();
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
        RestAssured.baseURI = APP_BASE_URL;
        RestAssured.port = APP_PORT;
        requestSpecification = RestAssured.given().body("{\"nome\": \"Joao Silva\"," +
                "\"cpf\": 97994236514," +
                "\"email\": \"email@email.com\"," +
                "\"valor\": 1200," +
                "\"parcelas\": 3," +
                "\"seguro\": true}");
    }

    @When("^solicito criar uma simulação$")
    public void solicitoCriarUmaSimulação() {
        response = requestSpecification.post("/simulacoes");
    }

    @Then("^deve retornar status code de simulação adicionada$")
    public void deveRetornarStatusCodeDeSimulaçãoAdicionada() {
        assertEquals(201, response.statusCode());
    }
}