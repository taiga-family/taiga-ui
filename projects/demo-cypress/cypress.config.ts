import {nxComponentTestingPreset} from '@nx/angular/plugins/component-testing';
import {defineConfig} from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

import webpackConfig from '../demo/webpack.config';

const preset = nxPreset();

export default defineConfig({
    video: false,
    fixturesFolder: 'src/fixtures',
    viewportWidth: 500,
    viewportHeight: 900,
    responseTimeout: 60000,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    component: {
        ...preset,
        devServer: {
            ...preset.devServer,
            webpackConfig: webpackConfig({}),
            options: {
                ...preset.devServer?.options,
                projectConfig: {
                    ...preset.devServer?.options?.projectConfig,
                    root: preset.devServer?.options?.projectConfig.root ?? '',
                    sourceRoot: preset.devServer?.options?.projectConfig.sourceRoot ?? '',
                    buildOptions: {
                        ...preset.devServer?.options?.projectConfig?.buildOptions,
                        buildLibsFromSource: false,
                        progress: false,
                        optimization: false,
                        verbose: false,
                        tsConfig: './tsconfig.json',
                        assets: [
                            {
                                glob: '**/*',
                                input: 'projects/demo-cypress/src/fixtures/',
                                output: './assets/',
                            },
                            {
                                glob: '**/*',
                                input: 'projects/demo/src/assets/',
                                output: './assets/',
                            },
                            {
                                glob: '**/*',
                                input: 'projects/icons/src',
                                output: 'assets/taiga-ui/icons',
                            },
                        ],
                        baseHref: '/',
                        styles: ['projects/demo/src/styles/styles.less'],
                    },
                },
            },
        },
        supportFile: 'src/support/component.ts',
        indexHtmlFile: 'src/support/component-index.html',
        specPattern: 'src/tests/**/*.cy.ts',
        experimentalSingleTabRunMode: true,
        justInTimeCompile: false,
        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config);

            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.name === 'chrome') {
                    launchOptions.args.push(
                        '--font-render-hinting=none', // prevent inconsistent text rendering in headless mode
                        '--force-device-scale-factor=2', // force screen to be retina
                        '--high-dpi-support=1',
                        '--force-prefers-reduced-motion',
                        '--force-color-profile=srgb',
                        '--disable-dev-shm-usage',
                        '--disable-gpu',
                        '--incognito',
                    );
                }

                return launchOptions;
            });

            return config;
        },
    },
});

/**
 * If we run that file using `npx knip`, we get an error.
 *
 * This is likely due to not running via nx. i.e. 'nx component-test my-project'.
 * Please open an issue if this error persists.
 * Error: [readCachedProjectGraph] ERROR: No cached ProjectGraph is available
 */
interface Preset {
    devServer: Cypress.DevServerConfigOptions & {
        bundler: 'webpack';
        framework: 'angular';
        options?: {
            projectConfig: Cypress.AngularDevServerProjectConfig;
        };
    };
}

function nxPreset(): Preset {
    try {
        return nxComponentTestingPreset(__filename);
    } catch {
        return {} as unknown as Preset;
    }
}
