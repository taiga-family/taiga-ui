import {type KnipConfig} from 'knip';

const config: KnipConfig = {
    ignoreDependencies: [
        '@jest/.+',
        '@types/.+',
        '@taiga-ui/.+',
        '@ng-web-apis/.+',
        '@maskito/.+',
        'libphonenumber-js',
        'ts-morph',
        'minimatch',
        'jest',
    ],
    ignoreUnresolved: ['ng-dev-mode'],
    ignoreBinaries: [
        'awk',
        'eslint',
        'ifconfig',
        'prettier',
        'playwright',
        'mkcert',
        'commitlint',
        'lint-staged',
        'extract-changelog-release',
    ],
    // TODO: investigate why some files are broken
    ignore: [
        '**/app/pages.ts',
        '**/*.spec.ts',
        '**/package.json',
        '**/scripts/**/*.ts',
        '**/*.config.{ts,js}',
        '**/*.options.{ts,js}',
        '**/examples/*/*.ts',
        '**/demo/**/server.ts',
        '**/used-icons.ts',
        '**/demo/src/emulate/*.ts',
        '**/demo/**/main.server.ts',
        '**/versions.constants.ts',
        '**/tokens/common-icons.ts',
        '**/app/logo/logo.component.ts',
        '**/app/server-error-handler.ts',
        '**/app/getting-started/index.ts',
        '**/testing/visual-testing/**/*.ts',
        '**/projects/cdk/date-time/test/helpers.ts',
        '**/demo/src/pages/components/icons-group/*.ts',
        '**/demo/src/pages/components/data-list/examples/4/custom-list/index.ts',
    ],
    workspaces: {
        'projects/demo-playwright': {
            entry: ['utils/**/*.ts'],
            ignore: ['**/performance/dropdown/utils.ts'],
        },
    },
};

export default config;
