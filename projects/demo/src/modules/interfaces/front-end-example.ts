export const EXAMPLE_MAIN_FILE_NAME = {
    TS: 'TypeScript',
    LESS: 'LESS',
    HTML: 'HTML',
} as const;

export interface FrontEndExample {
    [EXAMPLE_MAIN_FILE_NAME.TS]?: string;
    [EXAMPLE_MAIN_FILE_NAME.HTML]?: string;
    [EXAMPLE_MAIN_FILE_NAME.LESS]?: string;
}
