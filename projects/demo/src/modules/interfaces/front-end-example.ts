/**
 * @deprecated: use TUI_EXAMPLE_PRIMARY_FILE_NAME instead
 */
export const EXAMPLE_PRIMARY_FILE_NAME = {
    TS: 'TypeScript',
    LESS: 'LESS',
    HTML: 'HTML',
} as const;

/**
 * @deprecated: use TuiDocExample instead
 */
export interface FrontEndExample {
    [EXAMPLE_PRIMARY_FILE_NAME.TS]?: string;
    [EXAMPLE_PRIMARY_FILE_NAME.HTML]?: string;
    [EXAMPLE_PRIMARY_FILE_NAME.LESS]?: string;
}
