const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

const moment = require('moment');
process.env.VUE_APP_TIME = moment().format('YYYY.MM.DD hh:mm:ss a');

const isProd = process.env.NODE_ENV === 'production'

const assetsCDN = {
    // webpack build externals
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        ECharts:'ECharts',
        axios: 'axios',
    },
    css: [],
    // https://unpkg.com/browse/vue@2.6.10/
    js: [
        '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
        '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
        '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
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
            '/web': {
                // target:'http://192.168.9.236/',
                // target: 'http://192.168.9.122/',
                // target: 'http://192.168.9.219/',
                target: 'http://192.168.9.108/',
                // target: 'http://192.168.9.249/',
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackInlinePlugin({
                compress: false
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
    }
};
//导出webpack配置
//npx vue-cli-service inspect > output.js