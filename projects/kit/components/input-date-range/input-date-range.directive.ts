import {computed, Directive, input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDateRangeOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
} from '@taiga-ui/cdk/date-time';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
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
    public override readonly max = input(this.options.max, {
        transform: (max: TuiDay | null): TuiDay =>
            max instanceof TuiDay ? max : TUI_LAST_DAY,
    });

    public override readonly min = input(this.options.min, {
        transform: (min: TuiDay | null): TuiDay =>
            min instanceof TuiDay ? min : TUI_FIRST_DAY,
    });

    protected override readonly filler = tuiWithDateFiller(
        (filler) => `${filler}${RANGE_SEPARATOR_CHAR}${filler}`,
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoDateRangeOptionsGenerator({
                dateSeparator: this.format().separator,
                mode: this.format().mode,
                min: this.min().toLocalNativeDate(),
                max: this.max().toLocalNativeDate(),
                minLength: this.minLength() || {},
                maxLength: this.maxLength() || {},
            }),
        ),
    );

    public readonly minLength = input<TuiDayLike | null>(null);
    public readonly maxLength = input<TuiDayLike | null>(null);

    protected override processCalendar(calendar: TuiCalendarRange): void {
        super.processCalendar(calendar);

        calendar.minLength = this.minLength();
        calendar.maxLength = this.maxLength();
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
