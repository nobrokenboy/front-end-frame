/**
 * Created by nobrokenboy on 2017/10/24.
 */

var webpack=require('webpack');
var path=require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");//抽取多个入口节点的公共文件，
var ExtractTextPlugin = require('extract-text-webpack-plugin');//抽离css样式
var glob=require('glob');
var MainFestPlugin=require('webpack-manifest-plugin');
var prefix="../src/main/webapp/static/js";//java项目前端配置输出目录
module.exports={
    /* 多入口写法 */
 /*    entry:{
        "login":"./develop/views/login/login.js",
        "admin":"./develop/views/admin/admin.js"
    },
    output:{
        path:path.resolve(__dirname,prefix),
        filename:"[name].bundle.js"//name会跟“login”,"admin"对应
    } */

    /* 单入口 */
    entry:"./develop/main.js",
    output:{
        path:path.resolve(__dirname,"./product/static/js"),
       /*  publicPath:"",//用于配置文件发布路径，如CDN或本地服务器 */
        /* filename:"bundle.[hash].js", */
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.(scss|css|sass)/,
                loader:'style-loader!css-loader!sass-loader'//ExtractTextPlugin.extract("style-loader","css-loader","sass-loader")
            },
            {
                test: /\.jade$/,
                loader: "pug-loader"
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader',
                        'pug':'pug-loader'
                    }
                }
            },
            { 
                test: /iview.src.*?js$/, 
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:["env"] //配置不需要加.babelrc文件
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test:/\.png/,
                loader:'url-loader',
                query:{limit:1024}
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {/* 文件目录别名配置 */
        extensions:['.js','.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery':'jquery/src/jquery.js',
            'utils':path.join(__dirname,'./develop/static/script/utils'),
            'components':path.join(__dirname,'./develop/static/script/components'),
            'directive':path.join(__dirname,'./develop/static/script/directive'),
            'config':path.join(__dirname,'./develop/static/script/config'),
            'interface':path.join(__dirname,'./develop/static/script/interface')
        }
    },
    devServer:{
        historyApiFallback: true,
        noInfo: true,
        inline:true
    },
/*    devtool: '#eval-source-map',*/
    performance: {
        hints: false
    },
    plugins:[
         new webpack.optimize.UglifyJsPlugin({
             compress: {
                 warnings: false
             },
             output: {
                 comments: false
             },
             sourceMap: false
         }),
        new webpack.ProvidePlugin({//自动加载模块
            jQuery:'jquery',
            $: 'jquery',
            _:'lib'
        }),
        //new CommonsChunkPlugin("common.chunk"),//多个入口才需要，这样子是打包所有入口节点的全部公共代码，可设置可选
        new ExtractTextPlugin(''),
        /* function(){
            this.plugin('done',function(stats){
                 require('fs').writeFileSync(
                     path.join(__dirname,'develop/static/data','stats.json'),
                     JSON.stringify(stats.toJson())
                 );   
            });
        } */
        new MainFestPlugin({
            fileName: 'manifest.json',
            basePath: '/develop/static/data/',
        })
    ]
};


