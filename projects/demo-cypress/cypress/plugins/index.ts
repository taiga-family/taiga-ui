import {
    TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT,
    TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH,
} from '@demo-cypress/cypress.options';
import {tuiAddSnapshotPlugin} from '@taiga-ui/testing/cypress/snapshot/plugin';
// don't change import to `@taiga-ui/testing/cypress` until merging of this PR
// https://github.com/jaredpalmer/cypress-image-snapshot/pull/250

export default async (
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): Promise<void> => {
    await tuiAddSnapshotPlugin(on, config, {
        newSnapshotMarkFn: oldFileName => `==new==${oldFileName}`,
        newSnapshotMarkEnabled: config.baseUrl === `http://localhost:3333/`,
    });

    on(`before:browser:launch`, (browser, launchOptions) => {
        if (browser.name === `chrome`) {
            launchOptions.args.push(
                `--font-render-hinting=none`, // prevent inconsistent text rendering in headless mode
                `--window-size=${TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH},${TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT}`,
                `--force-device-scale-factor=2`,
                `--high-dpi-support=1`,
                `--force-color-profile=srgb`,
                `--disable-dev-shm-usage`,
                `--disable-gpu`,
                `--incognito`,
            );
        }

        return launchOptions;
    });
};
