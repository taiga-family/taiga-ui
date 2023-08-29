import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/addon-doc/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/addon-doc`,
    testMatch: [`<rootDir>/projects/addon-doc/**/*.spec.ts`],
};

export default config;
