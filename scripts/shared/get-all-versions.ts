import {execute} from './execute';

export function getAllVersions(name: string): string[] {
    return JSON.parse(execute(`npm view ${name} versions --json || echo "[]"`, {}));
}
