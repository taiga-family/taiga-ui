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
