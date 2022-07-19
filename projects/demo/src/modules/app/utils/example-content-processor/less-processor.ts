export function processLess(fileContent: string): string {
    return trimExportDefault(fileContent).replace(
        "@import 'taiga-ui-local';",
        "@import '~@taiga-ui/core/styles/taiga-ui-local';",
    );
}

// TODO: investigate why raw-loader add `export default "...";` to Less-files
function trimExportDefault(fileContent: string): string {
    return fileContent.startsWith('export default')
        ? fileContent
              .replace(/^export\sdefault\s["']/gi, '')
              .replace(/['"];$/gi, '')
              .replaceAll('\\n', '\n')
        : fileContent;
}
