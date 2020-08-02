import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Util {
    LoadProp loadProp = new LoadProp();

    private By _EnterUserName = By.xpath("//input[@id=\"txtUsername\"]");
    private By _EnterPassword = By.xpath("//input[@id=\"txtPassword\"]");
    private By _loginButton = By.xpath("//input[@id=\"btnLogin\"]");
    private By _ErrorMessage = By.id("spanMessage");


    public void verifyTextofHomePage() { //Method to Assert homepage text

        String expectedTitle = "Username";
        String actualText1 = getTextfromElement(By.xpath("//span[text()='Username']"));
        Assert.assertEquals(actualText1, expectedTitle);
    }

    public void enterUserName() {
        typeText(_EnterUserName, loadProp.getProperty("username"), 20);
    }

    public void enterPassword() {
        typeText(_EnterPassword, loadProp.getProperty("password"), 20);
    }

    public void clickLogInButton() {
        clickElement(_loginButton, 20);
    }

    public void verifyTextAtWelcomePage() { //Method to Assert homepage text

        String expectedTitle = "Welcome Admin";
        String actualText1 = getTextfromElement(By.xpath("//a[text()='Welcome Admin']"));
        Assert.assertEquals(actualText1, expectedTitle);
    }

    public void invalidUsername(String invalid_username) {
        typeText(_EnterUserName, invalid_username , 20);
    }

    public void invalidPassword(String invalid_password) {
        typeText(_EnterPassword, invalid_password, 20);
    }

    public void getErrorMessage() { //Method to get error message
        getTextfromElement(_ErrorMessage);
        System.out.println(_ErrorMessage);
    }
//        String expectedTitle = "Welcome Admin";
//        String actualText1 = getTextfromElement(By.xpath("//a[text()='Welcome Admin']"));
//        Assert.assertEquals(actualText1, expectedTitle);

}




