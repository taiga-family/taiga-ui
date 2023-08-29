import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/addon-table/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/addon-table`,
    testMatch: [`<rootDir>/projects/addon-table/**/*.spec.ts`],
};

export default config;
