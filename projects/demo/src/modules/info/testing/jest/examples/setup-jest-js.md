```js
import 'jest-preset-angular/setup-jest';
import '@ng-web-apis/universal/mocks';

// allows you to do runtime reflection on types
import 'reflect-metadata';

// make custom mocks
window.AnimationEvent = {};
window.TransitionEvent = {};
window.DragEvent = class {};
window.IntersectionObserver = function () {
  this.observe = () => {};
  this.unobserve = () => {};
  this.disconnect = () => {};
};
// ...
```
