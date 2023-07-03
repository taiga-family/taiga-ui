import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/addon-doc`,
    collectCoverageFrom: [`<rootDir>/projects/addon-doc/**/*.ts`],
    testMatch: [`<rootDir>/projects/addon-doc/**/*.spec.ts`],
};

export default config;
