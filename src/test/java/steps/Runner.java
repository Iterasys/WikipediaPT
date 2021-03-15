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
                "json:target/cucumberReports/mobile/json",
                "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/ExtentReport4.html"

        })
public class Runner {
}
