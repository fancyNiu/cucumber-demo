package com.fancy.automation;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by puhui on 2017/1/4.
 */
public class AppMain {

    private static final Logger LOGGER = LoggerFactory.getLogger(AppMain.class);

    public static void main(String[] args) {
        LOGGER.info("打印日志成功");
        LOGGER.debug("123");
    }

}
