import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags ="@Login_Valid_Credential", format = {"pretty","html:target/Destination"} )

public class RunTest {
}