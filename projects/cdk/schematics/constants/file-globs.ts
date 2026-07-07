import {type Pattern} from 'ng-morph';

export const EXCLUDE_DIRECTORIES = [
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
] as const;

export const EXCLUDE_FILE_PATTERNS = [
    '*__name@dasherize__*',
    '*__name@camelize__*', // schematics templates
    '*__name@underscore__*',
    '*.d',
] as const;

const STYLE_EXTENSIONS = '{less,sass,scss,css}';
const ALL_EXTENSIONS = '{html,ts,less,sass,scss,css,json}';

const EXCLUDE_DIRECTORY_PATTERNS = EXCLUDE_DIRECTORIES.map(
    (directory) => `!**/${directory}/**`,
);

const excludeFilePatterns = (extensions: string): string[] =>
    EXCLUDE_FILE_PATTERNS.map((filePattern) => `!**/${filePattern}.${extensions}`);

export const ALL_STYLE_FILES: Pattern = [
    `**/*.${STYLE_EXTENSIONS}`,
    ...EXCLUDE_DIRECTORY_PATTERNS,
    ...excludeFilePatterns(STYLE_EXTENSIONS),
];

export const ALL_TS_FILES: Pattern = [
    '**/*.ts',
    ...EXCLUDE_DIRECTORY_PATTERNS,
    ...excludeFilePatterns('ts'),
];

export const ALL_FILES: Pattern = [
    `**/*.${ALL_EXTENSIONS}`,
    ...EXCLUDE_DIRECTORY_PATTERNS,
    ...excludeFilePatterns(ALL_EXTENSIONS),
];

export const PROJECT_JSON_FILES: Pattern = [
    'project.json',
    'angular.json',
    '**/project.json',
    '**/angular.json',
    ...EXCLUDE_DIRECTORY_PATTERNS,
];
