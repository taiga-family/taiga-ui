import {computed, Directive, inject, Input, signal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {MAX_YEAR, MIN_YEAR} from '@taiga-ui/cdk/date-time';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldDirective,
    tuiTextfieldIconBinding,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_YEAR_OPTIONS} from './input-year.options';

const UP_TO_4_DIGITS_REG = /^\d{0,4}$/;

@Directive({
    standalone: true,
    selector: 'input[tuiInputYear]',
    providers: [tuiAsControl(TuiInputYear), tuiAsTextfieldAccessor(TuiInputYear)],
    hostDirectives: [TuiWithTextfield, MaskitoDirective],
    host: {
        inputmode: 'numeric',
        '[value]': 'value()',
        '[disabled]': 'disabled()',
        '(click)': 'toggle()',
        '(input)': 'onInput($event.target.value)',
    },
})
export class TuiInputYear
    extends TuiControl<number | null>
    implements TuiTextfieldAccessor<number | null>
{
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly open = tuiDropdownOpen();
    private readonly min = signal(MIN_YEAR);
    private readonly max = signal(MAX_YEAR);

    protected readonly mask = tuiMaskito(
        computed(() => ({
            ...maskitoNumberOptionsGenerator({
                min: this.min(),
                max: this.max(),
                thousandSeparator: '',
            }),
            mask: UP_TO_4_DIGITS_REG,
        })),
    );

    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_YEAR_OPTIONS);

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

    public setValue(value: number | null): void {
        this.onChange(value);
        this.textfield.value.set(value?.toString() ?? '');
    }

    protected toggle(): void {
        this.open.update((x) => !x);
    }

    protected onInput(value: string): void {
        const newValue = value ? Number(value) : null;

        this.onChange(newValue);

        if (newValue) {
            this.textfield.value.set(newValue.toString());
        }
    }
}
