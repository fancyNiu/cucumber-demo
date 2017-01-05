package com.fancy.automation.service;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.IOException;

/**
 * Created by puhui on 2017/1/5.
 */
public class Browser {

    /**没有给定启动哪个浏览器就启动chrome浏览器*/
    public static WebDriver init(){
        System.setProperty("webdriver.gecko.driver",ClassLoader.getSystemResource("drivers/geckodriver.exe").getFile());
        WebDriver driver = new FirefoxDriver();
        return driver;
    }

    /**启动给定浏览器*/
    public static WebDriver init(String browser){
        WebDriver driver = new ChromeDriver();
        return driver;
    }

}
