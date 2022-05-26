interface TypeToRename {
    readonly from: string;
    readonly to: string;
    readonly moduleSpecifier?: string | string[];
}
export const TYPES_TO_RENAME: readonly TypeToRename[] = [
    {
        from: 'ButtonOptions',
        to: 'TuiButtonOptions',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'RadioOptions',
        to: 'TuiRadioOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'CodeEditor',
        to: 'TuiCodeEditor',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
];
