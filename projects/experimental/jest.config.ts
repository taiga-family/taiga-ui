import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/experimental`,
    testMatch: [`<rootDir>/projects/experimental/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/experimental/**/*.ts`],
};

export default config;
