import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class BrowserManager extends Util {
    LoadProp loadProp = new LoadProp();

    public void setBrowser() {
        String browserName = loadProp.getProperty("browserName");//User can change browser as per requirement
        //Check if parameter passed from TestNG is 'firefox'
        if (browserName.equalsIgnoreCase("firefox")) {
          //create firefox instance
            System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDriver\\geckodriver.exe");
            driver = new FirefoxDriver(); }//This opens the web driver

       //Check if parameter passed as 'chrome'

       else if (browserName.equalsIgnoreCase("chrome")) {
           //set path to chromedriver.exe
           System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDriver\\chromedriver.exe");
           ChromeOptions options = new ChromeOptions();
           options.setExperimentalOption("useAutomationExtension", false);
           options.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
           //creating chrome driver object to open chrome browser
           driver = new ChromeDriver(options);

        } else { System.out.println("Browser is not correct"); }
        //applying implicitly wait of 30 sec to driver instance


        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);//ImplicitlyWait  wait
        driver.get("https://opensource-demo.orangehrmlive.com"); //open Url


        //maximise screen
        driver.manage().window().maximize(); //To Maximize screen
    }
}