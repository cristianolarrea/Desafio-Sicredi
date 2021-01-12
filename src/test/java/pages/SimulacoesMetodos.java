package pages;


public class SimulacoesMetodos {
    public String configurarSimulacao(String cpf, String nome, String email, float valor, int parcela, boolean seguro) {
        String corpoPost = "{\"cpf\": \""+cpf+"\" , " +
                " \"nome\": \"" + nome + "\"," +
                " \"email\": \"" + email + "\"," +
                " \"valor\": \"" + valor + "\"," +
                " \"parcelas\": \"" + parcela + "\"," +
                " \"seguro\": \"" + seguro + "\"}";
        return corpoPost;
    }
    public String configurarSimulacaoNomeInt(String cpf, int nome, String email, float valor, int parcela, boolean seguro) {
        String corpoPost = "{\"cpf\": \""+cpf+"\" , " +
                " \"nome\": \"" + nome + "\"," +
                " \"email\": \"" + email + "\"," +
                " \"valor\": \"" + valor + "\"," +
                " \"parcelas\": \"" + parcela + "\"," +
                " \"seguro\": \"" + seguro + "\"}";
        return corpoPost;
    }
}