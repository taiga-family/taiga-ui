export function processLess(fileContent: string): string {
    return fileContent.replace(
        "@import '@taiga-ui/styles/mixins';",
        "@import '@taiga-ui/styles/mixins.less';",
    );
}
