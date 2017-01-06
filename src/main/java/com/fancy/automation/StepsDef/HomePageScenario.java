package com.fancy.automation.StepsDef;

import com.fancy.automation.container.HomePageContainer;
import com.fancy.automation.service.Browser;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;

import java.util.List;

/**
 * Created by puhui on 2017/1/5.
 */
public class HomePageScenario {

    private static final Logger LOGGER = LoggerFactory.getLogger(HomePageScenario.class);
    private HomePageContainer homePage;
    private WebDriver driver;

    public HomePageScenario() {
         homePage = new HomePageContainer();
         driver = homePage.driver;
    }

    @Given("^打开百度首页$")
    public void openHomePage() throws InterruptedException {
        driver.get(homePage.getUrl());
        LOGGER.debug("成功打开首页{}", homePage.getUrl());
        Thread.sleep(2000);
    }

    @When("^点击(.*)链接$")
    public void openLink(String linkText) throws InterruptedException {
        LOGGER.debug("准备打开连接：{}", linkText);
        try {
            List<WebElement> menus = null;
            menus = (List<WebElement>) ((JavascriptExecutor) driver).executeScript("return jQuery.find('a.mnav')");

            for (WebElement menu : menus) {
                if (linkText.equals(menu.getText())) {
                    menu.click();
                    break;
                }
            }
        } catch (NoSuchElementException e) {
            LOGGER.error("找不到元素，打开连接失败");
        } catch (RuntimeException e) {
            e.printStackTrace();
        }

    }

    @Then("^跳转到(.*)页面$")
    public void assertUrl (String link) throws InterruptedException {
        Thread.sleep(1000);
        String actualUrl = driver.getCurrentUrl();
        Assert.assertEquals(actualUrl, link, "打开的窗口连接不对");
    }

    @After()
    public void tearDown(){
        driver.quit();
    }
}
