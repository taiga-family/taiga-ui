// don't change import to `@taiga-ui/testing/cypress` until merging of this PR
// https://github.com/jaredpalmer/cypress-image-snapshot/pull/250
import {tuiAddSnapshotPlugin} from '@taiga-ui/testing/cypress/snapshot/plugin';

import {viewportHeight, viewportWidth} from '../../cypress.config';

export default async (
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): Promise<void> => {
    await tuiAddSnapshotPlugin(on, config, {
        newSnapshotMarkFn: oldFileName => `==new==${oldFileName}`,
        newSnapshotMarkEnabled: config.baseUrl === 'https://taiga-ui.dev/next/',
    });

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push(`--window-size=${viewportWidth},${viewportHeight}`);
            launchOptions.args.push('--force-device-scale-factor=2');
            launchOptions.args.push('--high-dpi-support=1');
            launchOptions.args.push('--force-color-profile=srgb');
            launchOptions.args.push('--disable-dev-shm-usage');
            launchOptions.args.push('--disable-gpu');
            launchOptions.args.push('--incognito');
        }

        return launchOptions;
    });
};
