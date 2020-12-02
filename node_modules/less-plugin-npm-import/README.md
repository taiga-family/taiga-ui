[![NPM version](https://badge.fury.io/js/less-plugin-npm-import.svg)](http://badge.fury.io/js/less-plugin-npm-import) [![Dependencies](https://david-dm.org/less/less-plugin-npm-import.svg)](https://david-dm.org/less/less-plugin-npm-import) [![devDependency Status](https://david-dm.org/less/less-plugin-npm-import/dev-status.svg)](https://david-dm.org/less/less-plugin-npm-import#info=devDependencies) [![optionalDependency Status](https://david-dm.org/less/less-plugin-npm-import/optional-status.svg)](https://david-dm.org/less/less-plugin-npm-import#info=optionalDependencies)

less-plugin-npm-import
========================

Adds the ability for less to import from npm packages

## lessc usage

Install with npm

```bash
npm install -g less-plugin-npm-import
```

In less file:

```
@import "npm://packagename/path/to/file.less";
```

css/less extensions not necessary

Options:  
prefix - default: npm://

## Command line usage

```
lessc --npm-import file.less file.css
lessc --npm-import="prefix=~" file.less file.css
```

## Programmatic usage

```
var NpmImportPlugin = require("less-plugin-npm-import"),
    options = { plugins: [new NpmImportPlugin({prefix: '~'})] };
less.render(css, options)
    .then(...
```

## Browser usage

Browser usage is not supported.

Testing
-------

run the tests by running `node test`
You require the dev dependencies installed (which includes less)
