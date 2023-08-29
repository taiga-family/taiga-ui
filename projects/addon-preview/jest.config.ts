import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/addon-preview/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/addon-preview`,
    testMatch: [`<rootDir>/projects/addon-preview/**/*.spec.ts`],
};

export default config;
