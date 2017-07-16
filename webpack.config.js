var path = require("path");
var webpack  = require("webpack");

module.exports = {
  entry:"./src/js/index.js",
  common:[  //利用plugins将通用的依赖打包成一个thunk，在进行按需加载模块时减少服务器加载通用模块
    'react',
    'react-dom',
    'react-router',
    'react-redux',
    'redux',
    'redux-thunk',
    'nprogress'
  ],
  output:{
    path:path.join(__dirname,"./dist"),
    filename:"bundle.js",
    chunkFilename:"[name].chunk.js",
    publicPath:"./dist/"
  },
  resolve:{
    extensions:["",".js","jsx"]
  },
  module:{
    loaders:[
      { test: /\.js$/,    loader: "babel?presets[]=react,presets[]=es2015" },
      { test: /\.css$/,    loader: 'style!css' },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=[name].[ext]'},
    ]
  },
  // plugins:[
  //   new webpack.optimize.CommonsChunkPlugin('common','common.js')
  // ]
};