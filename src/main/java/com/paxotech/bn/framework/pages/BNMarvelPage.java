package com.paxotech.bn.framework.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class BNMarvelPage extends BNPage{
	
	

	public BNMarvelPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(driver, this);
	}

}
