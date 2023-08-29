import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/experimental/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/experimental`,
    testMatch: [`<rootDir>/projects/experimental/**/*.spec.ts`],
};

export default config;
