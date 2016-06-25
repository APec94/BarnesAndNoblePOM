package com.paxotech.bn.framework.controller;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.paxotech.bn.framework.pages.BNMarvelPage;
import com.paxotech.bn.framework.pages.BNSearchPage;
import com.paxotech.bn.framework.pages.BNZombiePage;
import com.paxotech.bn.framework.pages.BNCartPage;
import com.paxotech.bn.framework.pages.BNDeadpoolPage;
import com.paxotech.bn.framework.pages.BNHomeAndSignInPage;

public class BNApplicationController {
	
	protected WebDriver driver = null;
	
	
	private BNHomeAndSignInPage bnhomePage = null;
	private BNMarvelPage bnMarvel = null;
	private BNCartPage bnCart = null;
	private BNSearchPage bnSearch = null;
	private BNDeadpoolPage bnDeadpool = null;
	private BNZombiePage bnZombie = null;
	
	
	public BNApplicationController (WebDriver driver){
		this.driver = driver;
	}

	public BNHomeAndSignInPage bnhomePage (){
		if (bnhomePage == null){
			bnhomePage = new BNHomeAndSignInPage(driver);
			PageFactory.initElements(driver, bnhomePage);
		}
		return bnhomePage;
	}
	
	public BNMarvelPage bnMarvel (){
		if (bnMarvel  == null){
			bnMarvel  = new BNMarvelPage(driver);
			PageFactory.initElements(driver, bnMarvel);
		}
		return bnMarvel;
	}
	
	public BNDeadpoolPage bnDeadpool (){
		if (bnDeadpool == null){
			bnDeadpool = new BNDeadpoolPage(driver);
			PageFactory.initElements(driver, bnDeadpool);
		}
		return bnDeadpool;
	}
	
	public BNCartPage bnCart (){
		if (bnCart == null){
			bnCart = new BNCartPage(driver);
			PageFactory.initElements(driver, bnCart);
		}
		return bnCart;
	}
	
	public BNSearchPage bnSearch (){
		if (bnSearch == null){
			bnSearch = new BNSearchPage(driver);
			PageFactory.initElements(driver, bnSearch);
		}
		return bnSearch;
	}
	
	public BNZombiePage bnHobby (){
		if (bnZombie == null){
			bnZombie = new BNZombiePage(driver);
			PageFactory.initElements(driver, bnZombie);
		}
		return bnZombie;
	}


}
