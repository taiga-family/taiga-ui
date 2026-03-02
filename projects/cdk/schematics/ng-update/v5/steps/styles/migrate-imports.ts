export function migrateImports(fileContent: string): string {
    return fileContent
        .replaceAll('@taiga-ui/core/styles/taiga-ui-local', '@taiga-ui/styles/utils')
        .replaceAll('@taiga-ui/core/styles/', '@taiga-ui/styles/')
        .replaceAll('@taiga-ui/kit/styles/', '@taiga-ui/styles/');
}
