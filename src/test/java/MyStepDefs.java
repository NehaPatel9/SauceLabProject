import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;

public class MyStepDefs extends Util {
    //Class to link Gherkin steps
    // A Step Definition is a Java method with an expression that links it to one or more Gherkin steps.

    HomePage homePage = new HomePage();

    @Given("^user is on homepage$")
    public void user_is_on_homepage()  {
        // Write code here that turns the phrase above into concrete actions
        homePage.verifyTextofHomePage();

    }

    @When("^User enter valid username$")
    public void user_enter_valid_username()  {
        // Write code here that turns the phrase above into concrete actions
        homePage.enterUserName();

    }

    @When("^user enter valid password$")
    public void user_enter_valid_password()  {
        // Write code here that turns the phrase above into concrete actions
        homePage.enterPassword();

    }

    @Then("^user should able to click on login button$")
    public void user_should_able_to_click_on_login_button()  {
        // Write code here that turns the phrase above into concrete actions
        homePage.clickLogInButton();

    }

    @Then("^user should able to login successfully and user should see welcome page$")
    public void user_should_able_to_login_successfully_and_user_should_see_welcome_page()  {
        // Write code here that turns the phrase above into concrete actions
        homePage.verifyTextAtWelcomePage();

    }
    @When("^User enters \"([^\"]*)\" in username inputbox$")
    public void user_enters_in_username_inputbox(String invalid_username) {
        // Write code here that turns the phrase above into concrete actions
        homePage.invalidUsername(invalid_username);

    }

    @When("^User enters \"([^\"]*)\" in password inputbox$")
    public void user_enters_in_password_inputbox(String invalid_password)  {
        // Write code here that turns the phrase above into concrete actions
        homePage.invalidPassword(invalid_password);

    }

    @Then("^user should not be able to log in successfully and user should get an error message$")
    public void user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message() {
        // Write code here that turns the phrase above into concrete actions
        homePage.getErrorMessage();


    }
}



