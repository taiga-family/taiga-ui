import {computed, Directive, inject, Input, signal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDateRangeOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    type TuiDayLike,
    TuiDayRange,
} from '@taiga-ui/cdk/date-time';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TuiWithTextfield} from '@taiga-ui/core/components/textfield';
import {TuiDropdownAuto} from '@taiga-ui/core/directives/dropdown';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {type TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';
import {
    TUI_DATE_ADAPTER,
    TUI_INPUT_DATE_OPTIONS_NEW,
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
        tuiProvide(TUI_INPUT_DATE_OPTIONS_NEW, TUI_INPUT_DATE_RANGE_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, TuiDropdownAuto, MaskitoDirective],
})
export class TuiInputDateRangeDirective extends TuiInputDateBase<TuiDayRange> {
    protected readonly identity = inject<TuiItemsHandlers<TuiDayRange>>(
        TUI_ITEMS_HANDLERS,
    ).identityMatcher.set((a, b) => a.daySame(b));

    protected override readonly filler = tuiWithDateFiller(
        (filler) => `${filler}${RANGE_SEPARATOR_CHAR}${filler}`,
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoDateRangeOptionsGenerator({
                dateSeparator: this.format().separator,
                mode: TUI_DATE_ADAPTER[this.format().mode],
                min: this.min().toLocalNativeDate(),
                max: this.max().toLocalNativeDate(),
                minLength: this.minLength() || {},
                maxLength: this.maxLength() || {},
            }),
        ),
    );

    public readonly minLength = signal<TuiDayLike | null>(null);
    public readonly maxLength = signal<TuiDayLike | null>(null);

    @Input('minLength')
    public set minLengthSetter(minLength: TuiDayLike | null) {
        this.minLength.set(minLength);
    }

    @Input('maxLength')
    public set maxLengthSetter(maxLength: TuiDayLike | null) {
        this.maxLength.set(maxLength);
    }

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
