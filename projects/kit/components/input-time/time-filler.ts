import {computed, inject, type Signal} from '@angular/core';
import {type MaskitoTimeMode} from '@maskito/kit';
import {TUI_TIME_FORMAT, TUI_TIME_TEXTS} from '@taiga-ui/kit/tokens';

export function tuiInjectTimeFiller(
    // TODO(v6): delete argument when `mode: MaskitoTimeMode` becomes part of `TUI_TIME_FORMAT`
    mode: Signal<MaskitoTimeMode>,
): Signal<string> {
    const texts = inject(TUI_TIME_TEXTS);
    const format = inject(TUI_TIME_FORMAT);

    return computed(() => {
        const {
            separators,
            dayPeriod: [am],
        } = format();

        let index = 0;
        const time = (texts()?.[mode()] ?? '').replaceAll(
            /[:.]/g,
            (separator) => separators[index++] ?? separator,
        );

        return am ? `${time} ${'A'.repeat(am.length)}` : time;
    });
}
