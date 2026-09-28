import {computed, Directive, input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDateRange} from '@maskito/kit';
import {tuiAsControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiDay,
    type TuiDayLike,
    TuiDayRange,
} from '@taiga-ui/cdk/date-time';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {type AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {TuiDropdownAuto} from '@taiga-ui/core/portals/dropdown';
import {type TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';
import {
    TUI_INPUT_DATE_OPTIONS,
    TuiInputDateBase,
    tuiWithDateFiller,
} from '@taiga-ui/kit/components/input-date';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_DATE_RANGE_OPTIONS} from './input-date-range.options';

@Directive({
    selector: 'input[tuiInputDateRange]',
    providers: [
        // TODO: Add SelectOption after data-list in calendar-range is refactored
        tuiAsControl(TuiInputDateRangeDirective),
        tuiValueTransformerFrom(TUI_INPUT_DATE_RANGE_OPTIONS),
        tuiProvide(TUI_INPUT_DATE_OPTIONS, TUI_INPUT_DATE_RANGE_OPTIONS),
    ],
    hostDirectives: [TuiWithInput, TuiDropdownAuto, MaskitoDirective],
})
export class TuiInputDateRangeDirective extends TuiInputDateBase<TuiDayRange> {
    /**
     * TODO(v6): check https://github.com/angular/angular/issues/70600 status:
     * Solved? Drop `TuiDayRange | undefined` workaround from `transform`
     */
    public override readonly max = input(this.options.max ?? TUI_LAST_DAY, {
        transform: (max: TuiDay | TuiDayRange | null | undefined): TuiDay =>
            max && !(max instanceof TuiDayRange)
                ? max
                : (this.options.max ?? TUI_LAST_DAY),
    });

    /**
     * TODO(v6): check https://github.com/angular/angular/issues/70600 status:
     * Solved? Drop `TuiDayRange | undefined` workaround from `transform`
     */
    public override readonly min = input(this.options.min ?? TUI_FIRST_DAY, {
        transform: (min: TuiDay | TuiDayRange | null | undefined): TuiDay =>
            min && !(min instanceof TuiDayRange)
                ? min
                : (this.options.min ?? TUI_FIRST_DAY),
    });

    protected override readonly filler = tuiWithDateFiller(
        (filler) => `${filler}${RANGE_SEPARATOR_CHAR}${filler}`,
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoDateRange({
                dateSeparator: this.format().separator,
                mode: this.format().mode,
                min: this.min().toLocalNativeDate(),
                max: this.max().toLocalNativeDate(),
                minLength: this.minLength() || {},
                maxLength: this.maxLength() || {},
            }),
        ),
    );

    /**
     * TODO(v6): check https://github.com/angular/angular/issues/70600 status:
     * - Solved? Drop `number | undefined` workaround and `transform`
     * - Not yet? Rename props to `margin`
     * * (to be similar to `Range[margin]`: https://taiga-ui.dev/components/range/API?margin=2)
     */
    public readonly minLength = input<
        TuiDayLike | null,
        TuiDayLike | number | null | undefined
    >(null, {transform: (x) => (typeof x === 'object' ? x : null)});

    /**
     * TODO(v6): check https://github.com/angular/angular/issues/70600 status:
     * - Solved? Drop `number | undefined` workaround and `transform`
     * - Not yet? Rename props to `limit`
     * (to be similar to `Range[limit]`: https://taiga-ui.dev/components/range/API?limit=10)
     */
    public readonly maxLength = input<
        TuiDayLike | null,
        TuiDayLike | number | null | undefined
    >(null, {transform: (x) => (typeof x === 'object' ? x : null)});

    protected override processCalendar(
        calendar: AbstractTuiCalendar | TuiCalendarRange,
    ): void {
        super.processCalendar(calendar as AbstractTuiCalendar);

        if ('minLength' in calendar && 'maxLength' in calendar) {
            tuiSetSignal(calendar.minLength, this.minLength());
            tuiSetSignal(calendar.maxLength, this.maxLength());
        }
    }

    protected override onValueChange(value: string): void {
        this.control?.control?.updateValueAndValidity({emitEvent: false});
        this.onChange(
            value.length === DATE_RANGE_FILLER_LENGTH
                ? TuiDayRange.normalizeParse(value, this.format().mode)
                : null,
        );
    }
}
