import type {TuiPoint} from '@taiga-ui/core/types';

export function tuiLineLength(a: TuiPoint | undefined, b: TuiPoint | undefined): number {
    const x = (b?.[0] || 0) - (a?.[0] ?? 0);
    const y = (b?.[1] || 0) - (a?.[1] || 0);

    return Math.sqrt(x ** 2 + y ** 2);
}
