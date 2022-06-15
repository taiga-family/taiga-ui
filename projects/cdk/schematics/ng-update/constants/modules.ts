interface RemovedModule {
    readonly name: string;
    readonly moduleSpecifier: string;
}

export const REMOVED_MODULES: readonly RemovedModule[] = [
    {name: 'TuiResizableColumnModule', moduleSpecifier: '@taiga-ui/addon-table'},
];
