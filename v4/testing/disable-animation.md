# Disable animation

During integration testing you can face with problem of flaky tests caused by animation. It is especially
crucial if you are writing screenshot tests. For example, you want to make screenshot of dialog content: you
click button which opens dialog and make screenshot. Sometimes screenshots can be made too early (before dialog
fully opens) and test fails.

To avoid this
**we recommend to toggle all animation off while integration test works.**

`@taiga-ui/cdk`
used
``

token which disables all animations for taiga-ui components. That token based on
`prefers-reduced-motion`
. The prefers-reduced-motion CSS media feature is used to detect if a user has enabled a setting on their device
to minimize the amount of non-essential motion.. The setting is used to convey to the browser on the device that
the user prefers an interface that removes, reduces, or replaces motion-based animations.

```ts
import {defineConfig} from 'cypress';

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */

        if (browser.name === `chrome`) {
          launchOptions.args.push(`--force-prefers-reduced-motion`);
        }
      });
    },
  },
});
```

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
