$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "首页菜单栏的点击",
  "description": "",
  "id": "首页菜单栏的点击",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@high"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "用户在百度首页上点击菜单栏的连接文字",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "点击\u003clinkText\u003e链接",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "跳转到\u003cexpectUrl\u003e页面",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;",
  "rows": [
    {
      "cells": [
        "linkText",
        "expectUrl"
      ],
      "line": 10,
      "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;1"
    },
    {
      "cells": [
        "糯米",
        "https://www.nuomi.com/?cid\u003d002540"
      ],
      "line": 11,
      "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;2"
    },
    {
      "cells": [
        "新闻",
        "http://news.baidu.com/"
      ],
      "line": 12,
      "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;3"
    },
    {
      "cells": [
        "hao123",
        "https://www.hao123.com/"
      ],
      "line": 13,
      "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;4"
    },
    {
      "cells": [
        "地图",
        "http://map.baidu.com/"
      ],
      "line": 14,
      "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;5"
    },
    {
      "cells": [
        "视频",
        "http://v.baidu.com/?fr\u003dbd"
      ],
      "line": 15,
      "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;6"
    },
    {
      "cells": [
        "贴吧",
        "https://tieba.baidu.com/index.html"
      ],
      "line": 16,
      "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "用户在百度首页上点击菜单栏的连接文字",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@high"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "点击糯米链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "跳转到https://www.nuomi.com/?cid\u003d002540页面",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageScenario.openHomePage()"
});
formatter.result({
  "duration": 7505261989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "糯米",
      "offset": 2
    }
  ],
  "location": "HomePageScenario.openLink(String)"
});
formatter.result({
  "duration": 84620100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.nuomi.com/?cid\u003d002540",
      "offset": 3
    }
  ],
  "location": "HomePageScenario.assertUrl(String)"
});
formatter.result({
  "duration": 1160507697,
  "status": "passed"
});
formatter.after({
  "duration": 1555187204,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "用户在百度首页上点击菜单栏的连接文字",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@high"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "点击新闻链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "跳转到http://news.baidu.com/页面",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageScenario.openHomePage()"
});
formatter.result({
  "duration": 6772759421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "新闻",
      "offset": 2
    }
  ],
  "location": "HomePageScenario.openLink(String)"
});
formatter.result({
  "duration": 89847100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://news.baidu.com/",
      "offset": 3
    }
  ],
  "location": "HomePageScenario.assertUrl(String)"
});
formatter.result({
  "duration": 1185885049,
  "status": "passed"
});
formatter.after({
  "duration": 1386197530,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "用户在百度首页上点击菜单栏的连接文字",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@high"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "点击hao123链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "跳转到https://www.hao123.com/页面",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageScenario.openHomePage()"
});
formatter.result({
  "duration": 5711760655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hao123",
      "offset": 2
    }
  ],
  "location": "HomePageScenario.openLink(String)"
});
formatter.result({
  "duration": 83675378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hao123.com/",
      "offset": 3
    }
  ],
  "location": "HomePageScenario.assertUrl(String)"
});
formatter.result({
  "duration": 1091038616,
  "status": "passed"
});
formatter.after({
  "duration": 1357962217,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "用户在百度首页上点击菜单栏的连接文字",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@high"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "点击地图链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "跳转到http://map.baidu.com/页面",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageScenario.openHomePage()"
});
formatter.result({
  "duration": 6298712938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "地图",
      "offset": 2
    }
  ],
  "location": "HomePageScenario.openLink(String)"
});
formatter.result({
  "duration": 99832703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://map.baidu.com/",
      "offset": 3
    }
  ],
  "location": "HomePageScenario.assertUrl(String)"
});
formatter.result({
  "duration": 1206430086,
  "status": "passed"
});
formatter.after({
  "duration": 1371191600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "用户在百度首页上点击菜单栏的连接文字",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@high"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "点击视频链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "跳转到http://v.baidu.com/?fr\u003dbd页面",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageScenario.openHomePage()"
});
formatter.result({
  "duration": 5796746515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "视频",
      "offset": 2
    }
  ],
  "location": "HomePageScenario.openLink(String)"
});
formatter.result({
  "duration": 107463263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://v.baidu.com/?fr\u003dbd",
      "offset": 3
    }
  ],
  "location": "HomePageScenario.assertUrl(String)"
});
formatter.result({
  "duration": 1007135573,
  "status": "passed"
});
formatter.after({
  "duration": 1421414929,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "用户在百度首页上点击菜单栏的连接文字",
  "description": "",
  "id": "首页菜单栏的点击;用户在百度首页上点击菜单栏的连接文字;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@high"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "点击贴吧链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "跳转到https://tieba.baidu.com/index.html页面",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageScenario.openHomePage()"
});
formatter.result({
  "duration": 6013806948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "贴吧",
      "offset": 2
    }
  ],
  "location": "HomePageScenario.openLink(String)"
});
formatter.result({
  "duration": 115449320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://tieba.baidu.com/index.html",
      "offset": 3
    }
  ],
  "location": "HomePageScenario.assertUrl(String)"
});
formatter.result({
  "duration": 1255371856,
  "status": "passed"
});
formatter.after({
  "duration": 1401586015,
  "status": "passed"
});
});