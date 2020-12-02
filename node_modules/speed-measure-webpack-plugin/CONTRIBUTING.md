# Contributing

Contributors are welcome to help out with this repository! 😊

Please follow this guide when raising issues, and contributing to the SMP repository.

## Raising an Issue

If you're raising an issue with SMP being incompatible with a particular webpack config, plugin, or loader - then please include reproduction steps.

The ideal reproduction steps would be forking this repository, and adding a new [\_\_tests\_\_/setups](./__tests__/setups) test case.

## Raising a Pull Request

SMP uses [Prettier](https://github.com/prettier/prettier) for its code formatting.

If possible, please also include a new unit test (e.g. [utils.test.js](./utils.test.js)), or integration test (i.e. [\_\_tests\_\_/setups](./__tests__/setups)).

## Code Structure

SMP has 2 primary parts:

1. The [SMP class](./index.js) contains the `smp.wrap` instance method that bootstraps the whole wrapping sequence. This class also listens for basic timing events, and orchestrates the main timings.
2. The [`WrappedPlugin`](./WrappedPlugin) proxy that wraps each webpack plugin. This uses a `Proxy` to wrap everything to do with a plugin, feeding the timing information back to the SMP class.
