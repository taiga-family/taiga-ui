import {Directive, effect, inject, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import type {TuiMonth} from '@taiga-ui/cdk/date-time';
import {RANGE_SEPARATOR_CHAR, TuiMonthRange} from '@taiga-ui/cdk/date-time';
import {
    tuiInjectAuxiliary,
    TuiSelectLike,
    TuiTextfieldDirective,
    tuiTextfieldIconBinding,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';

import {TUI_INPUT_MONTH_RANGE_OPTIONS} from './input-month-range.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputMonthRange]',
    providers: [
        tuiAsControl(TuiInputMonthRangeDirective),
        tuiValueTransformerFrom(TUI_INPUT_MONTH_RANGE_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, TuiSelectLike, TuiDropdownAuto],
    host: {
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(input)': '$event.inputType?.includes("delete") && clear()',
    },
})
export class TuiInputMonthRangeDirective extends TuiControl<TuiMonthRange | null> {
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly formatter = toSignal(inject(TUI_MONTH_FORMATTER));
    private readonly open = tuiDropdownOpen();
    private readonly intermediateValue = signal<TuiMonth | null>(null);

    private readonly calendar = tuiInjectAuxiliary<TuiCalendarMonth>(
        (x) => x instanceof TuiCalendarMonth,
    );

    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_MONTH_RANGE_OPTIONS);
    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);

    protected readonly valueEffect = effect(() => {
        const value = this.value();
        const format = this.formatter() || (() => '');
        const string = value
            ? format(value.from) + RANGE_SEPARATOR_CHAR + format(value.to)
            : '';

        this.textfield.value.set(string);
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarInit = effect(() => {
        const calendar = this.calendar();

        if (calendar) {
            calendar.options.rangeMode = true;
        }
    });

    protected readonly calendarSync = effect(() => {
        this.calendar()?.value.set(this.intermediateValue() ?? this.value());
    }, TUI_ALLOW_SIGNAL_WRITES);

    // TODO: use linked signal (Angular 19+)
    protected readonly resetIntermediateValue = effect(() => {
        this.intermediateValue.set(this.value() && null);
    }, TUI_ALLOW_SIGNAL_WRITES);

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
