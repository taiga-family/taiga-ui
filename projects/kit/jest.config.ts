import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    collectCoverageFrom: [`<rootDir>/projects/kit/**/*.ts`],
    coverageDirectory: `<rootDir>/coverage/kit`,
    testMatch: [`<rootDir>/projects/kit/**/*.spec.ts`],
};

export default config;
