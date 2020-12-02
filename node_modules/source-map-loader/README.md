[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![chat][chat]][chat-url]

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" vspace="" hspace="25"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Sourcemap Loader</h1>
  <p>Extracts source maps from existing source files (from their <code>sourceMappingURL</code>).<p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D source-map-loader
```

<h2 align="center">Usage</h2>

[Documentation: Using loaders](https://webpack.js.org/concepts/#loaders)


### Example webpack config

``` javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};
```

`source-map-loader` extracts existing source maps from all JavaScript entries. This includes both inline source maps as well as those linked via URL. All source map data is passed to webpack for processing as per a chosen [source map style](https://webpack.js.org/configuration/devtool/) specified by the `devtool` option in [webpack.config.js](https://webpack.js.org/configuration/).

This loader is especially useful when using 3rd-party libraries having their own source maps. If not extracted and processed into the source map of the webpack bundle, browsers may misinterpret source map data. `source-map-loader` allows webpack to maintain source map data continuity across libraries so ease of debugging is preserved.

`source-map-loader` will extract from any JavaScript file, including those in the `node_modules` directory. Be mindful in setting [include](https://webpack.js.org/configuration/module/#rule-include) and [exclude](https://webpack.js.org/configuration/module/#rule-exclude) rule conditions to maximize bundling performance.

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">
        </br>
        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">
        </br>
        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">
        </br>
        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">
        </br>
        <a href="https://github.com/TheLarkInn">Sean Larkin</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/source-map-loader.svg
[npm-url]: https://npmjs.com/package/source-map-loader

[deps]: https://david-dm.org/webpack-contrib/source-map-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/source-map-loader

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
