import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {
    tuiInjectAuxiliary,
    TuiTextfieldDirective,
    tuiTextfieldIcon,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_YEAR_OPTIONS} from './input-year.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputYear]',
    providers: [
        tuiAsControl(TuiInputYearDirective),
        tuiValueTransformerFrom(TUI_INPUT_YEAR_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, MaskitoDirective, TuiDropdownAuto],
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
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly open = tuiDropdownOpen();

    private readonly initialItem = computed(
        () => this.value() ?? this.calendar()?.initialItem() ?? null,
    );

    protected readonly calendar = tuiInjectAuxiliary<TuiCalendarYear>(
        (x) => x instanceof TuiCalendarYear,
    );

    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    protected readonly icon = tuiTextfieldIcon(TUI_INPUT_YEAR_OPTIONS);
    protected readonly min = signal(this.options.min.year);
    protected readonly max = signal(this.options.max.year);

    /**
     * TODO: move to [value]="value()" after update to Angular 17+
     * something wrong with change detection on host binding
     */
    protected readonly valueEffect = effect(() =>
        this.textfield.value.set(this.value()?.toString() ?? ''),
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

        if (calendar) {
            calendar.initialItemSetter = this.initialItem();
            calendar.value.set(this.value());
            calendar.min.set(this.min());
            calendar.max.set(this.max());
        }
    });

    protected readonly calendarOutEffect = effect((onCleanup) => {
        const subscription = this.calendar()?.yearClick.subscribe((year) => {
            this.onChange(year);
            this.open.set(false);
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    // TODO(v5): use signal inputs
    @Input('min')
    public set minSetter(x: number) {
        this.min.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('max')
    public set maxSetter(x: number) {
        this.max.set(x);
    }

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
