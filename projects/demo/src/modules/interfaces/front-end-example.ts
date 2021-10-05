export const EXAMPLE_PRIMARY_FILE_NAME = {
    TS: 'TypeScript',
    LESS: 'LESS',
    HTML: 'HTML',
} as const;

export interface FrontEndExample {
    [EXAMPLE_PRIMARY_FILE_NAME.TS]?: string;
    [EXAMPLE_PRIMARY_FILE_NAME.HTML]?: string;
    [EXAMPLE_PRIMARY_FILE_NAME.LESS]?: string;
}
