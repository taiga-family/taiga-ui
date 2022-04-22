import {TuiReleaseMode} from './release-mode';

export function bumpVersion(version: string, mode: TuiReleaseMode): string {
    let [major, minor, patch] = version.split('.').map(value => Number(value)) as [
        number,
        number,
        number,
    ];

    console.log(major, minor, patch);

    if (mode === 'major') {
        // @ts-ignore
        versionArray = [Number(versionArray[0]) + 1, 0, 0];
    }

    if (mode === 'minor') {
        // @ts-ignore
        versionArray[1] = Number(versionArray[1]) + 1;
        // @ts-ignore
        versionArray[2] = 0;
    }

    if (mode === 'patch') {
        // @ts-ignore
        versionArray[2] = Number(versionArray[2]) + 1;
    }

    return versionArray.join('.');
}
