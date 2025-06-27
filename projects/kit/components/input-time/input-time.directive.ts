import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import type {MaskitoTimeMode, MaskitoTimeParams} from '@maskito/kit';
import {maskitoSelectionChangeHandler, maskitoTimeOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TuiTime} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    tuiTextfieldIconBinding,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownDirective,
    tuiDropdownEnabled,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens/auxiliary';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';
import {TUI_TIME_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_TIME_OPTIONS} from './input-time.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputTime]',
    providers: [
        tuiAsControl(TuiInputTimeDirective),
        tuiAsTextfieldAccessor(TuiInputTimeDirective),
        tuiAsAuxiliary(TuiInputTimeDirective),
        tuiValueTransformerFrom(TUI_INPUT_TIME_OPTIONS),
        tuiAsOptionContent(TuiSelectOption),
    ],
    hostDirectives: [TuiWithTextfield, MaskitoDirective],
    host: {
        '[disabled]': 'disabled()',
        '[attr.inputMode]': 'inputMode()',
        '(click)': 'toggle()',
    },
})
export class TuiInputTimeDirective
    extends TuiControl<TuiTime | null>
    implements TuiTextfieldAccessor<TuiTime | null>
{
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly dropdown = inject(TuiDropdownDirective);
    private readonly open = tuiDropdownOpen();
    private readonly options = inject(TUI_INPUT_TIME_OPTIONS);
    private readonly fillers = toSignal(inject(TUI_TIME_TEXTS));
    private readonly acceptableValues = signal<readonly TuiTime[]>([]);

    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_TIME_OPTIONS);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly filler = tuiDirectiveBinding(
        TuiTextfieldComponent,
        'fillerSetter',
        computed((fillers = this.fillers()) => fillers?.[this.timeMode()] ?? ''),
        {},
    );

    protected readonly inputMode = computed(() =>
        this.timeMode().includes('AA') ? 'text' : 'numeric',
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            this.computeMask({
                ...this.options,
                mode: this.timeMode(),
                step: this.interactive() && !this.dropdown._content() ? 1 : 0,
            }),
        ),
    );

    protected readonly valueEffect = effect(() => {
        const value = this.textfield.value();
        const time =
            value.length === this.timeMode().length ? TuiTime.fromString(value) : null;
        const newValue =
            this.acceptableValues().length && time
                ? this.findNearestTime(time, this.acceptableValues())
                : time;

        this.control?.control?.updateValueAndValidity({emitEvent: false});
        this.onChange(newValue);

        if (newValue && newValue !== time) {
            this.textfield.value.set(newValue?.toString(this.timeMode()));
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    public readonly native =
        tuiInjectElement<HTMLInputElement>().type === 'time' && inject(TUI_IS_MOBILE);

    public readonly timeMode = signal(this.options.mode);

    // TODO(v5): use signal inputs
    @Input('mode')
    public set modeSetter(x: MaskitoTimeMode) {
        this.timeMode.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('accept')
    public set acceptSetter(x: readonly TuiTime[]) {
        this.acceptableValues.set(x);
    }

    public setValue(value: TuiTime | null): void {
        this.textfield.value.set(value?.toString(this.timeMode()) ?? '');

        if (!value) {
            this.open.set(true);
        }
    }

    public override writeValue(value: TuiTime | null): void {
        super.writeValue(value);
        this.textfield.value.set(this.value()?.toString(this.timeMode()) ?? '');
    }

    protected toggle(): void {
        this.open.update((x) => !x);
    }

    private computeMask(params: MaskitoTimeParams): MaskitoOptions {
        const options = maskitoTimeOptionsGenerator(params);
        const {mode} = params;
        const inputModeSwitchPlugin = maskitoSelectionChangeHandler((element) => {
            element.inputMode =
                element.selectionStart! >= mode.indexOf(' AA') ? 'text' : 'numeric';
        });

        return {
            ...options,
            plugins: options.plugins.concat(
                mode.includes('AA') ? inputModeSwitchPlugin : [],
            ),
        };
    }

    private findNearestTime(value: TuiTime, items: readonly TuiTime[]): TuiTime | null {
        // eslint-disable-next-line no-restricted-syntax
        return items.reduce((previous, current) =>
            Math.abs(current.valueOf() - value.valueOf()) <
            Math.abs(previous.valueOf() - value.valueOf())
                ? current
                : previous,
        );
    }
}
