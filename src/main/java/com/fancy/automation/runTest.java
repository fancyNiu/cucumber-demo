package com.fancy.automation;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by puhui on 2017/1/4.
 */


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/feature",
        plugin = {"pretty","junit:reports/junit/junit.xml","html:reports/html"},
        glue={"com.fancy.automation.StepsDef"}
)
public class runTest {

}
