export function processLess(fileContent: string): string {
    return fileContent.replace(
        `@import 'taiga-ui-local';`,
        `@import '~@taiga-ui/core/styles/taiga-ui-local';`,
    );
}
