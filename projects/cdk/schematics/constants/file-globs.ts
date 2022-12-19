import {Pattern} from 'ng-morph';

const EXCLUDE_DIRECTORIES = [
    // compiled
    `scripts`,
    `dist`,
    `node_modules`,
    `coverage`,
    `dll`,
    `tmp`,
    `__build__`,
    // hidden directories
    `.rpt2_cache`,
    `.husky`,
    `.vscode`,
    `.idea`,
    `.github`,
    `.gitlab`,
    `.devplatform`,
    `.angular`,
    `.tmp`,
    `.nx`,
].join(`|`);

const EXCLUDE_FILE_PATTERNS = [
    `*__name@dasherize__*`, // schematics templates
    `*.d`, // typings
].join(`|`);

export const ALL_TS_FILES: Pattern = [
    `!(${EXCLUDE_FILE_PATTERNS}).ts`,
    `!(${EXCLUDE_DIRECTORIES})/**/!(${EXCLUDE_FILE_PATTERNS}).ts`,
];
export const ALL_FILES: Pattern = [
    `!(${EXCLUDE_FILE_PATTERNS}).{html,ts,less,json}`,
    `!(${EXCLUDE_DIRECTORIES})/**/!(${EXCLUDE_FILE_PATTERNS}).{html,ts,less,json}`,
];
