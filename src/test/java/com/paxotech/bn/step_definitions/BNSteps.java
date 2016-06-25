package com.paxotech.bn.step_definitions;

import org.junit.Test;
import org.openqa.selenium.WebDriver;

import com.paxotech.bn.framework.BNScriptBase;
import com.paxotech.bn.framework.controller.BNApplicationController;
import com.paxotech.bn.framework.pages.BNHomeAndSignInPage;
import com.paxotech.bn.framework.BNAppConstant;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;


//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.When;

public class BNSteps extends BNScriptBase{
	
	protected WebDriver driver;

	//@scenario1
	@Test
	@Given("^user is able to browse to the Barnes and Noble Website$")
	public void user_is_able_to_browse_to_the_Barnes_and_Noble_Website() throws InterruptedException {
	    bNoble().bnhomePage();;
	    Thread.sleep(4000);
	}
	
	@When("^user lands on home page \"([^\"]*)\"$")
	public void user_lands_on_home_page (String expTitle){
		bNoble().bnhomePage().verifyTitle(BNAppConstant.HOMEPAGE_TITLE);
	}
	
}
