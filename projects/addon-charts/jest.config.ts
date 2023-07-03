import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/addon-charts`,
    testMatch: [`<rootDir>/projects/addon-charts/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/addon-charts/**/*.ts`],
};

export default config;
