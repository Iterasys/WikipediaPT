package steps;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = "steps",
        strict = true,
        plugin = {"pretty",
                "html:target/cucumberReports/mobile/html",
                "json:target/cucumberReports/mobile/json"
        })
public class Runner {
}
