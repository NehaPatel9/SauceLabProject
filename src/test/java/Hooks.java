import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks extends Util{ //Class Hook to manage opening and closing browsers
    BrowserManager browserManager = new BrowserManager();
    //Object for BrowserManager class created to invoke open browser and close browser method

    @Before
    public void openBrowser(){
    browserManager.setBrowser();
    }
    @After
    public void closeBrowser(Scenario scenario) {
        if (scenario.isFailed()) {
            final byte[] screenshot = ((TakesScreenshot) driver)
                    .getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); //stick it in the report

            System.out.println("Test Case Failed");
        }
        driver.close();
    }
}