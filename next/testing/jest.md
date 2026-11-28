# Jest

Jest runs in a Node.js environment, which means that global objects like window, document, and navigator
which are present in a real web browser, are unavailable. This instructions ensures that Taiga UI components
can run correctly in Jest.

Taiga UI is designed to be SSR-safe, and we use abstractions provided by
`@ng-web-apis/common`
to avoid direct access to browser globals such as
[window](https://github.com/taiga-family/ng-web-apis/blob/main/libs/common/src/tokens/window.ts#L4)
or
[navigator.](https://github.com/taiga-family/ng-web-apis/blob/main/libs/common/src/tokens/navigator.ts#L6)

## Installation

```bash
$ npm install @taiga-ui/jest-config --save-dev
```

Most browser APIs do not exist under Node.js, so you need to have them mocked to prevent runtime errors such
as
`ReferenceError: IntersectionObserver is not defined`

To simplify this, we provide ready-to-use
[mocks.](https://github.com/taiga-family/toolkit/blob/main/projects/jest-config/polyfill.ts)

## Configuration

By default, we provide a preconfigured setup that you only need to connect to your project.

```ts
import type {Config} from 'jest';

const config: Config = {
  preset: '@taiga-ui/jest-config',
};

export default config;
```

## Manual setup

```ts
import type {Config} from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};

export default config;
```

```ts
import '@taiga-ui/jest-config/polyfill'; // included setupZoneTestEnv

// make custom mocks
(window as any).AnimationEvent = {};
(window as any).TransitionEvent = {};
(window as any).DragEvent = class {};
// ...
```

If your project already has Jest configured and uses a custom setup-jest.ts, you only need to include our
[mocks.](https://github.com/taiga-family/toolkit/blob/main/projects/jest-config/polyfill.ts)
