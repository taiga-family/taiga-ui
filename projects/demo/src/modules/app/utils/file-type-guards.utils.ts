import {TUI_EXAMPLE_PRIMARY_FILE_NAME} from '@taiga-ui/addon-doc';

export function isTS(fileName: string): boolean {
    return fileName === TUI_EXAMPLE_PRIMARY_FILE_NAME.TS || fileName.endsWith(`.ts`);
}

export function isLess(fileName: string): boolean {
    return (
        fileName === TUI_EXAMPLE_PRIMARY_FILE_NAME.LESS || `${fileName}`.endsWith(`.less`)
    );
}

export function isPrimaryComponentFile(fileName: string): boolean {
    return Object.values<string>(TUI_EXAMPLE_PRIMARY_FILE_NAME).includes(fileName);
}
