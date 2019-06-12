## 项目说明：
    一、安装：git下来后，在根目录执行‘npm install’；
    二、相关依赖包：
        1.此项目是基于ant design + ant design pro开发；
        2.数据请求使用原生封装；
        3.代码编译使用babel@7；
        4.数据仓库是原声redux；
        5.其他依赖包详见package.json；
    三、目录结构：
        src --- 项目文件
            assets --- 静态资源目录
                icon --- icon类型的小图标
                images --- .jpg等类型的图标，如banner图
            components --- 组件目录
                Welcome --- 进入登陆或首页之前的中间组件（可通过修改代码去掉）
                App.jsx --- App组件
                App.styl --- 全局css
            index.html --- html文件
            main.js --- 入口文件
        .babelrc --- 插件配置
        package.json --- npm依赖包
        webpack.config.js --- webpack配置文件