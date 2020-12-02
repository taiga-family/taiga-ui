# Blocking Proxy [![Build Status](https://circleci.com/gh/angular/blocking-proxy.svg?style=shield)](https://circleci.com/gh/angular/blocking-proxy)

Blocking Proxy is a tool for adding functionality to WebDriver-based
tests.  It sits between your tests and the Selenium Server. For each 
WebDriver command, it runs a set of 'barriers' that will block 
forwarding the command to the Selenium server until some condition
is met.

Because it interacts with WebDriver at the network level, Blocking Proxy can be
used regardless of which language your tests are written in. See [the example](https://github.com/angular/blocking-proxy/blob/master/examples/README.md) 
for a demonstration of using Blocking Proxy with WebDriver tests written in Python.

Although Blocking Proxy can handle multiple WebDriver sessions, it can not yet handle
multiple concurrent clients. Thus, it's recommended to start a separate instance
for each test process.

# Usage

Blocking Proxy can be installed globally with `npm install -g blocking-proxy`.
You can also use it by cloning this repo and running these commands:

```
npm install
webdriver-manager update && webdriver-manager start (in another terminal)
node ./built/lib/bin.js --seleniumAddress http://localhost:4444/wd/hub
```

# Features

## Wait for Angular

When testing an Angular application, Blocking Proxy can block webdriver commands
until Angular's change detection is finished, and thus make your tests less flaky.

## Highlight Delay

If `--highlightDelay <delayMS>` is specified, Blocking Proxy will wait for 
the specified delay (in milliseconds) before executing click commands or sending 
keys. It will also highlight the element that is the target of the command.

Here's an example of highlight delay in action:

![Highlight Delay](http://i.giphy.com/jg7B2HHPIkwak.gif)

## WebDriver logging

When `--logDir <path>` is set, Blocking Proxy will create a readable log of 
WebDriver commands at the specified path. The log will look something like this:

```
20:08:14.830 |    834ms | 37f13c | NewSession
    {"browserName":"chrome"}
20:08:15.674 |      4ms | 37f13c | SetTimeouts
20:08:15.681 |    578ms | 37f13c | Go http://localhost:8081/ng1/#/interaction
20:08:16.300 |    438ms | 37f13c | FindElement
    Using css selector \'.invalid\'
    ERROR: no such element
```
Each line shows the command that was executed and how long it took. For some
commands, extra data or the response from WebDriver will be shown on following
lines.

# Development

## Formatting and lint

`gulp format` runs clang-format. `gulp lint` validates format and runs tslint.

## Running tests 

Unit tests live in `spec/unit` and can be run with `npm test`. Run `npm run test:auto` to automatically watch for changes and run unit tests.

## Running e2e tests

Start webdriver

    webdriver-manager update
    webdriver-manager start

in another terminal, start the testapp

    npm run testapp 

Start the proxy with 
  
    npm start

in yet another terminal, run the tests

    npm run test:e2e
