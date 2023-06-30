import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/addon-table`,
    collectCoverageFrom: [`<rootDir>/projects/addon-table/**/*.ts`],
    testMatch: [`<rootDir>/projects/addon-table/**/*.spec.ts`],
};

export default config;
