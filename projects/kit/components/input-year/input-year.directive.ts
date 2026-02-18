import {computed, Directive, effect, inject, input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {tuiSetSignal} from '@taiga-ui/cdk/utils';
import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    TuiDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_YEAR_OPTIONS} from './input-year.options';

@Directive({
    selector: 'input[tuiInputYear]',
    providers: [
        tuiAsControl(TuiInputYearDirective),
        tuiValueTransformerFrom(TUI_INPUT_YEAR_OPTIONS),
    ],
    hostDirectives: [TuiWithInput, MaskitoDirective, TuiDropdownAuto],
    host: {
        maxlength: '4',
        inputmode: 'numeric',
        '[disabled]': 'disabled()',
        '(click)': 'toggle()',
        '(input)': 'onInput($event.target.value)',
    },
})
export class TuiInputYearDirective extends TuiControl<number | null> {
    private readonly options = inject(TUI_INPUT_YEAR_OPTIONS);
    private readonly input = inject(TuiInputDirective);
    private readonly open = inject(TuiDropdownOpen).open;
    private readonly initialItem = computed(
        () => this.value() ?? this.calendar()?.initialItem() ?? null,
    );

    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    protected readonly icon = tuiIconEnd(this.options.icon);
    protected readonly calendar = tuiInjectAuxiliary<TuiCalendarYear>(
        (x) => x instanceof TuiCalendarYear,
    );

    /**
     * TODO: move to [value]="value()" after update to Angular 17+
     * something wrong with change detection on host binding
     */
    protected readonly valueEffect = effect(() =>
        this.input.value.set(this.value()?.toString() ?? ''),
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoNumberOptionsGenerator({
                min: this.min(),
                max: this.max(),
                thousandSeparator: '',
            }),
        ),
    );

    protected readonly calendarInEffect = effect(() => {
        const calendar = this.calendar();
        const initialItem = this.initialItem();

        if (calendar) {
            initialItem && tuiSetSignal(calendar.initialItem, initialItem);
            tuiSetSignal(calendar.value, this.value());
            tuiSetSignal(calendar.min, this.min());
            tuiSetSignal(calendar.max, this.max());
        }
    });

    protected readonly calendarOutEffect = effect((onCleanup) => {
        const subscription = this.calendar()?.yearClick.subscribe((year) => {
            this.onChange(year);
            this.open.set(false);
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    public readonly min = input(this.options.min.year);
    public readonly max = input(this.options.max.year);

    protected toggle(): void {
        if (this.interactive()) {
            this.open.update((x) => !x);
        }
    }

    protected onInput(raw: string): void {
        const value = Number(raw);

        this.onChange(!raw || Number.isNaN(value) ? null : value);
    }
}
