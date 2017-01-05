$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "搜索",
  "description": "",
  "id": "搜索",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "id": "搜索;用户在百度首页上点击链接文字",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "点击\u003clinkText\u003e链接",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "跳转到\u003cexpectUrl\u003e页面",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "搜索;用户在百度首页上点击链接文字;",
  "rows": [
    {
      "cells": [
        "linkText",
        "expectUrl"
      ],
      "line": 9,
      "id": "搜索;用户在百度首页上点击链接文字;;1"
    },
    {
      "cells": [
        "糯米",
        "https://www.nuomi.com/?cid\u003d002540"
      ],
      "line": 10,
      "id": "搜索;用户在百度首页上点击链接文字;;2"
    },
    {
      "cells": [
        "新闻",
        "http://news.baidu.com/"
      ],
      "line": 11,
      "id": "搜索;用户在百度首页上点击链接文字;;3"
    },
    {
      "cells": [
        "hao123",
        "https://www.hao123.com/"
      ],
      "line": 12,
      "id": "搜索;用户在百度首页上点击链接文字;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 10,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "id": "搜索;用户在百度首页上点击链接文字;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "点击糯米链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
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
  "duration": 8337696164,
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
  "duration": 100720508,
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
  "duration": 1222755362,
  "status": "passed"
});
formatter.after({
  "duration": 1585756566,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "id": "搜索;用户在百度首页上点击链接文字;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "点击新闻链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
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
  "duration": 6209431272,
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
  "duration": 84288397,
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
  "duration": 1154098511,
  "status": "passed"
});
formatter.after({
  "duration": 1440217011,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "id": "搜索;用户在百度首页上点击链接文字;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "点击hao123链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
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
  "duration": 6627806760,
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
  "duration": 163826122,
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
  "duration": 1121012687,
  "status": "passed"
});
formatter.after({
  "duration": 1336391280,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 13,
      "value": "#      | 地图 | http://map.baidu.com/       |"
    },
    {
      "line": 14,
      "value": "#      | 视频 | http://v.baidu.com/?fr\u003dbd         |"
    },
    {
      "line": 15,
      "value": "#      | 贴吧 | https://tieba.baidu.com/index.html     |"
    }
  ],
  "line": 18,
  "name": "不知道用户要干嘛",
  "description": "",
  "id": "搜索;不知道用户要干嘛",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "点击\u003clinkText\u003e链接",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "跳转到\u003cexpectUrl\u003e页面",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "搜索;不知道用户要干嘛;",
  "rows": [
    {
      "cells": [
        "linkText",
        "expectUrl"
      ],
      "line": 23,
      "id": "搜索;不知道用户要干嘛;;1"
    },
    {
      "cells": [
        "地图",
        "http://map.baidu.com/"
      ],
      "line": 24,
      "id": "搜索;不知道用户要干嘛;;2"
    },
    {
      "cells": [
        "视频",
        "http://v.baidu.com/?fr\u003dbd"
      ],
      "line": 25,
      "id": "搜索;不知道用户要干嘛;;3"
    },
    {
      "cells": [
        "贴吧",
        "https://tieba.baidu.com/index.html"
      ],
      "line": 26,
      "id": "搜索;不知道用户要干嘛;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "不知道用户要干嘛",
  "description": "",
  "id": "搜索;不知道用户要干嘛;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "点击地图链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
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
  "duration": 6368803435,
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
  "duration": 117539373,
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
  "duration": 1182914187,
  "status": "passed"
});
formatter.after({
  "duration": 1358349436,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "不知道用户要干嘛",
  "description": "",
  "id": "搜索;不知道用户要干嘛;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "点击视频链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
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
  "duration": 7159752384,
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
  "duration": 182169606,
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
  "duration": 1035655003,
  "status": "passed"
});
formatter.after({
  "duration": 1421072962,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "用户在百度首页上点击链接文字",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "不知道用户要干嘛",
  "description": "",
  "id": "搜索;不知道用户要干嘛;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "打开百度首页",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "点击贴吧链接",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
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
  "duration": 6361577822,
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
  "duration": 156304730,
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
  "duration": 1329988626,
  "status": "passed"
});
formatter.after({
  "duration": 1424552808,
  "status": "passed"
});
});