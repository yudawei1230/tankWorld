var webpack = require('webpack');
 
module.exports = {
    //页面入口文件配置
    entry: {
        index : './entry/index.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname+'/dist/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: []
    },
    
    devtool: 'source-map',

    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss']
    }
};