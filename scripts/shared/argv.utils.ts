import process from 'process';

import {processLog} from '../../projects/cdk/schematics/utils/colored-log';

export function getValueByFlag<T extends string>(flag: string, fallback: T): T {
    const index = findIndexFlag(flag);

    if (index === -1) {
        return fallback;
    }

    const [parsedFlag, parsedValue] = process.argv[index].split(`=`) ?? [];
    const value =
        parsedValue ||
        (process.argv[index + 1].startsWith(`-`)
            ? fallback
            : process.argv[index + 1] ?? fallback);

    processLog(`parsed flags: \n${[parsedFlag, value].join(`=`)}`);

    return value as T;
}

export function hasFlag(flag: string): boolean {
    return findIndexFlag(flag) !== -1;
}

export function findIndexFlag(flag: string): number {
    return process.argv.findIndex(arg => arg === flag || arg.split(`=`)[0] === flag);
}
