import {TuiDay} from '@taiga-ui/cdk';

export function defaultSort<T>(x: T, y: T): number {
    const a = x instanceof TuiDay ? Number(x.toUtcNativeDate()) : x;
    const b = y instanceof TuiDay ? Number(y.toUtcNativeDate()) : y;

    if (a === b) {
        return 0;
    }

    return a > b ? 1 : -1;
}
