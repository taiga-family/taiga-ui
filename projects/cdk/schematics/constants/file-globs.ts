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
];

const EXCLUDE_DIRECTORIES_PATTERN = EXCLUDE_DIRECTORIES.join('|');

const EXCLUDE_FILE_PATTERNS = [
    '*__name@dasherize__*',
    '*__name@camelize__*', // schematics templates
    '*__name@underscore__*',
    '*.d', // typings
].join('|');

export const ALL_STYLE_FILES: Pattern = [
    `!(${EXCLUDE_FILE_PATTERNS}).{less,sass,scss,css}`,
    `!(${EXCLUDE_DIRECTORIES_PATTERN})/**/!(${EXCLUDE_FILE_PATTERNS}).{less,sass,scss,css}`,
];

export const ALL_TS_FILES: Pattern = [
    `!(${EXCLUDE_FILE_PATTERNS}).ts`,
    `!(${EXCLUDE_DIRECTORIES_PATTERN})/**/!(${EXCLUDE_FILE_PATTERNS}).ts`,
];
export const ALL_FILES: Pattern = [
    `!(${EXCLUDE_FILE_PATTERNS}).{html,ts,less,sass,scss,css,json}`,
    `!(${EXCLUDE_DIRECTORIES_PATTERN})/**/!(${EXCLUDE_FILE_PATTERNS}).{html,ts,less,sass,scss,css,json}`,
];

export const PROJECT_JSON_FILES: Pattern = [
    'project.json',
    'angular.json',
    `!(${EXCLUDE_DIRECTORIES_PATTERN})/**/project.json`,
    `!(${EXCLUDE_DIRECTORIES_PATTERN})/**/angular.json`,
];

export const IGNORE_PATTERNS = [
    ...EXCLUDE_DIRECTORIES.map((dir) => `**/${dir}/**`),
    '**/.git/**',
    '**/build/**',
    '**/.cache/**',
    '**/temp/**',
    '**/*.log',
    '*.log',
];
