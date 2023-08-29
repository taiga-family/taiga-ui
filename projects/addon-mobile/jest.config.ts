import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/addon-mobile/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/addon-mobile`,
    testMatch: [`<rootDir>/projects/addon-mobile/**/*.spec.ts`],
};

export default config;
