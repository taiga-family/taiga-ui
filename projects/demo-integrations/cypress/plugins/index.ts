import {tuiAddSnapshotPlugin} from '@taiga-ui/testing/src/cypress/snapshot/plugin';

import {viewportHeight, viewportWidth} from './../../cypress.json';

export default (on: any, config: any): void => {
    tuiAddSnapshotPlugin(on, config, {
        newSnapshotMark: '==[new]==',
        newSnapshotMarkEnabled: config.baseUrl === 'https://taiga-ui.dev/next/',
    });
    on('before:browser:launch', (browser: any, launchOptions: any) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push(`--window-size=${viewportWidth},${viewportHeight}`);
            launchOptions.args.push('--force-device-scale-factor=2');
            launchOptions.args.push('--high-dpi-support=1');
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--incognito');
        }

        if (browser.isHeadless) {
            launchOptions.args.push('--disable-gpu');
        }

        return launchOptions;
    });
};
