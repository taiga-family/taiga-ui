import {unlinkSync} from 'fs';

export function deleteAllToCompileFile(allToCompilePath: string): void {
    unlinkSync(allToCompilePath);
}
