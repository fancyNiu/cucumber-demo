package com.fancy.automation.container;

import com.fancy.automation.service.Browser;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

/**
 * Created by puhui on 2017/1/5.
 */
public class HomePageContainer {

    public WebDriver driver;
    //百度首页地址
    private final String url = "https://www.baidu.com";
    //百度搜索框
    @FindBy(id="kw")
    @CacheLookup
    private By searchBox;
    //百度一下按钮
    @FindBy(id="su")
    @CacheLookup
    private By searchButton;
    //登陆按钮
    @FindBy(className="lb")
    @CacheLookup
    private By login;
    //糯米连接
    @FindBy(linkText="糯米")
    @CacheLookup
    private By nuomi;
    //新闻连接
    @FindBy(name="tj_trnews")
    @CacheLookup
    private By news;
    //hao123连接
    @FindBy(name="tj_trhao123")
    @CacheLookup
    private By hao123;
    //地图连接
    @FindBy(name="tj_trmap")
    @CacheLookup
    private By map;

    public By getNuomi() {
        return nuomi;
    }

    public void setNuomi(By nuomi) {
        this.nuomi = nuomi;
    }

    public By getNews() {
        return news;
    }

    public void setNews(By news) {
        this.news = news;
    }

    public By getHao123() {
        return hao123;
    }

    public void setHao123(By hao123) {
        this.hao123 = hao123;
    }

    public By getMap() {
        return map;
    }

    public void setMap(By map) {
        this.map = map;
    }

    public By getVideo() {
        return video;
    }

    public void setVideo(By video) {
        this.video = video;
    }

    public By getTieba() {
        return tieba;
    }

    public void setTieba(By tieba) {
        this.tieba = tieba;
    }

    //视频连接
    @FindBy(name="tj_trvideo")
    @CacheLookup

    private By video;
    //新闻连接
    @FindBy(name="tj_trtieba")
    @CacheLookup
    private By tieba;




    public HomePageContainer() {
        this.driver = Browser.init();
    }

    public HomePageContainer(String browser) {
        this.driver = Browser.init();
    }

    public HomePageContainer(WebDriver driver) {
        this.driver = driver;
    }

    public String getUrl() {
        return url;
    }

    public By getSearchBox() {
        return searchBox;
    }

    public void setSearchBox(By searchBox) {
        this.searchBox = searchBox;
    }

    public By getSearchButton() {
        return searchButton;
    }

    public void setSearchButton(By searchButton) {
        this.searchButton = searchButton;
    }

    public By getLogin() {
        return login;
    }

    public void setLogin(By login) {
        this.login = login;
    }
}
