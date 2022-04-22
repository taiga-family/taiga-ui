import {TuiReleaseMode} from './release-mode';

export function bumpVersion(version: string, mode: TuiReleaseMode): string {
    let [major, minor, patch] = version.split('.').map(value => Number(value));

    switch (mode) {
        case 'major':
            return `${++major}.0.0`;
        case 'minor':
            return `${major}.${++minor}.0`;
        case 'patch':
            return `${major}.${minor}.${++patch}`;
        default:
            return version;
    }
}
