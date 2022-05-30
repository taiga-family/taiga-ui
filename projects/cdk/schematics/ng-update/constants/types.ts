interface TypeToRename {
    readonly from: string;
    readonly to?: string;
    readonly moduleSpecifier?: string | string[];
}
export const TYPES_TO_RENAME: readonly TypeToRename[] = [
    {
        from: 'ButtonOptions',
        to: 'TuiButtonOptions',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'InputCountOptions',
        to: 'TuiInputCountOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'InputPasswordOptions',
        to: 'TuiInputPasswordOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'InputTimeOptions',
        to: 'TuiInputTimeOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'ToggleOptions',
        to: 'TuiToggleOptions',
        moduleSpecifier: ['@taiga-ui/cdk'],
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
    {
        from: 'WithDateMaskPipeConfig',
    },
    {
        from: 'TuiBreadCrumbsItem',
    },
];
