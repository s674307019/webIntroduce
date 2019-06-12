const path = require('path');
const webpack = require('webpack');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理垃圾文件
const PostStylus = require('poststylus'); // stylus加前缀
const HappyPack = require('happypack'); // 分块打包
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// 获取本机ip
const get_ip=require('./get_ip');

/**
 * 判断是生产环境还是开发环境
 * @type {boolean}
 * isProd为true表示生产
 */
const isProd = process.env.NODE_ENV === 'production';

/**
 * 图片压缩
 * url-loader image-webpack-loader
 */
const imageLoader=isProd?[{
    // loader: 'file-loader', // url-loader比file-loader多了一个limit功能
    loader: 'url-loader',
    options: { // 配置图片编译路径
        limit: 8192, // 小于8k将图片转换成base64
        name: isProd ? '[name].[hash:8].[ext]' : '[name].[ext]',
        outputPath: 'images/' // 指定打包后的图片位置
    }
}, {
    loader: 'image-webpack-loader', // 图片压缩
    options: {
        bypassOnDebug: true,
        disable: true
    }
}]:[{loader: 'url-loader'}];

const config = {
    entry: isProd ? {
        vendor: ['react', 'react-dom', 'react-router-dom'], // 打包第三方库放在vendor.js中, externals、ProvidePlugin中的库
        main: './src/main.js'
    } : [
        'react-hot-loader/patch',
        './src/main_dev.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isProd ? 'javascript/[name].[hash:8].js' : '[name].js',
        publicPath: isProd ? './' : '/',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'happypack/loader?id=jsx',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            // 定制主题
            // {
            //     test: /\.less$/,
            //     use: [{
            //         loader: 'style-loader',
            //     }, {
            //         loader: 'css-loader', // translates CSS into CommonJS
            //     }, {
            //         loader: 'less-loader', // compiles Less to CSS
            //         options: {
            //             modifyVars: {
            //                 'primary-color': '#fff',
            //                 'link-color': '#1DA57A',
            //                 'border-radius-base': '2px',
            //             },
            //             javascriptEnabled: true
            //         }
            //     }]
            // },
            // {
            //     test: /\.less$/,
            //     use: [{
            //         loader: 'style-loader',
            //     }, {
            //         loader: 'css-loader', // translates CSS into CommonJS
            //     }, {
            //         loader: 'less-loader', // compiles Less to CSS
            //     }]
            // },
            {
                test: /\.css$/,
                use: [isProd?MiniCssExtractPlugin.loader:'style-loader',isProd?'css-loader?minimize':'css-loader'],
                // include:path.join(__dirname,'src'),
                // exclude:/node_modules/
            },
            {
                test: /\.styl$/,
                use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', {
                    loader: 'css-loader',
                    options: {
                        minimize: isProd,
                        sourceMap: !isProd
                    }
                }, {
                    loader: 'stylus-loader',
                    options: {
                        minimize: isProd,
                        sourceMap: !isProd
                    }
                }],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|bmp)$/,
                use: imageLoader,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {test: /\.(mp4|ogg|svg)$/, use: ['file-loader']},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(`xs create in ${Date.now()}`),
        new HappyPack({
            id: 'jsx', // id值，与loader配置项对应
            loaders: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: !isProd
                }
            }], // 用什么loader处理
            //共享进程池
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html') // 引入模版
            // ,favicon: path.join(__dirname, 'src/assets/icon/favicon.ico')
            , filename: 'index.html'
            , minify: { // 对index.html压缩
                collapseWhitespace: isProd // 去掉index.html的空格
                , removeAttributeQuotes: isProd // 去掉引号
            }
            , hash: true // 去掉上次浏览器的缓存（使浏览器每次获取到的是最新的html）
            // , chunks: ['vendor','main'] // 在产出的html文件里面引入哪些代码块，里面的名字要跟entry里面key对应(一般用于多文件入口)(默认会引入entry里面的)
        }),
        // new webpack.ProvidePlugin({ // 配置第三方库
        //     $http: 'axios'
        // }),
        new webpack.LoaderOptionsPlugin({ // stylus加前缀
            options: {
                stylus: {
                    use: [
                        PostStylus(['autoprefixer', 'rucksack-css']),
                    ]
                }
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // import引入文件的时候不用加后缀
        modules: [ // 配置路径别名
            'node_modules'
            , path.resolve(__dirname, 'src/components')
            , path.resolve(__dirname, 'src/assets')
        ]
    }
    // externals: { // 外部扩展
    //     'React': 'react',
    //     'ReactDom': 'react-dom'
    //     ,'antd': 'antd'
    // }
};

if (isProd) {
    config.plugins.push(
        new CleanWebpackPlugin([path.join(__dirname, 'dist')]), // 清理垃圾文件
        // filename 是指在你入口文件entry中引入生成出来的文件名，而chunkname是指那些未被在入口文件entry引入，但又通过按需加载（异步）模块的时候引入的文件
        new MiniCssExtractPlugin({ // 分离css
            filename: 'stylesheets/[name].[contenthash:8].css',
            // chunkFilename: 'stylesheets/[id].[contenthash:8].css'
        }),
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.css$/g,       //一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
        //     cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
        //     cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
        //     canPrint: true                    //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
        // })
        new OptimizeCssAssetsPlugin()
    );
    config.optimization = { // 抽离第三方插件
        splitChunks: {
            chunks: 'all', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
            minSize: 10000, // 提高缓存利用率，这需要在http2/spdy
            maxSize: 0,//没有限制
            minChunks: 3,// 共享最少的chunk数，使用次数超过这个值才会被提取
            maxAsyncRequests: 5,//最多的异步chunk数
            maxInitialRequests: 5,// 最多的同步chunks数
            name: true,
            cacheGroups: { // 这里开始设置缓存的 chunks
                vendor: { // key 为entry中定义的 入口名称，new webpack.ProvidePlugin中的库
                    test: /node_modules/, // 正则规则验证，如果符合就提取 chunk (指定是node_modules下的第三方包)
                    name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
                    enforce: true
                },
                styles: {
                    name: 'main',
                    test: /src\.(css|styl)$/,
                    enforce: true
                }
            }
        }
    }
} else {
    config.resolve.alias = {
        'react-dom': '@hot-loader/react-dom'
    };
    config.devServer = {
        contentBase: path.join(__dirname, 'dist') // 将 dist 目录下的文件，作为可访问文件。
        , compress: true // 开启Gzip压缩
        , host: get_ip() // 设置服务器的ip地址，默认localhost
        , port: 3001 // 端口号
        , overlay: { // 当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
            errors: true
        }
        , open: true // 自动打开浏览器
        , inline: true // 在打包后文件里注入一个websocket客户端  自动打包，浏览器自动刷新
        , hot: true
        // ,historyApiFallback: true // 使用BrowserRouter时，刷新页面不会404(dev模式)
        ,proxy: { // 配置服务器代理 处理跨域
            '/api': {
                target: 'http://172.16.20.204:8080', // 要请求的IP地址
                secure: false,
                pathRewrite: {'^/api' : ''},
                changeOrigin: true
            }
        }
    };
    config.devtool = 'source-map';

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(), // 热更新
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin() // 证出错时页面不阻塞，且会在编译结束后报错
    );
}

module.exports = config;
