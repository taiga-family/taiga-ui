import {computed, Directive, effect, inject} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {type TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {
    tuiInjectAuxiliary,
    TuiSelectLike,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    TuiDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {TUI_MONTHS} from '@taiga-ui/core/tokens';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';

import {TUI_INPUT_MONTH_OPTIONS} from './input-month.options';

@Directive({
    selector: 'input[tuiInputMonth]',
    providers: [
        tuiAsControl(TuiInputMonthDirective),
        tuiValueTransformerFrom(TUI_INPUT_MONTH_OPTIONS),
    ],
    hostDirectives: [TuiWithInput, TuiSelectLike, TuiDropdownAuto],
    host: {
        '[disabled]': 'disabled()',
        '(input)': '$event.inputType?.includes("delete") && clear()',
    },
})
export class TuiInputMonthDirective extends TuiControl<TuiMonth | null> {
    private readonly input = inject(TuiInputDirective);
    private readonly months = inject(TUI_MONTHS);
    private readonly open = inject(TuiDropdownOpen).open;

    protected readonly icon = tuiIconEnd(inject(TUI_INPUT_MONTH_OPTIONS).icon);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly valueEffect = effect(() => {
        const value = this.value();
        const formatted = value
            ? `${this.months()[value.month] ?? ''} ${value.formattedYear}`
            : '';

        this.input.value.set(formatted);
    });

    protected readonly calendarIn = effect(() => {
        this.calendar()?.value.set(this.value());
    });

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
        !!inject(TuiWithNativePicker, {optional: true}) && inject(WA_IS_MOBILE);

    protected clear(): void {
        this.onChange(null);
        this.open.set(this.dropdownEnabled());
    }
}
