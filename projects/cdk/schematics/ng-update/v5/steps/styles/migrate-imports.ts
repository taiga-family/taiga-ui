// Only `basic`, `markup` and `taiga-ui-global` were dropped from `@taiga-ui/styles`
// and now live in `@taiga-ui/legacy/styles`. Everything else (`taiga-ui-theme`,
// `taiga-ui-fonts`, `utils`, `components`, `mixins`, `variables`, `theme`) stays in
// `@taiga-ui/styles`, so redirect only the moved paths instead of the whole package.
export function migrateImports(fileContent: string): string {
    return fileContent
        .replaceAll('@taiga-ui/styles/basic', '@taiga-ui/legacy/styles/basic')
        .replaceAll('@taiga-ui/styles/markup', '@taiga-ui/legacy/styles/markup')
        .replaceAll(
            '@taiga-ui/styles/taiga-ui-global',
            '@taiga-ui/legacy/styles/taiga-ui-global',
        )
        .replaceAll('@taiga-ui/core/styles/taiga-ui-local', '@taiga-ui/styles/utils')
        .replaceAll('@taiga-ui/core/styles/', '@taiga-ui/styles/')
        .replaceAll('@taiga-ui/kit/styles/', '@taiga-ui/styles/');
}
