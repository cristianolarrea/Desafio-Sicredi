package pages;

import gherkin.deps.com.google.gson.JsonArray;
import gherkin.deps.com.google.gson.JsonObject;
import gherkin.deps.com.google.gson.JsonParser;
import io.restassured.path.json.JsonPath;
import steps.stepdefs;

public class SimulacoesMetodos {
    String nome, email;
    float valor;
    double cpf;
    int parcela;
    boolean seguro;

    public double getCpf() {
        return cpf;
    }

    public void setCpf(double cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public int getParcela() {
        return parcela;
    }

    public void setParcela(int parcela) {
        this.parcela = parcela;
    }

    public boolean isSeguro() {
        return seguro;
    }

    public void setSeguro(boolean seguro) {
        this.seguro = seguro;
    }

    public String configurarSimulacao(String cpf, String nome, String email, float valor, int parcela, boolean seguro) {
        String corpoPost = "{\"cpf\": \"" + cpf + "\"," +
                " \"nome\": \"" + nome + "\"," +
                " \"email\": \"" + email + "\"," +
                " \"valor\": \"" + valor + "\"," +
                " \"parcela\": \"" + parcela + "\"," +
                " \"seguro\": \"" + seguro + "\"}";
        return corpoPost;
    }
}
