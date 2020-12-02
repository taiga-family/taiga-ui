# network-information-types

[![npm version](https://badge.fury.io/js/network-information-types.svg)](https://badge.fury.io/js/network-information-types)

Type definition for [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)

## Caveat

This is a temporary solution until TypeScript adds support for this API as built-in types. See https://github.com/Microsoft/TypeScript/issues/27186 .

## Usage

- Install Package via npm
- Edit your tsconfig.json
- Now you get `navigator.connection` with its type!

### Install

```shell
$ yarn add -D network-information-types
```

### tsconfig.json

`network-information-types` is a _ambient_ types that modify global `navigator` type, so **it MUST be added in `types`**.

Package names in `types` array are resolved with `typeRoots`. By default, `typesRoots` is just `./node_modules/@types`.
To resolve `network-information-types` package, add the relative path directly as below.

```json
{
  "compilerOptions": {
    ...
    "types": [
        "./node_modules/network-information-types"
    ]
  },
}
```

### Use the types

Now you can access `navigator.connection` property as `NetworkInformation` object.

`navigator.connection` and its properties are all optional because browser support for each is separated.
See https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation#Browser_compatibility .

```ts
// Example: http://wicg.github.io/netinfo/#example-1
if (navigator.connection) {
  // Get the connection type.
  const type = navigator.connection.type;

  // Get an upper bound on the downlink speed of the first network hop
  var max = navigator.connection.downlinkMax;

  const changeHandler = (e: Event) => {
    // Handle change to connection here.
  };

  // Register for event changes.
  navigator.connection.onchange = changeHandler;

  // Alternatively.
  navigator.connection.addEventListener('change', changeHandler);
}
```

## Author

Suguru Inatomi: https://github.com/lacolaco

- Twitter: https://twitter.com/laco2net

## License

MIT
