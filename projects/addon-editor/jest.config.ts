import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/addon-editor`,
    testMatch: [`<rootDir>/projects/addon-editor/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/addon-editor/**/*.ts`],
};

export default config;
