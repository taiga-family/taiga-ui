import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/addon-mobile`,
    collectCoverageFrom: [`<rootDir>/projects/addon-mobile/**/*.ts`],
    testMatch: [`<rootDir>/projects/addon-mobile/**/*.spec.ts`],
};

export default config;
