const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--force-device-scale-factor=1');
        }

        return launchOptions;
    });
};
