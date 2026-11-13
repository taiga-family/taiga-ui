# Server Side Rendering (SSR)

## Tokens

Taiga UI does not access global variables like
`window`
or
`navigator`
directly. Instead, we rely on DI tokens for simplicity of testing and cross-environment support.

A separate library called
`@ng-web-apis/common`
is dedicated solely to this purpose. It is a direct dependency and is installed with Taiga UI, you can find docs
[here](https://github.com/taiga-family/ng-web-apis/tree/main/libs/common/README.md)

## Fallback

For Server Side Rendering (SSR), a sister library
`@ng-web-apis/universal`
can be used. It has advanced mocks and tools to extract user agent and location info from server side requests.
If you want to use SSR with Taiga UI you need to install this package and follow instructions from
[README](https://github.com/taiga-family/ng-web-apis/tree/main/libs/universal/README.md)
. Note that this is also applicable to Jest which is a server side testing suite.

Taiga UI uses modern JavaScript with classes that might be not available in server side environment. To add
mocks for those classes you can also use
`@ng-web-apis/universal`
package (see
[this section](https://github.com/taiga-family/ng-web-apis/blob/main/libs/universal/README.md#mocks)
of README).
