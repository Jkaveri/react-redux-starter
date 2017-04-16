const argv = require('yargs').argv
const webpack = require('webpack')
const postcssnext = require('postcss-cssnext')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('./project.config')
const debug = require('debug')('app:config:webpack')

const __DEV__ = project.globals.__DEV__
const __PROD__ = project.globals.__PROD__
const __TEST__ = project.globals.__TEST__

debug('Creating configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: project.compiler_devtool,
  resolve: {
    modules: [
      project.paths.client(),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': project.paths.client()
    }
  },
  module: {}
}

const postcssOptions = {
  plugins: function () {
    return [
      postcssnext
    ]
  }
}

const sassLoaderOptions = {
  // includePaths: project.paths.client('styles'),
  sourceMap: true
}

// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY = project.paths.client('main.js')

webpackConfig.entry = {
  app: __DEV__ ? [APP_ENTRY].concat(`webpack-hot-middleware/client?path=${project.compiler_public_path}__webpack_hmr`) : [APP_ENTRY],
  vendor: project.compiler_vendors
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${project.compiler_hash_type}].js`,
  path: project.paths.dist(),
  publicPath: project.compiler_public_path
}

// ------------------------------------
// Externals
// ------------------------------------
webpackConfig.externals = {}
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true
webpackConfig.externals['react/lib/ReactContext'] = true
webpackConfig.externals['react/addons'] = true

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(project.globals),
  new webpack.ProvidePlugin(project.shimprovider),
  new HtmlWebpackPlugin({
    template: project.paths.client('index.html'),
    hash: false,
    favicon: project.paths.public('favicon.ico'),
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  })
]

// Ensure that the compiler exits on errors during testing so that
// they do not get skipped and misreported.
if (__TEST__ && !argv.watch) {
  webpackConfig.plugins.push(function () {
    this.plugin('done', function (stats) {
      if (stats.compilation.errors.length) {
        // Pretend no assets were generated. This prevents the tests
        // from running making it clear that there were warnings.
        throw new Error(
          stats.compilation.errors.map(err => err.message || err)
        )
      }
    })
  })
}

if (__DEV__) {
  debug('Enabling plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else if (__PROD__) {
  debug('Enabling plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  )
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.rules = [{
  test: /\.(js|jsx)$/,
  use: [{
    loader: 'babel-loader',
    options: project.compiler_babel
  }],
  exclude: /node_modules/
}, {
  test: /\.json$/,
  use: [{
    loader: 'json-loader'
  }]
}]

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
const BASE_CSS_LOADER = 'css-loader?sourceMap&-minimize'

webpackConfig.module.rules.push({
  test: /\.scss$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: BASE_CSS_LOADER
  }, {
    loader: 'postcss-loader',
    options: postcssOptions
  }, {
    loader: 'sass-loader',
    options: sassLoaderOptions
  }]
})

webpackConfig.module.rules.push({
  test: /\.css$/,
  use: [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]'
  }, {
    loader: 'postcss-loader',
    options: postcssOptions
  }]
})

// File loaders
/* eslint-disable */
webpackConfig.module.rules.push({
  test: /\.woff(\?.*)?$/,
  use: [{
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  }]
}, {
  test: /\.woff2(\?.*)?$/,
  use: [{
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  }]
}, {
  test: /\.otf(\?.*)?$/,
  use: [{
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  }]
}, {
  test: /\.ttf(\?.*)?$/,
  use: [{
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  }]
}, {
  test: /\.eot(\?.*)?$/,
  use: [{
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
  }]
}, {
  test: /\.svg(\?.*)?$/,
  use: [{
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
  }]
}, {
  test: /\.(png|jpg)$/,
  use: [{
    loader: 'url-loader?limit=8192'
  }]
})
/* eslint-enable */

// CUSTOM MODULEs

project.addVendorAlias(webpackConfig, 'bootstrap.css', project.paths.npm('bootstrap/dist/css/bootstrap.min.css'))
project.addVendorAlias(webpackConfig, 'font-awesome.css', project.paths.npm('font-awesome/css/font-awesome.min.css'))

// ------------------------------------
// Finalize Configuration
// ------------------------------------
// when we don't know the public path (we know it only when HMR is enabled [in development]) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  debug('Applying ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.rules.filter((rule) =>
    rule.use && rule.use.find((item) => /css/.test(item.loader.split('?')[0]))
  ).forEach((rule) => {
    const first = rule.use[0]
    const rest = rule.use.slice(1)
    rule.use = ExtractTextPlugin.extract({
      fallback: first,
      use: rest.join('!')
    })
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    })
  )
}

module.exports = webpackConfig
