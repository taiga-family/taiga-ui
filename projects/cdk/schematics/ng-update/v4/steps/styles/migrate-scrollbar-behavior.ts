export function migrateScrollbarBehavior(fileContent: string): string {
    if (!fileContent.includes('@taiga-ui/core/styles/taiga-ui-local')) {
        return fileContent;
    }

    return fileContent.replaceAll(
        '.scroll-behavior()',
        'scroll-behavior: var(--tui-scroll-behavior)',
    );
}
