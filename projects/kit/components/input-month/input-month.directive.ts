import {computed, Directive, effect, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {type TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {
    tuiInjectAuxiliary,
    TuiSelectLike,
    TuiTextfieldDirective,
    tuiTextfieldIcon,
    TuiWithNativePicker,
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
    },
})
export class TuiInputMonthDirective extends TuiControl<TuiMonth | null> {
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly formatter = toSignal(inject(TUI_MONTH_FORMATTER));
    private readonly open = tuiDropdownOpen();

    protected readonly icon = tuiTextfieldIcon(TUI_INPUT_MONTH_OPTIONS);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly valueEffect = effect(() => {
        this.textfield.value.set(this.formatter()?.(this.value()) || '');
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
        !!inject(TuiWithNativePicker, {optional: true}) && inject(TUI_IS_MOBILE);

    protected clear(): void {
        this.onChange(null);
        this.open.set(this.dropdownEnabled());
    }
}
