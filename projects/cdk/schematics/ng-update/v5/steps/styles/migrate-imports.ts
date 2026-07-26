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
