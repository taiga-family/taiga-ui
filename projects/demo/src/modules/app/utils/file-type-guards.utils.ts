import {EXAMPLE_PRIMARY_FILE_NAME} from '../../interfaces/front-end-example';

export function isTS(fileName: string): boolean {
    return fileName === EXAMPLE_PRIMARY_FILE_NAME.TS || fileName.endsWith('.ts');
}

export function isLess(fileName: string): boolean {
    return fileName === EXAMPLE_PRIMARY_FILE_NAME.LESS || `${fileName}`.endsWith('.less');
}

export function isPrimaryComponentFile(fileName: string): boolean {
    return Object.values<string>(EXAMPLE_PRIMARY_FILE_NAME).includes(fileName);
}
