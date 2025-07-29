import {computed, Directive, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import type {MaskitoTimeMode, MaskitoTimeParams} from '@maskito/kit';
import {
    maskitoAddOnFocusPlugin,
    maskitoCaretGuard,
    maskitoRemoveOnBlurPlugin,
    maskitoSelectionChangeHandler,
    maskitoTimeOptionsGenerator,
} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TuiTime} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    tuiTextfieldIconBinding,
    TuiWithNativePicker,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownDirective,
    tuiDropdownEnabled,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
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
        inputmode: 'numeric',
        '[disabled]': 'disabled()',
        '(click)': 'toggle()',
        '(input)': 'onInput($event.target.value)',
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
    private readonly prefix = signal('');
    private readonly postfix = signal('');

    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_TIME_OPTIONS);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly filler = tuiDirectiveBinding(
        TuiTextfieldComponent,
        'fillerSetter',
        computed((filler = this.fillers()?.[this.timeMode()] ?? '') =>
            this.postfix() ? '' : this.prefix() + filler,
        ),
        {},
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            this.computeMask({
                ...this.options,
                mode: this.timeMode(),
                step: this.interactive() && !this.dropdown._content() ? 1 : 0,
                prefix: this.prefix(),
                postfix: this.postfix(),
            }),
        ),
    );

    @Input()
    public accept: readonly TuiTime[] = [];

    public readonly native =
        !!inject(TuiWithNativePicker, {optional: true}) && inject(TUI_IS_MOBILE);

    public readonly timeMode = signal(this.options.mode);

    // TODO(v5): use signal inputs
    @Input('mode')
    public set modeSetter(x: MaskitoTimeMode) {
        this.timeMode.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('prefix')
    public set prefixSetter(x: string) {
        this.prefix.set(x);
    }

    // TODO(v5): use signal inputs
    @Input('postfix')
    public set postfixSetter(x: string) {
        this.postfix.set(x);
    }

    public setValue(value: TuiTime | null): void {
        this.onChange(value);

        if (value) {
            this.textfield.value.set(this.stringify(value));
        } else {
            this.textfield.setValue(value);
        }

        if (!value && this.dropdownEnabled()) {
            this.open.set(true);
        }
    }

    public override writeValue(value: TuiTime | null): void {
        super.writeValue(value);
        this.textfield.value.set(this.stringify(this.value()));
    }

    protected onInput(valueWithAffixes: string): void {
        const value = valueWithAffixes
            .replace(this.prefix(), '')
            .replace(this.postfix(), '');
        const time =
            value.length === this.timeMode().length ? TuiTime.fromString(value) : null;
        const newValue =
            this.accept.length && time ? this.findNearestTime(time, this.accept) : time;

        this.control?.control?.updateValueAndValidity({emitEvent: false});
        this.onChange(newValue);

        if (newValue && newValue !== time) {
            this.textfield.value.set(this.stringify(newValue));
        }
    }

    protected toggle(): void {
        this.open.update((x) => !x);
    }

    private computeMask(params: Required<MaskitoTimeParams>): MaskitoOptions {
        const options = maskitoTimeOptionsGenerator(params);
        const {mode, prefix, postfix} = params;
        const inputModeSwitchPlugin = maskitoSelectionChangeHandler((element) => {
            element.inputMode =
                element.selectionStart! >= mode.indexOf(' AA') ? 'text' : 'numeric';
        });
        const caretGuardPlugin = maskitoCaretGuard((value) => [
            prefix.length,
            value.length - postfix.length,
        ]);

        return {
            ...options,
            plugins: options.plugins.concat(
                caretGuardPlugin,
                maskitoAddOnFocusPlugin(prefix + postfix),
                maskitoRemoveOnBlurPlugin(prefix + postfix),
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

    private stringify(time: TuiTime | null): string {
        return this.prefix() + (time?.toString(this.timeMode()) || '') + this.postfix();
    }
}
