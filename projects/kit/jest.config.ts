import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/kit`,
    testMatch: [`<rootDir>/projects/kit/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/projects/kit/**/*.ts`],
};

export default config;
