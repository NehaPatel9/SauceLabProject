import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;


import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

public class BrowserManager extends Util {

        public static final String USERNAME = "NehaPatel9";
       // public static final String ACCESS_KEY = "YOUR_ACCESS_KEY";
        //public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:80/wd/hub";
        public static final String URL = "https://NehaPatel9:35f58bc1-11d1-4805-b77a-6dc9d4cbc624@ondemand.us-west-1.saucelabs.com:443/wd/hub" + USERNAME + ":" + "35f58bc1-11d1-4805-b77a-6dc9d4cbc624" + "@ondemand.saucelabs.com:80/wd/hub";


        public static String browsername = "Chrome";

        public void setBrowser() {

        boolean sauceLab = false;

        if (sauceLab) {
            if (browsername.equalsIgnoreCase("Chrome")) {
                DesiredCapabilities caps = DesiredCapabilities.chrome();
                caps.setCapability("platform", "Windows XP");
                caps.setCapability("version", "43.0");

//                try {
//                    driver = new RemoteWebDriver(new URL(URL), caps);
//                } catch (MalformedURLException e) {
//                    e.printStackTrace();
//                }


            } else if (browsername.equalsIgnoreCase("firefox")) {
                DesiredCapabilities caps = DesiredCapabilities.firefox();
                caps.setCapability("platform", "Windows XP");
                caps.setCapability("version", "43.0");

//                try {
//                    driver = new RemoteWebDriver(new URL(URL), caps);
//                } catch (MalformedURLException e) {
//                    e.printStackTrace();
//                }

            }
        } else if (browsername.equalsIgnoreCase("firefox")) {
            //create firefox instance
            System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDriver\\geckodriver.exe");
            driver = new FirefoxDriver();//This opens the web driver
            //Check if parameter passed as 'chrome'

        } else if (browsername.equalsIgnoreCase("chrome")) {
            //set path to chromedriver.exe
            System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDriver\\chromedriver.exe");
            ChromeOptions options = new ChromeOptions();
            options.setExperimentalOption("useAutomationExtension", false);
            options.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});
            //creating chrome driver object to open chrome browser
            driver = new ChromeDriver(options);

        } else {
            System.out.println("Browser name is not correct");
        }
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);//applying implicitly wait of 30 sec to driver instance
        driver.get("https://opensource-demo.orangehrmlive.com/"); //open Url
        driver.manage().window().maximize(); //To Maximize screen
    }

}
