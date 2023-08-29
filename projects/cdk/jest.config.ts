import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/cdk/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/cdk`,
    testMatch: [`<rootDir>/projects/cdk/**/*.spec.ts`],
};

export default config;
