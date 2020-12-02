# tslint-teamcity-reporter

A TSLint formatter/reporter for use in TeamCity which groups by files using TeamCity Test Suite

**Note: v3.0.0 is completely rewritten to keep it more maintainable
(borrowing from [eslint-teamcity](https://github.com/andreogle/eslint-teamcity) and [tslint](https://github.com/palantir/tslint/) internal tests),
and will be a breaking change to your configuration and output.**

#### Changes

* From the CLI, the formatter can now be specified as `-t ./node_modules/tslint-teamcity-reporter/index.js`
* The lint errors reported as tests are now grouped by file
  * This means that on the top-level, you only see failed files, not individual errors
  * The individual errors are now displayed as error output for each file
  * This means that the 'failed test count' will drop significantly, please take into account in your overall metrics
  * If you liked the old approach better, please let me know in a ticket, and I can add it back as an option
* Warnings are now treated as such, will show up in the logs and at the bottom of a failed test

## Installation

```sh
yarn add tslint-teamcity-reporter
```

```sh
npm i -D tslint-teamcity-reporter
```

## Usage

Use it with:

#### TSLint CLI

```
tslint files/**/*.ts -t ./node_modules/tslint-teamcity-reporter/index.js
```

#### grunt-tslint

```js
module.exports = grunt => {
  grunt.loadNpmTasks('grunt-tslint');

  grunt.initConfig({
    tslint: {
      options: {
        configuration: './tslint.json',
        formatter: 'tslint-teamcity-reporter',
      },
      files: {
        src: ['**/*.ts'],
      },
    },
  });

  grunt.registerTask('default', ['tslint']);
};

```

#### gulp-tslint

```js
const gulp = require('gulp');
const tslint = require('gulp-tslint');

gulp.task('tslint', () =>
  gulp
    .src('**/*.ts')
    .pipe(
      tslint({
        configuration: './tslint.json',
        formatter: 'tslint-teamcity-reporter',
        formattersDirectory: 'anything-but-falsy', // passing a falsy value will resolve in `null` and throw an error in tslint
      }),
    )
    .pipe(tslint.report()),
);

gulp.task('default', ['tslint']);
```

### Configuration

There are several ways that you can configure tslint-teamcity.
You don't have to configure anything by default, you just have the option to if you would like.
Settings are looked for in the following priority:

#### 1. As a second argument
If you run tslint-teamcity-reporter by requiring it in your code, you can pass a second argument to the function:
```js
import { Formatter } from 'tslint-teamcity-reporter';

const formatter = new Formatter();
const options = {
  reporter: 'inspections',
  reportName: 'My TSLint Violations',
  errorStatisticsName: 'My TSLint Error Count',
  warningStatisticsName: 'My TSLint Warning Count',
};
console.log(formatter.format(tslintFailures, options));
```

#### 2. From your package.json
If you have a package.json file in the current directory, you can add an extra "tslint-teamcity-reporter" property to it:

```json
{
  "tslint-teamcity-reporter": {
    "reporter": "inspections",
    "report-name": "My TSLint Violations",
    "error-statistics-name": "My TSLint Error Count",
    "warning-statistics-name": "My TSLint Warning Count"
  }
}
```

#### 3. ENV variables

```sh
export TSLINT_TEAMCITY_REPORTER="inspections"
export TSLINT_TEAMCITY_REPORT_NAME="My Formatting Problems"
export TSLINT_TEAMCITY_ERROR_STATISTICS_NAME="My Error Count"
export TSLINT_TEAMCITY_WARNING_STATISTICS_NAME="My Warning Count"
```

You can also output your current settings to the log if you set:

```sh
export TSLINT_TEAMCITY_DISPLAY_CONFIG=true
```

#### Output type
By default, the output is displayed as tests on a TeamCity build (`"reporter": "errors"`). You can change it to be displayed as "Inspections" in a separate tab by setting the `"reporter": "inspections"` option.


## Building

In order to build tslint-teamcity-reporter, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/ThaNarie/tslint-teamcity-reporter.git
```

Change to the tslint-teamcity-reporter directory:
```sh
cd tslint-teamcity-reporter
```

Install dev dependencies:
```sh
yarn
```

Use one of the following main scripts:
```sh
yarn build            # build this project
yarn dev              # run compilers in watch mode, both for babel and typescript
yarn test             # run the unit tests incl coverage
yarn test:dev         # run the unit tests in watch mode
yarn lint             # run eslint and tslint on this project
```

When installing this module, it adds a pre-commit hook, that runs lint and prettier commands
before committing, so you can be sure that everything checks out.


## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## LICENSE

Thanks to [eslint-teamcity](https://github.com/andreogle/eslint-teamcity), [jshint-teamcity](https://github.com/hongymagic/jshint-teamcity) and [tslint](https://github.com/palantir/tslint/).

[MIT](./LICENSE) © Tha Narie


