package com.paxotech.bn.framework;

import org.junit.After;
import org.junit.Before;
//import org.junit.runners.Parameterized.Parameters;

import com.paxotech.bn.framework.controller.BNApplicationController;
import com.paxotech.bn.step_definitions.Hooks;

public class BNScriptBase extends Hooks {

	private BNApplicationController bNoble = null;

	// @Before
	// public void beforeMethod() {
	// driver.manage().window().maximize();

	// driver.navigate().to(BNAppConstant.App_URL);
	// }

	public BNApplicationController bNoble() {
		if (bNoble == null) {
			bNoble = new BNApplicationController(driver);
		}
		return bNoble;
	}

	// @After
	// public void afterMethod(){
	// super.afterMethod();
	// bNoble = null;
	// }

}