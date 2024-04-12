import {nxComponentTestingPreset} from '@nx/angular/plugins/component-testing';
import {defineConfig} from 'cypress';

const preset = nxComponentTestingPreset(__filename);

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
            options: {
                ...preset.devServer.options,
                projectConfig: {
                    ...preset.devServer.options.projectConfig,
                    buildOptions: {
                        ...preset.devServer.options.projectConfig.buildOptions,
                        tsConfig: './tsconfig.json',
                        assets: [
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
                        baseHref: './',
                        styles: [
                            'projects/demo/src/styles/normalize.less',
                            'projects/demo/src/styles/styles.less',
                            'projects/demo/src/styles/doc-global.style.less',
                        ],
                    },
                },
            },
        },
        supportFile: 'src/support/component.ts',
        indexHtmlFile: 'src/support/component-index.html',
        specPattern: 'src/tests/**/*.cy.ts',
        experimentalSingleTabRunMode: true,
    },
});
