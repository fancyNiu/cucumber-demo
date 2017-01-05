Feature: 搜索
Background: 用户在百度首页上点击链接文字

  Scenario Outline: 用户在百度首页上点击链接文字
    Given 打开百度首页
    When 点击<linkText>链接
    Then 跳转到<expectUrl>页面
    Examples:
      | linkText | expectUrl |
      | 糯米 | https://www.nuomi.com/?cid=002540 |
      | 新闻 | http://news.baidu.com/          |
      | hao123 | https://www.hao123.com/    |
#      | 地图 | http://map.baidu.com/       |
#      | 视频 | http://v.baidu.com/?fr=bd         |
#      | 贴吧 | https://tieba.baidu.com/index.html     |


  Scenario Outline: 不知道用户要干嘛
    Given 打开百度首页
    When 点击<linkText>链接
    Then 跳转到<expectUrl>页面
    Examples:
      | linkText | expectUrl |
      | 地图 | http://map.baidu.com/       |
      | 视频 | http://v.baidu.com/?fr=bd         |
      | 贴吧 | https://tieba.baidu.com/index.html     |


