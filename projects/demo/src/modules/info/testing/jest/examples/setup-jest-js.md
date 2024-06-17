```js
import 'jest-preset-angular/setup-jest';

// allows you to do runtime reflection on types
import 'reflect-metadata';

// make custom mocks
window.AnimationEvent = {};
window.TransitionEvent = {};
window.DragEvent = class {};

// ...
```
