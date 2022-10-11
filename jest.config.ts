import {Config} from 'jest';
import {resolve} from 'path';
import {pathsToModuleNameMapper} from 'ts-jest';

process.env.TZ = `Europe/Moscow`;
process.env.FORCE_COLOR = `true`;
process.env.TS_JEST_DISABLE_VER_CHECKER = `true`;

const {compilerOptions} = require(resolve(`./tsconfig.json`));
const maxParallel = require(`os`).cpus().length / 2;

module.exports = {
    rootDir: __dirname,

    /**
     * The preset sets up the environment and is very opinionated
     * and based on what we found to be useful at Facebook.
     * All of the configuration options can be overwritten
     * just as they can be customized when no preset is used.
     */
    preset: `jest-preset-angular`,

    /**
     * A set of global variables that need
     * to be available in all test environments.
     */
    globals: {
        'ts-jest': {
            tsconfig: resolve(`./tsconfig.spec.json`),
            isolatedModules: true,
        },
    },

    /**
     * Jest will run .mjs and .js files with nearest package.json's type
     * field set to module as ECMAScript Modules. If you have any other files
     * that should run with native ESM, you need to specify their file extension here.
     */
    extensionsToTreatAsEsm: [`.ts`],

    /**
     * A list of paths to modules that run some code to configure
     * or to set up the testing framework before each test.
     */
    setupFilesAfterEnv: [`<rootDir>/setup-jest.ts`],

    /**
     * A map from regular expressions to paths to transformers.
     */
    transform: {'^.+\\.(ts|js|mjs|html|svg)$': `jest-preset-angular`},

    /**
     * The glob patterns Jest uses to detect test files.
     */
    testMatch: [`<rootDir>/projects/**/*.spec.ts`],

    /**
     * A single or array of regexp pattern strings that are tested
     * against all tests paths before executing the test.
     */
    testPathIgnorePatterns: [`/demo-integrations/`, `/node_modules/`, `/schematics/`],

    /**
     * The directory where Jest should output its coverage files.
     */
    coverageDirectory: `<rootDir>/coverage`,

    /**
     * An array of glob patterns indicating a set of files for which coverage
     * information should be collected. If a file matches the specified glob pattern,
     * coverage information will be collected for it even if no tests exist for this file and
     * it's never required in the test suite.
     */
    collectCoverageFrom: [
        `<rootDir>/projects/**/*.ts`,
        `!<rootDir>/projects/**/*.spec.ts`,
        `!<rootDir>/projects/**/schematics/*.ts`,
        `!<rootDir>/projects/**/load-assets.ts`, // @note: cannot resolve import.meta.url
    ],

    /**
     * A map from regular expressions to module names that allow to stub out resources,
     * like images or styles with a single module. Modules that are mapped to an alias are
     * un mocked by default, regardless of whether auto mocking is enabled or not.
     * Use <rootDir> string token to refer to rootDir value if you want to use file paths.
     * Additionally, you can substitute captured regex groups using numbered back references.
     */
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: `<rootDir>/${compilerOptions.baseUrl}/`
            .replace(/\.\//g, `/`)
            .replace(/\/\/+/g, `/`),
    }),

    /**
     * An array of regexp pattern strings that are matched against all module paths before those
     * paths are to be considered 'visible' to the module loader. If a given module's path
     * matches any of the patterns, it will not be require()-able in the test environment.
     */
    modulePathIgnorePatterns: [`.cache`, `dist`, `<rootDir>/dist/`],

    /**
     * A list of reporter names that Jest uses when writing coverage reports.
     * Any istanbul reporter can be used.
     */
    coverageReporters: [`text`, `lcov`, `clover`],

    /**
     * The directory where Jest should store its cached dependency information.
     */
    cacheDirectory: `<rootDir>/node_modules/.cache/jest`,
    /**
     * A number limiting the number of tests that are allowed to run at the same time when
     * using test.concurrent. any test above this limit will be queued and executed once
     * a slot is released.
     */
    maxConcurrency: maxParallel,

    /**
     * Specifies the maximum number of workers the worker-pool will spawn for running tests.
     * In single run mode, this defaults to the number of the cores available
     * on your machine minus one for the main thread.
     */
    maxWorkers: maxParallel,

    /**
     * Display individual test results with the test suite hierarchy.
     */
    verbose: true,

    /**
     * By default, Jest runs all tests and produces all errors into the console upon completion.
     * The bail config option can be used here to have Jest stop running tests after n failures.
     * Setting bail to true is the same as setting bail to 1
     */
    bail: 1,

    /**
     * Run tests with specified reporters
     */
    reporters: [`default`],
} as Config;
