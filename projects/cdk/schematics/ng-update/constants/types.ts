interface TypeToRename {
    from: string;
    to: string;
    moduleSpecifier?: string | string[];
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
];
