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
        newSnapshotMarkEnabled: config.baseUrl === 'http://localhost:3333/',
    });

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push(
                `--window-size=${viewportWidth},${viewportHeight}`,
                '--force-device-scale-factor=2',
                '--high-dpi-support=1',
                '--force-color-profile=srgb',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--incognito',
            );
        }

        return launchOptions;
    });
};
