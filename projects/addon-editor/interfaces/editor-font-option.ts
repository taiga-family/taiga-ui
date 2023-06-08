// @bad TODO: Make customizable
export interface TuiEditorFontOption {
    /**
     * @deprecated
     * not used anywhere
     */
    size?: string;
    name: string;
    family?: string;
    weight?: string;
    ngClass?: Record<string, any> | Set<string> | string[] | string;
    ngStyle?: Record<string, any>;
    px?: number;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
