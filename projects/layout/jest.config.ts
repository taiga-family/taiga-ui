import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/layout/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/layout`,
    testMatch: [`<rootDir>/projects/layout/**/*.spec.ts`],
};

export default config;
