package com.paxotech.bn.step_definitions;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		monochrome = true, 
		features = "src/test/resources/features", 
		glue = { "com.paxotech.bn.step_definitions/BNSteps.java" }, 
		plugin = {
				"pretty", "html:target/test-report", 
				"json:target/test-report.json", 
				"json:target/cucumber-report.json",
				"junit:target/test-report.xml" })

public class BNRunner {

}
