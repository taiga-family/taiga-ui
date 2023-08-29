import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/addon-charts/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/addon-charts`,
    testMatch: [`<rootDir>/projects/addon-charts/**/*.spec.ts`],
};

export default config;
