import {type KnipConfig} from 'knip';

const config: KnipConfig = {
    ignoreDependencies: [
        '@types/.+',
        '@taiga-ui/.+',
        '@ng-web-apis/.+',
        '@maskito/.+',
        'libphonenumber-js',
        'ts-morph',
        'jest',
    ],
    ignoreUnresolved: ['ng-dev-mode'],
    ignoreBinaries: [
        'eslint',
        'prettier',
        'playwright',
        'mkcert',
        'commitlint',
        'extract-changelog-release',
    ],
    // TODO: investigate why some files are broken
    ignore: [
        '**/polyfills.ts',
        '**/app/pages.ts',
        '**/*.spec.ts',
        '**/package.json',
        '**/scripts/**/*.ts',
        '**/*.config.{ts,js}',
        '**/*.options.{ts,js}',
        '**/examples/*/*.ts',
        '**/tokens/icons.ts',
        '**/demo/**/server.ts',
        '**/used-icons.ts',
        '**/demo/src/emulate/*.ts',
        '**/demo/**/main.server.ts',
        '**/versions.constants.ts',
        '**/tokens/icon-resolver.ts',
        '**/tokens/common-icons.ts',
        '**/app/logo/logo.component.ts',
        '**/app/server-error-handler.ts',
        '**/app/getting-started/index.ts',
        '**/testing/visual-testing/**/*.ts',
        '**/projects/testing/setup-jest/index.ts',
        '**/projects/cdk/date-time/test/helpers.ts',
        '**/demo/src/modules/components/icons-group/*.ts',
        '**/demo/src/modules/components/data-list/examples/4/custom-list/index.ts',
        '**/demo/src/modules/components/dialog-legacy/**/*.ts',
    ],
    workspaces: {
        'projects/demo-playwright': {
            entry: ['utils/**/*.ts'],
            ignore: ['**/performance/dropdown/utils.ts'],
        },
    },
};

export default config;
