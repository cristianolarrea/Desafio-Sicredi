import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features/Simulacoes.feature",
        glue = "steps",
        plugin = { "pretty", "html:src/test/resources/relatorios",
                "json:src/test/resources/reports/cucumber.json",
                "junit:src/test/resources/reports/cucumber.xml",
                "json:target/cucumber-report/cucumber.json"}
)

public class Runner {
}
