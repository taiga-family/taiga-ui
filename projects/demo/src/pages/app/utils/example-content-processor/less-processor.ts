export function processLess(fileContent: string): string {
    return fileContent.replace(
        "@import '@taiga-ui/styles/utils';",
        "@import '@taiga-ui/styles/utils.less';",
    );
}
