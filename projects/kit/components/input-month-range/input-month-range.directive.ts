import {Directive, effect, inject, signal} from '@angular/core';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    RANGE_SEPARATOR_CHAR,
    type TuiMonth,
    TuiMonthRange,
} from '@taiga-ui/cdk/date-time';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {tuiInjectAuxiliary, TuiSelectLike} from '@taiga-ui/core/components/textfield';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    TuiDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TUI_INPUT_MONTH_RANGE_OPTIONS} from './input-month-range.options';

@Directive({
    selector: 'input[tuiInputMonthRange]',
    providers: [
        tuiAsControl(TuiInputMonthRangeDirective),
        tuiValueTransformerFrom(TUI_INPUT_MONTH_RANGE_OPTIONS),
    ],
    hostDirectives: [TuiWithInput, TuiSelectLike, TuiDropdownAuto],
    host: {
        '[disabled]': 'disabled()',
        '(input)': '$event.inputType?.includes("delete") && clear()',
    },
})
export class TuiInputMonthRangeDirective extends TuiControl<TuiMonthRange | null> {
    private readonly input = inject(TuiInputDirective);
    private readonly months = inject(TUI_MONTHS);
    private readonly open = inject(TuiDropdownOpen).open;
    private readonly intermediateValue = signal<TuiMonth | null>(null);
    private readonly calendar = tuiInjectAuxiliary<TuiCalendarMonth>(
        (x) => x instanceof TuiCalendarMonth,
    );

    protected readonly icon = tuiIconEnd(inject(TUI_INPUT_MONTH_RANGE_OPTIONS).icon);
    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    protected readonly valueEffect = effect(() => {
        const value = this.value();
        const months = this.months();
        const format = ({month, formattedYear}: TuiMonth): string =>
            `${months[month] ?? ''} ${formattedYear}`;

        this.input.value.set(
            value ? format(value.from) + RANGE_SEPARATOR_CHAR + format(value.to) : '',
        );
    });

    protected readonly calendarInit = effect(() => {
        const calendar = this.calendar();

        if (calendar) {
            calendar.options.rangeMode = true;
        }
    });

    protected readonly calendarSync = effect(() => {
        this.calendar()?.value.set(this.intermediateValue() ?? this.value());
    });

    // TODO: use linked signal (Angular 19+)
    protected readonly resetIntermediateValue = effect(() => {
        this.intermediateValue.set(this.value() && null);
    });

    protected onMonthClickEffect = effect((onCleanup) => {
        const subscription = this.calendar()?.monthClick.subscribe((month) => {
            const intermediateValue = this.intermediateValue();

            if (!intermediateValue) {
                this.intermediateValue.set(month);
            } else {
                this.onChange(TuiMonthRange.sort(intermediateValue, month));
                this.open.set(false);
            }
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    protected clear(): void {
        this.onChange(null);
        this.open.set(true);
    }
}
