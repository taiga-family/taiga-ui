import {execute} from './execute';

export function getAllTags(name: string): Record<string, string> {
    try {
        return JSON.parse(execute(`npm view ${name} dist-tags --json || echo "{}"`, {}));
    } catch {
        return {};
    }
}
