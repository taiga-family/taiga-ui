import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverage: false,
    testMatch: [`<rootDir>/projects/testing/**/*.spec.ts`],
};

export default config;
