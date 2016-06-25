package com.paxotech.bn.framework.pages;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalToIgnoringCase;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.paxotech.bn.framework.BNAppConstant;

public class BNHomeAndSignInPage extends BNPage {

	

	@FindBy(xpath = "//a[@id='signInLink']/b")
	private WebElement loginLink;
	@FindBy(xpath = "//span[@id='authBar' and text()='Welcome, Alex']")
	private WebElement loggedInUserLink;

	// @Given("^user is able to browse to the Barnes and Noble Website$")
	// public void user_is_able_to_browse_to_the_Barnes_and_Noble_Website()
	// throws Throwable {

	// driver.manage().deleteAllCookies();
	// driver.navigate().to("http://www.barnesandnoble.com/");
	// }

	public BNHomeAndSignInPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(driver, this);

	}

	// Model Methods

	protected WebElement getLoginLink() {
		return loginLink;
	}

	protected WebElement getLoggedInUserLink() {
		return loggedInUserLink;
	}

	protected WebElement clickSignInButton() {

		loginLink.click();
		return loginLink;

	}

	// Controller Methods

	public BNHomeAndSignInPage bnhomePage() {
		driver.navigate().to(BNAppConstant.App_URL);
		return this;
	}

	public BNHomeAndSignInPage verifyTitle() {

		super.verifyTitle(BNAppConstant.HOMEPAGE_TITLE);
		return this;

	}

	public void verifyUserName(String expected) {
		String actual = getLoggedInUserLink().getText();
		assertThat(actual, equalToIgnoringCase(expected));
	}

	public BNMarvelPage goToMarvelPage() {
		driver.findElement(By.xpath("")).click();
		return new BNMarvelPage(driver);
	}
	
	public BNSearchPage searchForZombies(String zombiePage){
		
		String zombieText = driver.findElement(By.xpath("//section[@id='prodSummary']/h1")).getText();
		assertThat(zombieText, equalToIgnoringCase(zombiePage));
		return new BNSearchPage(driver);
		
	}

	public BNHomeAndSignInPage and() {
		return this;
	}

	public BNHomeAndSignInPage then(){
		return this;
	}
	
	public BNHomeAndSignInPage searchForZombies(){
		WebElement searchBar = driver.findElement(By.xpath("//input[@id='searchBarBN']"));
		searchBar.sendKeys("Zombie Survival Guide");
		searchBar.sendKeys(Keys.ENTER);
		return new BNHomeAndSignInPage(driver);
		
	}
}