import {type Pattern} from 'ng-morph';

const EXCLUDE_DIRECTORIES = [
    'e2e',
    // compiled
    'scripts',
    'dist',
    'node_modules',
    'coverage',
    'dll',
    'tmp',
    '__build__',
    'allure-results',
    // hidden directories
    '.rpt2_cache',
    '.husky',
    '.vscode',
    '.idea',
    '.github',
    '.gitlab',
    '.devplatform',
    '.angular',
    '.tmp',
    '.nx',
].join('|');

const EXCLUDE_FILE_PATTERNS = [
    '*__name@dasherize__*',
    '*__name@camelize__*', // schematics templates
    '*__name@underscore__*',
    '*.d', // typings
].join('|');

export const ALL_STYLE_FILES = '**/**.{less,sass,scss,css}';

export const ALL_TS_FILES: Pattern = [
    `!(${EXCLUDE_FILE_PATTERNS}).ts`,
    `!(${EXCLUDE_DIRECTORIES})/**/!(${EXCLUDE_FILE_PATTERNS}).ts`,
];
export const ALL_FILES: Pattern = [
    `!(${EXCLUDE_FILE_PATTERNS}).{html,ts,less,sass,scss,css,json}`,
    `!(${EXCLUDE_DIRECTORIES})/**/!(${EXCLUDE_FILE_PATTERNS}).{html,ts,less,sass,scss,css,json}`,
];
