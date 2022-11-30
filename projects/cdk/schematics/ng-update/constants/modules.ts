interface RemovedModule {
    readonly name: string;
    readonly moduleSpecifier: string;
}

export const REMOVED_MODULES: readonly RemovedModule[] = [
    {name: `TuiResizableColumnModule`, moduleSpecifier: `@taiga-ui/addon-table`},
    {name: `ScrollIntoViewModule`, moduleSpecifier: `@taiga-ui/addon-doc`},
    {name: `TuiPreviewModule`, moduleSpecifier: `@taiga-ui/proprietary-banking`},
    {name: `TuiDescribedByModule`, moduleSpecifier: `@taiga-ui/core`},
];
