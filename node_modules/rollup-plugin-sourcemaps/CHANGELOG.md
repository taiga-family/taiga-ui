# Changelog

## 0.6.3

- Fix ES module breaking due to not default-importing CommonJS modules
- Add some warning messages

## 0.6.2

- Fix issue with exports that prevented it from working in Node 13.0-13.6

## 0.6.1

- Fix issue with conditional exports that prevented it from working in Node 13+

## 0.6.0

- Drop support for Node 8
- Update dependencies
- Publish ES module for Node 12+ using conditional exports

## 0.5.0

- Drop support for Node < 8 and make use of ES2017 features
- Switch from Babel to TypeScript
- Remove `jsnext:main` field from package.json

## 0.4.2

- Add the ability to override the `readFile` function
- Switch to `babel-preset-env`

## 0.4.1

- Add `module` field to package.json

## 0.4.0

- Remove async functions, since they require `babel-runtime` on Node 4

## 0.3.7

- Switch to `babel-preset-latest`

## 0.3.6

- Switch to `babel-preset-es2015`

## 0.3.5

- Upgrade internal build process

## 0.3.4

- Add `name` property to plugin object

## 0.3.3

- Change incorrect package.json property `js:main` to `jsnext:main`

## 0.3.2

- Include `sourcesContent` in source map

## 0.3.1

- Fix incorrect lowest compatible version of Rollup

## 0.3.0

- Rename exported plugin function
- Upgrade internal build process

## 0.2.0

- Use `source-map-resolve` for extracting source maps

## 0.1.1

- Fix inline source maps not being detected

## 0.1.0

- First public release 🎉
