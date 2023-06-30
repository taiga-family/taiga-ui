import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/core`,
    testMatch: [`<rootDir>/projects/core/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/core/**/*.ts`],
};

export default config;
