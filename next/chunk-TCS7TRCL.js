import"./chunk-HU6DUUP4.js";var i=`\`\`\`ts
import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  // ...
  use: {
    // ...
    contextOptions: {
      reducedMotion: \`reduce\`,
    },
  },
  expect: {
    toHaveScreenshot: {
      animations: \`disabled\`,
      caret: \`hide\`,
      scale: \`device\`,
    },
  },
});
\`\`\`
`;export{i as default};
