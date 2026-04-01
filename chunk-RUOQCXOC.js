import"./chunk-HU6DUUP4.js";var n=`\`\`\`ts
import {defineConfig} from 'cypress';

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        /* ... */

        if (browser.name === \`chrome\`) {
          launchOptions.args.push(\`--force-prefers-reduced-motion\`);
        }
      });
    },
  },
});
\`\`\`
`;export{n as default};
