# Jest

If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js
emulator.

Taiga UI uses
`@ng-web-apis/common`
to avoid accessing global variables like
`window`
or
`navigator`
directly. Which requires Server Side Rendering (SSR) with the help of its sister library
`@ng-web-apis/universal`
for Jest to run properly.

Otherwise, you're gonna face errors like
`ReferenceError: IntersectionObserver is not defined`

## Using `@angular-builders/jest` or `jest-preset-angular`

If you're using one of these libraries. You can follow the following steps :

- Install
`npm i @ng-web-apis/universal --save-dev`
(install it as a devDependency only if you will use it for Jest, otherwise install it as a regular
dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x.

- Add a
`setupFilesAfterEnv`
property to your
`jest.config.ts`
or
`package.json`
jest configuration (depending on where your configuration is) with the path to
`setup-jest.ts`
if you have not already.

```ts
export default {
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
};
```

or

```json
{
  "jest": {
    "setupFilesAfterEnv": ["<rootDir>/setup-jest.js"]
  }
}
```

- Create the file
`setup-jest.ts`
(wherever you want as long as it's at the path referenced above) if you have not already. For example here
at the root of the project.

- Add the following line to the
`setup-jest.ts`
:
`import '@taiga-ui/testing/setup-jest';`
.

```ts
import '@taiga-ui/testing/setup-jest';

// allows you to do runtime reflection on types
import 'reflect-metadata';

// make custom mocks
(window as any).AnimationEvent = {};
(window as any).TransitionEvent = {};
(window as any).DragEvent = class {};

// ...
```
