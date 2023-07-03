import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverage: false,
    testMatch: [`<rootDir>/projects/icons/**/*.spec.ts`],
};

export default config;
