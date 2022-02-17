const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');
const {viewportWidth, viewportHeight} = require('./../../cypress.json');

module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--force-device-scale-factor=1');
            launchOptions.args.push('--start-fullscreen');
            launchOptions.args.push('--high-dpi-support=1');
        }

        if (browser.isHeadless) {
            launchOptions.args.push(`--window-size=${viewportWidth},${viewportHeight}`);
        }

        return launchOptions;
    });
};
