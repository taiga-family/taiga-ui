import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/addon-tablebars/**/*.ts`],
    coverageDirectory: `<rootDir>coverage/addon-tablebars`,
    testMatch: [`<rootDir>/projects/addon-tablebars/**/*.spec.ts`],
};

export default config;
