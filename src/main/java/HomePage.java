import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Util {

    private By _EnterUserName = By.id("FirstName");
    private By _EnterPassword = By.xpath("//input[@id=\"LastName\"]");
    private By _loginButton = By.xpath("//select[@name=\"DateOfBirthDay\"]");

    public void verifyTextofHomePage() { //Method to Assert homepage text

        String expectedTitle = "Username";
        String actualText1 = getTextfromElement(By.xpath("//span[text()='Username']"));
        Assert.assertEquals(actualText1, expectedTitle);
    }

    public void enterUserName(){
        typeText(_EnterUserName, loadProp.getProperty("Username"), 20);}

        public void enterUserName(){
        typeText(_EnterPassword, loadProp.getProperty("Password"), 20);}

            public void clickLogInButton(){
        clickElement(_loginButton, 20);}        

}

