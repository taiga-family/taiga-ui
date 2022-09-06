import {unlinkSync} from 'fs';

/**
 * @deprecated:
 * remove from public later
 */
export function deleteAllToCompileFile(allToCompilePath: string | string[]): void {
    if (Array.isArray(allToCompilePath)) {
        allToCompilePath.forEach(file => unlinkSync(file));
    } else {
        unlinkSync(allToCompilePath);
    }
}
