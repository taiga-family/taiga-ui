import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/addon-commerce`,
    testMatch: [`<rootDir>/projects/addon-commerce/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/addon-commerce/**/*.ts`],
};

export default config;
