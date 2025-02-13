import {
    computed,
    ContentChild,
    Directive,
    effect,
    inject,
    Input,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import type {TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk/date-time';
import {TuiWithChildNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldComponent,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownAuto, tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';

import {TUI_INPUT_MONTH_OPTIONS} from './input-month.options';
import {TuiNativeMonthPicker} from './native-month-picker/native-month-picker.component';

@Directive({
    standalone: true,
    selector: 'tui-textfield[tuiInputMonth]',
    providers: [tuiAsControl(TuiInputMonthDirective), tuiFallbackValueProvider(null)],
    hostDirectives: [TuiWithTextfield, TuiWithChildNativeValidator, TuiDropdownAuto],
    host: {
        '(click)': 'toggleDropdown()',
        // Make <input tuiTextfield /> readonly (without readonly appearance)
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        '(input)': '$event.inputType?.includes("delete") && onChange(null)',
    },
})
export class TuiInputMonthDirective extends TuiControl<TuiMonth | null> {
    private readonly options = inject(TUI_INPUT_MONTH_OPTIONS);
    private readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly nativePicker = signal<TuiNativeMonthPicker | null>(null);
    private readonly open = tuiDropdownOpen();
    private readonly formatter = toSignal(inject(TUI_MONTH_FORMATTER), {
        initialValue: () => '',
    });

    protected readonly icon = tuiDirectiveBinding(
        TuiIcons,
        'iconEnd',
        computed(() => this.options.icon(this.textfieldOptions.size())),
        {},
    );

    protected readonly textfieldSync = effect(() => {
        const input = this.textfield.input?.nativeElement;

        if (input) {
            input.value = this.formatter()(this.value());
            input.inputMode = 'none';
            input.style.caretColor = 'transparent';
            input.disabled = this.disabled();
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarSync = effect(() => {
        const calendar = this.calendar();

        if (calendar) {
            calendar.value.set(this.value());
            calendar.min.set(this.min() ?? TUI_FIRST_DAY); // TODO(v5): remove TUI_FIRST_DAY fallback
            calendar.max.set(this.max() ?? TUI_LAST_DAY); // TODO(v5): remove TUI_LAST_DAY fallback
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected $ = effect(() => {
        const subscription = this.calendar()?.monthClick.subscribe((month) => {
            this.onChange(month);
            this.open.set(false);
        });

        return () => subscription?.unsubscribe();
    });

    public readonly min = signal<TuiMonth | null>(null);
    public readonly max = signal<TuiMonth | null>(null);
    public readonly calendar = signal<TuiCalendarMonth | null>(null);

    @Input('min')
    public set minSetter(x: TuiMonth | null) {
        this.min.set(x);
    }

    @Input('max')
    public set maxSetter(x: TuiMonth | null) {
        this.max.set(x);
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open.set(false);
    }

    @ContentChild(TuiCalendarMonth)
    protected set calendarSetter(x: TuiCalendarMonth) {
        this.calendar.set(x);
    }

    @ContentChild(TuiNativeMonthPicker)
    protected set nativePickerSetter(x: TuiNativeMonthPicker) {
        this.nativePicker.set(x);
    }

    protected toggleDropdown(): void {
        if (!this.nativePicker()?.enabled) {
            this.open.update((x) => !x);
        }
    }
}
