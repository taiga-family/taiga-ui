import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {
    tuiInjectAuxiliary,
    tuiTextfieldIconBinding,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {TuiItemsHandlersValidator} from '@taiga-ui/core/directives/items-handlers';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_YEAR_OPTIONS} from './input-year.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputYear]',
    providers: [
        tuiAsControl(TuiInputYearDirective),
        tuiValueTransformerFrom(TUI_INPUT_YEAR_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, MaskitoDirective, TuiItemsHandlersValidator],
    host: {
        maxlength: '4',
        inputmode: 'numeric',
        '[value]': 'value()',
        '[disabled]': 'disabled()',
        '(click)': 'toggle()',
        '(input)': 'onInput($event.target.value)',
    },
})
export class TuiInputYearDirective extends TuiControl<number | null> {
    private readonly options = inject(TUI_INPUT_YEAR_OPTIONS);
    private readonly open = tuiDropdownOpen();

    protected readonly calendar = tuiInjectAuxiliary<TuiCalendarYear>(
        (x) => x instanceof TuiCalendarYear,
    );

    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_YEAR_OPTIONS);
    protected readonly min = signal(this.options.min.year);
    protected readonly max = signal(this.options.max.year);

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoNumberOptionsGenerator({
                min: this.min(),
                max: this.max(),
                thousandSeparator: '',
            }),
        ),
    );

    protected readonly calendarIn = effect(() => {
        if (this.calendar()) {
            this.processCalendar(this.calendar()!);
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarOut = effect((onCleanup) => {
        const subscription = this.calendar()?.yearClick.subscribe((year) => {
            this.onChange(year);
            this.cdr.detectChanges();
            this.toggle();
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

    protected onInput(value: string): void {
        this.onChange(Number(value));

        if (this.calendar()) {
            this.processCalendar(this.calendar()!);
        }
    }

    protected toggle(): void {
        this.open.update((x) => !x);
    }

    protected processCalendar(calendar: TuiCalendarYear): void {
        calendar.value = this.value();
        calendar.initialItem = this.value() ?? calendar.initialItem;
        calendar.min = this.min();
        calendar.max = this.max();
        calendar.cdr.detectChanges();
    }
}
