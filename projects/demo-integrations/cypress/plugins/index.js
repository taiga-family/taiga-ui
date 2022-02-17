const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
const {viewportWidth, viewportHeight} = require('./../../cypress.json');

module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push(`--window-size=${viewportWidth},${viewportHeight}`);

            /**
             * @note: don't reuse system cache between your local instance chrome and cypress chromium
             */
            launchOptions.args.push('--incognito');

            /**
             * @note:
             * By default, Docker runs a container with a /dev/shm shared memory space 64MB.
             * This is typically too small for Chrome and will cause Chrome to crash when rendering large pages.
             * To fix, run the container with docker run --shm-size=1gb to increase the size of /dev/shm.
             * Since Chrome 65, this is no longer necessary.
             * Instead, launch the browser with the --disable-dev-shm-usage flag:
             */
            launchOptions.args.push('--disable-dev-shm-usage');
        }

        if (browser.isHeadless) {
            /**
             * @note: For compare snapshots without loss of quality
             * these parameters are required for testing stability,
             */
            launchOptions.args.push('--force-device-scale-factor=2');
            launchOptions.args.push('--disable-gpu');
        }

        return launchOptions;
    });
};
