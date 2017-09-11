```
assets                    资源文件夹
    |-img                 图片文件夹
    |    |-favicon.ioc    icon
    |    |-logo.jpg       logo
    |-js                  js文件夹
    |    |-common.js      通用js
    |    |
    |-style               样式文件夹
    |    |-common.less    全局样式
    |
build                       构建输出目录
component                   通用组件文件夹
configs                            配置文件夹
    |-build.js                     发布构建脚本
    |-client.js                    客户端刷新脚本
    |-isomorphic.config.js         同构插件配置
    |-nodemon.json                 nodemon配置文件
    |-webpack.base.config.js       打包基础配置文件
    |-webpack.config.js            开发打包配置文件
    |-webpack.prod.config.js       发布打包配置文件(前端)
    |-webpack.release.config.js    发布打包配置文件(后端)
    |
mock                        模拟数据文件夹
pages                       页面文件夹
    |-home                  首页文件夹
    |    |-action.js        首页交互行为定义
    |    |-home.jsx         首页页面
    |    |-reducer.js       首页交互处理
    |    |-style.less       首页样式
    |
    |-entry.js            入口文件配置
    |-index.jsx           页面入口文件
    |-reducers.js         reducer集合文件
    |-routes.jsx          路由配置文件
    |
.babelrc                       babel配置
.eslintrc.js                   eslint规则配置
.gitignore                     git忽略目录配置
build.zip                      前端静态资源包(分布部署用,git不维护此文件)
.stylelintrc.js                stylelint规则配置
FILELIST.md                    文件清单
index.html                     首页模板文件
LICENSE                        license文件
package.json                   项目信息文件
README.md                      项目说明文件
RELEASENOTE.md                 项目版本记录文件
server.js                      服务端启动文件
```
