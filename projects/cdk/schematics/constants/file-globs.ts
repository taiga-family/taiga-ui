const EXCLUDE_DIRECTORIES = ['scripts', 'dist', 'node_modules'].join('|');
const EXCLUDE_FILE_PATTERNS = [
    `*__name@dasherize__*`, // schematics templates
    `*.d`, // typings
].join('|');

const FILTERED_PATHS = `!(${EXCLUDE_DIRECTORIES})/**/!(${EXCLUDE_FILE_PATTERNS})`;
export const ALL_TS_FILES = `${FILTERED_PATHS}.ts`;
export const ALL_FILES = `${FILTERED_PATHS}.{html,ts}`;
