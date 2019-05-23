# Vue-Cli3基本配置
> vue-cli3的目录结构如下:

  ![1553763564784](VueCli3_Configuration\1553763564784.png)

> ## vue-config.js的相关配置

- outputDir: 构建文件的目录

- assetsDir: 放置静态资源(js、css、img、fonts)的目录 (相对于outputDir的路径)

- indexPath: 指定index.html的输出路径(相对于outputDir的路径) 默认index.html

  ![1553764434775](VueCli3_Configuration\1553764434775.png)

- filenameHashing: 构建生成的静态资源文件名哈希  默认true 

  ![1553763697345](VueCli3_Configuration\1553763697345.png)

  ![1553764239482](VueCli3_Configuration\1553764239482.png)

- producitonSourceMap: 生产环境是否需要sourceMap   默认true (适用于js)

  ![1554192087657](VueCli3_Configuration\1554192087657.png)

  ![1554192142241](VueCli3_Configuration\1554192142241.png)

- css.sourceMap: 是否开启css的sourceMap，开启后可能影响构建性能

  ![1557453005200](./1557453005200.png)

- css.loaderOptions: 向css传递相关的loader选项 默认 {}
  ```js
  module.exports = {
      css: {
          loaderOptions: {
              css: {
                  //此处选项会传递给css-loader
              },
              postcss: {
                  //此处选项会传递给postcss
              }
          }
      }
  }
  ```
  支持的loader有：
  - css-loader
  - postcss-loader
  - sass-loader
  - less-loader
  - stylus-loader

- devServer: 开发服务器配置  {}
    ```js
    devServer: {    
        host: "0.0.0.0",// 主机IP    
        port: 8088,// 端口
        https: false, //是否开启HTTPS 的 HTTP/2 提供服务
        // 代理配置
        proxy: {
          '/api': {
                target: 'http://localhost:9000',
                ws: true //websockets            
          }
        }
      }
    ```

- pluginOptions: 插件配置 {}