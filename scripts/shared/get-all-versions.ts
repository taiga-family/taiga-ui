import {execute} from './execute';

export function getAllVersions(name: string): string[] {
    const versions: string[] | string = JSON.parse(
        execute(`npm view ${name} versions --json || echo "[]"`, {}),
    );

    return Array.isArray(versions) ? versions : [versions];
}
