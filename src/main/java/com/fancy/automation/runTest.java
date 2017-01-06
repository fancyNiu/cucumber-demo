package com.fancy.automation;

import cucumber.api.CucumberOptions;
import cucumber.api.cli.Main;
import cucumber.api.junit.Cucumber;
import net.masterthought.cucumber.ConfigurationOptions;
import net.masterthought.cucumber.ReportBuilder;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.internal.Configuration;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by puhui on 2017/1/4.
 */


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/feature",
        plugin = {"pretty","junit:reports/junit/junit.xml","html:reports/html","json:reports/result.json"},
        glue={"com.fancy.automation.StepsDef"}
)
public class runTest {
    public static void main(String[] args) throws IOException {
        File reportOutputDirectory = new File("reports/new/");
        List<String> jsonFiles = new ArrayList<String>();
        jsonFiles.add("reports/result.json");

        String buildNumber = "1";
        String projectName = "cucumberProject";
        boolean runWithJenkins = false;
        boolean parallelTesting = false;

        ConfigurationOptions configuration = ConfigurationOptions
        configuration
                .setParallelTesting(parallelTesting);
        configuration.setRunWithJenkins(runWithJenkins);
        configuration.setBuildNumber(buildNumber);
        configuration.addClassifications("Platform", "Windows");
        configuration.addClassifications("Browser", "Firefox");
        configuration.addClassifications("Branch", "release/1.0");
        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, );
        Reportable result = reportBuilder.generateReports();
    }
}
