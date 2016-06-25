package com.paxotech.bn.step_definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.htmlunit.HtmlUnitDriver;
//import org.openqa.selenium.ie.InternetExplorerDriver;

import com.paxotech.bn.framework.BNAppConstant;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	protected WebDriver driver;

	
	/*public void beforeMethod(String browser) {
		
		if(browser.contentEquals("HtmlUnit")){
			driver = new HtmlUnitDriver();
		}
		else if (browser.contentEquals("phantomjs")){
			System.setProperty("phantomjs.binary.path", System.getProperty("user.dir") + "/src/main/resources/driver/32/phantomjs.exe" );
			driver = new PhantomJSDriver();	
		}
		else if(browser.contentEquals("ie")){
			System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "/src/main/resources/driver/32/IEDriverServer.exe" );
			driver = new InternetExplorerDriver();
		}
		else if(browser.contentEquals("ff")){
			driver = new FirefoxDriver();
		}
		else if(browser.contentEquals("ch")){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/src/main/resources/driver/32/chromedriver.exe" );
			driver = new ChromeDriver();
			
		}
		else{
			driver = new FirefoxDriver();
		}
	}
	*/	
	@Before	
	public void setUp() {
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		driver.manage().deleteAllCookies();
		//driver.navigate().to(BNAppConstant.App_URL);

	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
		

	}

}
