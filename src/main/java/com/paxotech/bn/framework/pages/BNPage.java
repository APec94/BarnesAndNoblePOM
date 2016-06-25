package com.paxotech.bn.framework.pages;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import org.openqa.selenium.WebDriver;

import com.paxotech.bn.framework.BNAppConstant;

public class BNPage extends BNPageBase {
	
	public BNPage(WebDriver driver) {
		super(driver);

	}

	public void verifyTitle(String expected) {
		String actual = driver.getTitle();

		assertThat(actual, equalToIgnoringCase(expected));

	}


}
