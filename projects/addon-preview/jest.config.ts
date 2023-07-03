import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/addon-preview`,
    testMatch: [`<rootDir>/projects/addon-preview/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/addon-preview/**/*.ts`],
};

export default config;
