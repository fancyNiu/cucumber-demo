Feature: 搜索
Background: 用户在百度首页上点击链接文字

  Scenario Outline: 用户在百度首页上点击链接文字
    Given 打开百度首页
    When 点击<linkText>链接
    Then 跳转到<link>页面
    Examples:
      | linkText | link |
      | 糯米 | http://www.nuomi.com/?cid=002540 |
      | 新闻 | http://news.baidu.com/           |
      | hao123 | http://www.hao123.com/       |
      | 地图 | http://map.baidu.com/        |
      | 视频 | http://v.baidu.com/          |
      | 贴吧 | http://tieba.baidu.com/      |



