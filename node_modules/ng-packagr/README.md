# ng-packagr

> Transpile your libraries to Angular Package Format


[![npm](https://img.shields.io/npm/v/ng-packagr.svg?style=flat-square)](https://www.npmjs.com/package/ng-packagr)
[![npm License](https://img.shields.io/npm/l/ng-packagr.svg?style=flat-square)](https://github.com/ng-packagr/ng-packagr/blob/master/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![CircleCI](https://img.shields.io/circleci/project/github/ng-packagr/ng-packagr/master.svg?label=Circle%20CI&style=flat-square)](https://circleci.com/gh/ng-packagr/ng-packagr)

[![GitHub contributors](https://img.shields.io/github/contributors/ng-packagr/ng-packagr.svg?style=flat-square)](https://github.com/ng-packagr/ng-packagr)
[![GitHub stars](https://img.shields.io/github/stars/ng-packagr/ng-packagr.svg?label=GitHub%20Stars&style=flat-square)](https://github.com/ng-packagr/ng-packagr)
[![npm Downloads](https://img.shields.io/npm/dw/ng-packagr.svg?style=flat-square)](https://www.npmjs.com/package/ng-packagr)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square)](https://renovateapp.com/)

## Credits

### Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

<a href="https://github.com/ng-packagr/ng-packagr/graphs/contributors"><img src="https://opencollective.com/ng-packagr/contributors.svg?width=890&button=false" /></a>

## Installation

```bash
npm install -D ng-packagr
```

## Usage Example

Let's walk through a _getting started_ that'll build an Angular library from TypeScript sources and create a distribution-ready npm package:
create a `package.json` file, add the custom `ngPackage` property, and eventually run `ng-packagr -p package.json`
– Here we go:

```json
{
  "$schema": "./node_modules/ng-packagr/package.schema.json",
  "name": "@my/foo",
  "version": "1.0.0",
  "ngPackage": {
    "lib": {
      "entryFile": "public_api.ts"
    }
  }
}
```

Note 1: Paths in the `ngPackage` section are resolved relative to the location of the `package.json` file.
In the above example, `public_api.ts` is the entry file to the library's sources and must be placed next to `package.json` (a sibling in the same folder).

Note 2: referencing the `$schema` enables JSON editing support (auto-completion for configuration) in IDEs like [VSCode](https://github.com/Microsoft/vscode).

You can easily run _ng-packagr_ through a npm/yarn script:

```json
{
  "scripts": {
    "build": "ng-packagr -p package.json"
  }
}
```

Now, execute the build with the following command:

```bash
$ yarn build
```

The build output is written to the `dist` folder, containing all those _binaries_ to meet the Angular Package Format specification.
You'll now be able to go ahead and `npm publish dist` your Angular library to the npm registry.

Do you like to publish more libraries?
Is your code living in a monorepo?
Create one `package.json` per npm package, run _ng-packagr_ for each!

## Features

* :gift: Implements [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview)
  * :checkered_flag: Bundles your library in FESM2015, FESM5, and UMD formats
  * :school_satchel: npm package can be consumed by [Angular CLI](https://github.com/angular/angular-cli), [Webpack](https://github.com/webpack/webpack), or [SystemJS](https://github.com/systemjs/systemjs)
  * :dancer: Creates type definitions (`.d.ts`)
  * :runner: Generates [Ahead-of-Time](https://angular.io/guide/aot-compiler#why-do-aot-compilation) metadata (`.metadata.json`)
  * :trophy: Auto-discovers and bundles secondary entry points such as `@my/foo`, `@my/foo/testing`, `@my/foo/bar`
* :mag_right: Creates [scoped and non-scoped packages](https://docs.npmjs.com/misc/scope) for publishing to npm registry
* :surfer: Inlines Templates and Stylesheets
* :sparkles: CSS Features
  * :camel: Runs [SCSS](http://sass-lang.com/guide) preprocessor, supporting the [relative `~` import syntax](https://github.com/webpack-contrib/sass-loader#imports) and custom include paths
  * :snake: Runs [Stylus](http://stylus-lang.com) preprocessor, resolves relative paths relative to ng-package.json
  * :monkey: Adds vendor-specific prefixes w/ [autoprefixer](https://github.com/postcss/autoprefixer#autoprefixer-) and [browserslist](https://github.com/ai/browserslist#queries) &mdash; just tell your desired `.browserslistrc`
  * :tiger: Embed assets data w/ [postcss-url](https://github.com/postcss/postcss-url#inline)


## How to…
- [Copy Assets](docs/copy-assets.md)
- [Embed Assets in CSS](docs/embed-assets-css.md)
- [Managing Dependencies](docs/dependencies.md)
- [Change the Entry File of a Library](docs/entry-file.md)
- [Change Configuration Locations](docs/configuration-locations.md)
- [Override tsconfig](docs/override-tsconfig.md)
- [Add Style Include Paths](docs/style-include-paths.md)
- [Change ECMAScript Language Level](docs/language-level.md)
- [Package Secondary Entrypoints (sub packages)](docs/secondary-entrypoints.md)
- [Enable JSX Templates, Bridging the Gap Between Angular and React](docs/jsx.md)

## Advanced Use Cases

#### Examples and Tutorials

A great step-by-step [example of making an Angular CLI project with a library distributed separate from the app](https://github.com/jasonaden/angular-cli-lib-example), by Jason Aden

Nikolas LeBlanc wrote a tutorial on [building an Angular 4 Component Library with the Angular CLI and ng-packagr](https://medium.com/@ngl817/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e)

Here is a [demo repository showing ng-packagr and Angular CLI](https://github.com/ng-packagr/ng-packaged) in action.

What about [ng-packagr alongside Nx Workspace](https://github.com/ng-packagr/nx-packaged)? Well, they work well together!

#### Further user questions and issue-driven documentation

We keep track of user questions in GitHub's issue tracker and try to build a documentation from it.
[Explore issues w/ label documentation](https://github.com/ng-packagr/ng-packagr/issues?q=label%3Adocumentation%20).

#### Contributing to ng-packagr

[General contribution guidelines](./CONTRIBUTING.md)

If you like to submit a pull request, you'll find it helpful to take a look at the [initial design document where it all started](./docs/DESIGN.md).

To orchestrate the different tools, ng-packagr features a [custom transformation pipeline](docs/transformation-pipeline.md#a-transformation-pipeline). The transformation pipeline is built on top of RxJS and Angular Dependency Injection concepts.

## Knowledge

[Angular Package Format v9.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview), design document at Google Docs

Packaging Angular Libraries - Jason Aden at Angular Mountain View Meetup ([Jan 2018, 45min talk](https://www.youtube.com/watch?v=QfvwQEJVOig&t=3612s))

Create and publish Angular libs like a Pro - Juri Strumpflohner at NG-BE ([Dec 2017, 30min talk](https://youtu.be/K4YMmwxGKjY))

[![Juri Strumpflohner - Create and publish Angular libs like a Pro](https://img.youtube.com/vi/K4YMmwxGKjY/0.jpg)](https://youtu.be/K4YMmwxGKjY)

Packaging Angular - Jason Aden at ng-conf 2017 ([28min talk](https://youtu.be/unICbsPGFIA))

[![Packaging Angular - Jason Aden](https://img.youtube.com/vi/unICbsPGFIA/0.jpg)](https://youtu.be/unICbsPGFIA)


Create and publish Angular libs like a Pro - Juri Strumpflohner at ngVikings, this time demoing building Angular libraries with ng-packagr, with NX as well as Bazel ([March 2018, 30min talk](https://youtu.be/Tw8TCgeqotg))

[![Juri Strumpflohner - Create & Publish Angular Libs like a PRO at ngVikings](https://img.youtube.com/vi/Tw8TCgeqotg/0.jpg)](https://youtu.be/Tw8TCgeqotg)
