const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS =[
    "angular",
    // "angular-route",
     "angular-material",
     "ui-select",
    //  "angular-aria",
    //  "angular-animate",
     "angular-sanitize",
     "angular-messages"
]

module.exports = {
    entry:{
        bundle:"./src/js/index.js",
        vendor: VENDOR_LIBS
    }
    ,
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname, "public")
    },
    module:{
        rules:[
            {
                use: "babel-loader",
                test:/\.js$/
            }
            ,{
                use:ExtractTextPlugin.extract({
                    use:["css-loader"]
                }),
                test:/\.css$/
            }
        ]
    },
    plugins:[
        new htmlwebpackplugin({
            template: path.resolve(__dirname, "src/index.html")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:["vendor"]
        }),
        new ExtractTextPlugin("style.css")
    ]
}