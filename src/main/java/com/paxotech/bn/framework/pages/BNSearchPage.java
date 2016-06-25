package com.paxotech.bn.framework.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class BNSearchPage extends BNPage{
	
	public static final String SEARCH_PAGE_TITLE = "Zombie Survival Guide";

	public BNSearchPage(WebDriver driver) {
		super(driver);
		
	}
	
	public void clickOnZombies (){
		driver.findElement(By.xpath("//ul[@id='gridView']/li/ul[1]/li[1]/div[2]/p/a")).click();
	}

}
