import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>coverage/addon-tablebars`,
    testMatch: [`<rootDir>/projects/addon-tablebars/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/addon-tablebars/**/*.ts`],
};

export default config;
