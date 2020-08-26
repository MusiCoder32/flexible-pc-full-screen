const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

const moment = require('moment');
process.env.VUE_APP_TIME = moment().format('YYYY.MM.DD hh:mm:ss a');

const isProd = process.env.NODE_ENV === 'production'

const assetsCDN = {
    // webpack build externals
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        echarts:'echarts',
        'vue-echarts':'VueECharts',
        axios: 'axios',
        d3:'d3',
        'element-ui':'ELEMENT'
    },
    css: [],
    // https://unpkg.com/browse/vue@2.6.10/
    js: [
        '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
        '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
        '//cdn.jsdelivr.net/npm/echarts@4.5.0/dist/echarts.js',
        '//cdn.jsdelivr.net/npm/vue-echarts@4.1.0',
        '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js',
        '//cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js',
    ]
}

module.exports = {
    publicPath: './', // 默认值为'./'
    // publicPath: './init-manager', // 默认值为'./'
    assetsDir: 'assets',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: 9000,
        before(app) {
            // app.get("/api/test", (req, res) => {
            //     console.log(req.route.path);
            //     var data = mock('/aip/index')
            //     console.log(data)
            //     res.json(data);
            // });
        },
        proxy: {
            '/api': {
                target: 'http://api.yzt.scdem.cn',
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackInlinePlugin({
                compress: false
            }),
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),//匹配文件名
                threshold: 10240,//对10K以上的数据进行压缩
                minRatio: 0.8,
                deleteOriginalAssets:false,//是否删除源文件
            })
        ],
        // if prod, add externals
        externals: isProd ? assetsCDN.externals : {}
    },
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                if (isProd) {
                    args[0].minify.removeComments = false;
                }
                return args;
            });
        if (isProd) {
            config.plugin('html').tap(args => {
                args[0].cdn = assetsCDN
                return args
            })
        }
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ]
};
//导出webpack配置
//npx vue-cli-service inspect > output.js