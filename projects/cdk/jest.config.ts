import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/cdk`,
    testMatch: [`<rootDir>/projects/cdk/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/cdk/**/*.ts`],
};

export default config;
