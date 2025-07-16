import {computed, Directive, effect, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import type {TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
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

import {TUI_INPUT_MONTH_OPTIONS} from './input-month.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputMonth]',
    providers: [
        tuiAsControl(TuiInputMonthDirective),
        tuiValueTransformerFrom(TUI_INPUT_MONTH_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, TuiSelectLike, TuiDropdownAuto],
    host: {
        '[disabled]': 'disabled()',
        '(input)': '$event.inputType?.includes("delete") && clear()',
        '(keydown.arrowDown)': 'onArrow(1)',
        '(keydown.arrowUp)': 'onArrow(-1)',
    },
})
export class TuiInputMonthDirective extends TuiControl<TuiMonth | null> {
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly formatter = toSignal(inject(TUI_MONTH_FORMATTER));
    private readonly open = tuiDropdownOpen();

    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_MONTH_OPTIONS);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly valueEffect = effect(() => {
        this.textfield.value.set(this.formatter()?.(this.value()) || '');
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarIn = effect(() => {
        this.calendar()?.value.set(this.value());
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarOut = effect((onCleanup) => {
        const subscription = this.calendar()?.monthClick.subscribe((month) => {
            this.onChange(month);
            this.open.set(false);
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    public readonly calendar = tuiInjectAuxiliary<TuiCalendarMonth>(
        (x) => x instanceof TuiCalendarMonth,
    );

    public readonly native =
        tuiInjectElement<HTMLInputElement>().type === 'month' && inject(TUI_IS_MOBILE);

    protected clear(): void {
        this.onChange(null);
        this.open.set(this.dropdownEnabled());
    }

    protected onArrow(direction: number): void {
        if (!this.interactive()) {
            return;
        }

        const currentValue = this.value();
        const calendar = this.calendar();
        
        if (!currentValue) {
            return;
        }

        // Calculate the new month
        const newMonth = currentValue.append({month: direction});
        
        // Get min/max bounds from the calendar component
        const min = calendar?.min() ?? TUI_FIRST_DAY;
        const max = calendar?.max() ?? TUI_LAST_DAY;
        
        // Check bounds
        if (newMonth.monthBefore(min) || newMonth.monthAfter(max)) {
            return;
        }

        this.onChange(newMonth);
    }
}
