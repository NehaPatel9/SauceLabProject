import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserManager extends Util {
    LoadProp loadProp = new LoadProp();

    public static final String USERNAME = "NehaPatel9";// User Name for SauceLabs Account
    public static final String ACCESS_KEY = "35f58bc1-11d1-4805-b77a-6dc9d4cbc624"; //Access key for SauceLabs Account
   // public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
    public static final String URL = "https://NehaPatel9:35f58bc1-11d1-4805-b77a-6dc9d4cbc624@ondemand.us-west-1.saucelabs.com:443/wd/hub";

    public void setBrowser() {
        String browserName = loadProp.getProperty("browserName");//User can change browser as per requirement
        boolean sauceLab = true; //if condition falls true framework will run test suit in SauceLabs

        if (sauceLab) {

            if (browserName.equalsIgnoreCase("Chrome")) { //for chrome browser selection
                MutableCapabilities sauceOptions = new MutableCapabilities();
                ChromeOptions browserOptions = new ChromeOptions();
                browserOptions.setExperimentalOption("w3c", true);
                DesiredCapabilities caps = DesiredCapabilities.chrome();
                browserOptions.setCapability("platformName", "Windows 10"); //Test to execute on windows os
                browserOptions.setCapability("browserVersion", "71.0");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try { //Exception handling for remote web driver
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }

                } else if (browserName.equalsIgnoreCase("firefox")) {
                MutableCapabilities sauceOptions = new MutableCapabilities();
                FirefoxOptions browserOptions = new FirefoxOptions();
                DesiredCapabilities caps = DesiredCapabilities.firefox();
                browserOptions.setCapability("platformName", "Windows 10");
                browserOptions.setCapability("browserVersion", "43.0");
                browserOptions.setCapability("sauce:options", sauceOptions);

                try {//Exception handling for remote web driver
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                } else if (browserName.equalsIgnoreCase("Safari")) {
                    MutableCapabilities sauceOptions = new MutableCapabilities();
                    EdgeOptions browserOptions = new EdgeOptions();
                    browserOptions.setCapability("platformName", "macOS 10.14");
                    browserOptions.setCapability("browserVersion", "84.0");
                    browserOptions.setCapability("sauce:options", sauceOptions);
                    DesiredCapabilities caps = DesiredCapabilities.safari();

                try {//Exception handling for remote web driver
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            }
        } else {
            if  (browserName.equalsIgnoreCase("chrome"))//Check if parameter passed as 'chrome'
            {
                //set path to chromedriver.exe
                System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDriver\\chromedriver.exe");
                ChromeOptions options = new ChromeOptions();
                options.setExperimentalOption("useAutomationExtension", false);
                //creating chrome driver object to open chrome browser
                driver = new ChromeDriver(options);

        } else if  (browserName.equalsIgnoreCase("firefox")) //create firefox instance
            {
                System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDriver\\geckodriver.exe");
                driver = new FirefoxDriver();//This opens the web driver
            } else { System.out.println("Browser is not correct");
            }
            //applying implicitly wait of 30 sec to driver instance
        }
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);//ImplicitlyWait  wait
        driver.get("https://opensource-demo.orangehrmlive.com/"); //open Url
        driver.manage().window().maximize(); //To Maximize screen
    }
}
