# History

## 0.4.19

- Updated request package

## 0.4.18

- Fixed package-lock.json bug

## 0.4.17

- Default to `https` instead of `http` when submitting data to Google Analytics
- Switched from custom debugger to [debug](https://www.npmjs.com/package/debug) module

Deprecated:
- `.debug()` is now deprecated in favor of setting the DEBUG environment variable: `DEBUG=universal-analytics`

## 0.4.16

- Removed async, underscore dependencies

## 0.4.15 / 2017-08-10

- Fixed dependencies

## 0.4.14 / 2017-08-07

- Updated AcceptableParams.md
- Updated .travis.yml to test Node.js up to 8
- Updated package.json to be more specific about Sinon

## 0.4.13 / 2017-03-29

- Added `screenview` method
- Updated Readme

## 0.4.12 / 2017-03-16

- Fix `pageview` key mappings

## 0.4.11 / 2017-03-14

- Updated UA#event to translate parameters before merging with persisted params
- Added parameter translation to all other tracking calls

## 0.4.10 / 2017-03-06

- Added content groups as acceptable params

## 0.4.9 / 2017-02-17

- Readme update

## 0.4.8 / 2016-11-23

- Added support for providing request options

## 0.4.7 / 2016-11-23

- Updated uuid module to 3.0.0

## 0.4.5 / 2016-09-14

- Fixed bug caused by different should.js version

## 0.4.4 / 2016-09-14

- Fixed bug in #set() method

## 0.4.3 / 2016-09-14

- Added #set() method for persistent parameters

## 0.4.2 / 2016-07-22

- Added batch requests

## 0.3.11 / 2016-03-16

- Added requestOptions to allow custom modifications for the request call

## 0.3.10 / 2015-12-18

- Fixed typo in the error handler for events
- Translate event parameters before validation

## 0.3.9 / 2015-07-20

- Added possibility of overwrite the hostname of google analytics to HTTPS

## 0.3.7 / 2015-05-18

- Include data as application/x-www-form-urlencoded - allows 8kb of data instead of the 2kb from query string
- Fixes #25: Accepting Enhanced Ecommerce params (and newly added MP params) without warnings
- Accept document location instead of page path

## 0.3.5 / 2014-10-22

- Added parameter translation

## 0.3.4 / 2014-02-28

- Return number of requests sent to GA for send() callback

## 0.3.2 / 2014-01-09

- Fixed Travis build

## 0.3.1 / 2014-01-06

- Added option to disable strict CID enforcement

## 0.3 / 2013-09-09

- Added .middleware() and.createFromSession() methods for better session-based identification
- Allow custom http headers to be POSTed to UA

## 0.2.2 / 2013-04-16

- Updated repository URL

## 0.2.1 / 2013-04-08

- Fixed bug that caused (params, fn) signature of #exception and #timing to not work
- Updated documentation

## 0.2 / 2013-03-26

- Added Timing and Exceptions
- Fixed some invalid space characters

## 0.1 / 2013-02-11

- Initial version
