import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/addon-commerce/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/addon-commerce`,
    testMatch: [`<rootDir>/projects/addon-commerce/**/*.spec.ts`],
};

export default config;
