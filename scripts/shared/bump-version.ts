import type {TuiReleaseMode} from './release-mode';

export function bumpVersion(version: string, mode: TuiReleaseMode): string {
    let [major, minor, patch, , rc = -1] = version
        .split(/[.-]/)
        .map(value => Number(value));

    if (rc !== -1 && mode !== `major` && mode !== `prerelease`) {
        throw new Error(
            `You are using the invalid mode (\`${mode}\`) for bump ${version} version`,
        );
    }

    switch (mode) {
        case `major`:
            return `${rc === -1 ? ++major : major}.0.0`;
        case `minor`:
            return `${major}.${++minor}.0`;
        case `patch`:
            return `${major}.${minor}.${++patch}`;
        case `prerelease`:
            return `${major}.0.0-rc.${++rc}`;
        default:
            return version;
    }
}
