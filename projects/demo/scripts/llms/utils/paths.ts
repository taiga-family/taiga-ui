import path from 'node:path';

// Shared paths configuration for LLM documentation generation
// These paths are used across different utilities to ensure consistency

let PAGES_PATH = path.resolve(process.cwd(), 'projects/demo/src/pages');
let FOLDERS_TO_SCAN = ['components', 'directives', 'tokens', 'customization', 'pipes'];

export function setPagesPath(configPath: string): void {
    PAGES_PATH = path.resolve(process.cwd(), configPath);
}

export function getPagesPath(): string {
    return PAGES_PATH;
}

export function setFoldersToScan(folders: string[]): void {
    FOLDERS_TO_SCAN = folders;
}

export function getFoldersToScan(): string[] {
    return FOLDERS_TO_SCAN;
}
