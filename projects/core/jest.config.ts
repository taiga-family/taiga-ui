import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/core/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/core`,
    testMatch: [`<rootDir>/projects/core/**/*.spec.ts`],
};

export default config;
