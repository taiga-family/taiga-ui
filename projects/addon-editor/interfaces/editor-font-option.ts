// @bad TODO: Make customizable
export interface TuiEditorFontOption {
    size: string;
    px: number;
    name: string;
    family?: string;
    weight?: string;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    ngClass?: Record<string, any> | Set<string> | string[] | string;
}
