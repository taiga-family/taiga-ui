```ts
import '@taiga-ui/jest-config/polyfill'; // included setupZoneTestEnv

// make custom mocks
(window as any).AnimationEvent = {};
(window as any).TransitionEvent = {};
(window as any).DragEvent = class {};
// ...
```
