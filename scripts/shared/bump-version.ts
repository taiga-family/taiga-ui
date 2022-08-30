import {TuiReleaseMode} from './release-mode';

export function bumpVersion(version: string, mode: TuiReleaseMode): string {
    let [major, minor, patch, , rc = -1] = version
        .split(/[.-]/)
        .map(value => Number(value));

    const possibilityMajor = rc === -1 ? ++major : major;

    switch (mode) {
        case `major`:
            return `${possibilityMajor}.0.0`;
        case `minor`:
            return `${possibilityMajor}.${++minor}.0`;
        case `patch`:
            return `${possibilityMajor}.${minor}.${++patch}`;
        case `prerelease`:
            return `${possibilityMajor}.0.0-rc.${++rc}`;
        default:
            return version;
    }
}
