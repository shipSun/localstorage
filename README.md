localStorage保存搜索历史记录
===============

## 使用说明

config={

    "key":'search', //数据库名
    "id":'list', //显示记录
    "urlName":'#url', //搜索网址
    "keywordName":'#keyword', //搜索关键字
    "tmp":'<li><a href="#url">#keyword</a></li>' //显示模板
    
};

1、$.search().createDiv(); 显示
2、$.search().push(key); 添加
3、$.search().clean();清空