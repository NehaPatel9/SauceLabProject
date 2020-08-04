import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Util {
    LoadProp loadProp = new LoadProp();

    private By _EnterUserName = By.xpath("//input[@id=\"txtUsername\"]");
    private By _EnterPassword = By.xpath("//input[@id=\"txtPassword\"]");
    private By _loginButton = By.xpath("//input[@id=\"btnLogin\"]");
    private By _ErrorMessage = By.xpath("//span[@id=\"spanMessage\"]");


    public void verifyTextofHomePage() { //Method to Assert homepage text

        String expectedTitle = "Username";
        String actualTitle = getTextfromElement(By.xpath("//span[text()='Username']"));
        Assert.assertEquals(actualTitle, expectedTitle);
    }

    public void enterUserName() {
        typeText(_EnterUserName, loadProp.getProperty("username"), 10);
    }

    public void enterPassword() {
        typeText(_EnterPassword, loadProp.getProperty("password"), 10);
    }

    public void clickLogInButton() {
        clickElement(_loginButton, 10);
    }

    public void verifyTextAtWelcomePage() { //Method to Assert homepage text

        String expectedTitle = "Welcome Admin";
        String actualTitle = getTextfromElement(By.xpath("//a[text()='Welcome Admin']"));
        Assert.assertEquals(actualTitle, expectedTitle);
    }

    public void invalidUsername(String invalid_username) {
        typeText(_EnterUserName, invalid_username , 10);
    }

    public void invalidPassword(String invalid_password) {
        typeText(_EnterPassword, invalid_password, 10);
    }

    public void getErrorMessage() { //Method to get error message
        getTextfromElement(_ErrorMessage);
        String textFromErrorMessage = getTextfromElement(_ErrorMessage);
        System.out.println(textFromErrorMessage);
    }

}








