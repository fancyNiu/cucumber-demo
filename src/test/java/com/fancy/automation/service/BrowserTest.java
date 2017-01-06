package com.fancy.automation.service;

import org.junit.Test;
import org.openqa.selenium.WebDriver;

/**
 * Created by puhui on 2017/1/5.
 */
public class BrowserTest {


    @Test
    public void initTest(){
        WebDriver driver = Browser.init();
        driver.get("https://www.baidu.com");
        driver.manage().window().maximize();
        driver.quit();
        Browser.close();
    }

}
