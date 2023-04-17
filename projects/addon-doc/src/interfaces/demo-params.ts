export interface TuiDemoParams {
    tuiMode?: 'onDark' | 'onLight' | null;
    updateOn?: 'blur' | 'change' | 'submit';
    sandboxOpaque?: boolean;
    sandboxExpanded?: boolean;
    sandboxWidth?: number;
}
