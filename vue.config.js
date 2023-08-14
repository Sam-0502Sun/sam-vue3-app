// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
function resolve (resolvePath) {
  return path.join(__dirname, resolvePath)
}
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动引入，使用绝对路径
      // 需要是path.join来拼接完整路径
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variables.less'),
        path.resolve(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  chainWebpack (config) {
    // 禁用系统内部对svg的处理
    config.module.rule('svg').exclude.add(resolve('./src/icons/svg'))
    // 新建规则处理svg文件
    config.module
      .rule('icons')
      .test(/\.svg$/) // 添加svg的匹配规则
      .include.add(resolve('./src/icons/svg')) // 添加处理的文件路径
      .end() // 上面的add方法改变了上下文，调用end()退回到include这一级
      .use('svg-sprite-loader') // 使用"svg-sprite-loader"这个依赖
      .loader('svg-sprite-loader') // 选中这个依赖
      .options({
        symbolId: 'icon-[name]', // 这个配置是这个包的配置不属于webpack，可以查看相关文档，symbolId指定我们使用svg图片的名字
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: ['fill', 'class', 'stroke', 'data-name', 'width', 'height']
            }
          }
        ]
      }) // 传入配置
  },
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        '@': path.resolve('src')
      }
    }
  }
}
