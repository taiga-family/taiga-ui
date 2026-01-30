```ts
import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  // ...
  use: {
    // ...
    contextOptions: {
      reducedMotion: `reduce`,
    },
  },
  expect: {
    toHaveScreenshot: {
      animations: `disabled`,
      caret: `hide`,
      scale: `device`,
    },
  },
});
```
