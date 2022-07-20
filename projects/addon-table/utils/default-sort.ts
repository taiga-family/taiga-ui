import {TuiDay, tuiIsString} from '@taiga-ui/cdk';

/**
 * @deprecated: use {@link tuiDefaultSort} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function defaultSort<T>(x: T, y: T): number {
    const a = x instanceof TuiDay ? Number(x.toUtcNativeDate()) : x;
    const b = y instanceof TuiDay ? Number(y.toUtcNativeDate()) : y;

    if (a === b) {
        return 0;
    }

    if (tuiIsString(a) && tuiIsString(b)) {
        return a.localeCompare(b);
    }

    return a > b ? 1 : -1;
}

export const tuiDefaultSort = defaultSort;
