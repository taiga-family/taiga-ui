# Protractor support topics

## Supported browsers

### Tests with Protractor test suite (v 4.0.13)

The following are the supported browsers / drivers based on running the
Protractor test suite. Since the test suite checks only firefox and chrome,
these are the only browsers reported.

### Current supported browsers / drivers

| selenium standalone | firefox | chromedriver | chrome |
| ------------------- | ------- | ------------ | ------ |
| 2.53.1              | 47.0.1  | 2.26         | 54     |


### Investigated

| selenium standalone | firefox 47.0.1 | firefox 49.0.1 |
| ------------------- | -------------- | -------------- |
| 2.53.1              | pass           | fail           |
| 3.0.0               | fail           | fail           |


## Driver providers

There are a couple cases where Protractor launches downloaded binaries
(from webdriver-manager) without specifying which version to use:

- local driver providers - when no `seleniumAddress`, `directConnect`, saucelabs
  or browser stack configuration is set
- direct connect - when setting `directConnect` to true

Protractor knows which downloaded binaries to use based on the
`update-config.json`. The `update-config.json` is written during the `update`
command and provides the path to the current downloaded version and a list of
all the binaries previously downloaded.

During the launch of either local driver provider or direct connect, Protractor
will launch the last downloaded binary.
