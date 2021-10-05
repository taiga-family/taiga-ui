import * as path from 'path';

export function getRelativePath(from: string, to: string): string {
    return path.relative(from, to);
}
