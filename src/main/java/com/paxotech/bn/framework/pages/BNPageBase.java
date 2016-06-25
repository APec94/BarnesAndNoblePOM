package com.paxotech.bn.framework.pages;

import org.openqa.selenium.WebDriver;

public class BNPageBase {
	
	public static final int DEFAULT_WAIT_TIME = 30; // in seconds
	public static final int DEFAULT_POLLING_TIME = 100; // in milliseconds

	protected WebDriver driver = null;
	

	public BNPageBase(WebDriver driver) {
		this.driver = driver;
		

	} 
	
	public void delayFor(int time){
		try {
			Thread.sleep(time);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
