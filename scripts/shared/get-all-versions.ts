import {execSync} from 'child_process';

export function getAllVersions(name: string): string[] {
    return JSON.parse(
        execSync(`npm view ${name} versions --json || echo "[]"`).toString(),
    );
}
