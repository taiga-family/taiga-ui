import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/layout`,
    testMatch: [`<rootDir>/projects/layout/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/layout/**/*.ts`],
};

export default config;
