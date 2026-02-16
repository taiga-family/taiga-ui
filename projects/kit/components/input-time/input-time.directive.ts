import {computed, Directive, inject, input, untracked} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {
    maskitoAddOnFocusPlugin,
    maskitoCaretGuard,
    maskitoRemoveOnBlurPlugin,
    maskitoSelectionChangeHandler,
    type MaskitoTimeMode,
    maskitoTimeOptionsGenerator,
    type MaskitoTimeParams,
} from '@maskito/kit';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TuiTime} from '@taiga-ui/cdk/date-time';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {
    tuiAsTextfieldAccessor,
    type TuiTextfieldAccessor,
    TuiTextfieldComponent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {
    TuiDropdownDirective,
    tuiDropdownEnabled,
    TuiDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';
import {TUI_TIME_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_TIME_OPTIONS} from './input-time.options';

@Directive({
    selector: 'input[tuiInputTime]',
    providers: [
        tuiAsControl(TuiInputTimeDirective),
        tuiAsTextfieldAccessor(TuiInputTimeDirective),
        tuiValueTransformerFrom(TUI_INPUT_TIME_OPTIONS),
        tuiAsOptionContent(TuiSelectOption),
    ],
    hostDirectives: [TuiWithInput, MaskitoDirective],
    host: {
        inputmode: 'numeric',
        '[disabled]': 'disabled()',
        '(click)': 'toggle()',
        '(input)': 'onInput($event.target.value)',
        '(blur)': 'onBlur($event.target.value)',
    },
})
export class TuiInputTimeDirective
    extends TuiControl<TuiTime | null>
    implements TuiTextfieldAccessor<TuiTime | null>
{
    private readonly input = inject(TuiInputDirective);
    private readonly dropdown = inject(TuiDropdownDirective);
    private readonly open = inject(TuiDropdownOpen).open;
    private readonly options = inject(TUI_INPUT_TIME_OPTIONS);
    private readonly fillers = inject(TUI_TIME_TEXTS);
    protected readonly icon = tuiIconEnd(this.options.icon);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly filler = tuiDirectiveBinding(
        TuiTextfieldComponent,
        'filler',
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
                step: this.interactive() && !this.dropdown.content() ? 1 : 0,
                prefix: this.prefix(),
                postfix: this.postfix(),
            }),
        ),
    );

    public readonly accept = input<readonly TuiTime[]>([]);
    public readonly timeMode = input<MaskitoTimeMode>(this.options.mode, {alias: 'mode'});
    public readonly prefix = input('');
    public readonly postfix = input('');
    public readonly native =
        !!inject(TuiWithNativePicker, {optional: true}) && inject(WA_IS_MOBILE);

    public setValue(value: TuiTime | null): void {
        this.onChange(value);

        if (value) {
            this.input.value.set(this.stringify(value));
        } else {
            this.input.setValue(value);
        }

        if (!value && this.dropdownEnabled()) {
            this.open.set(true);
        }
    }

    public override writeValue(value: TuiTime | null): void {
        const reset = this.control.pristine && this.control.untouched && !value;
        const changed = untracked(() => value !== this.value());

        if (changed || reset) {
            super.writeValue(value);
            untracked(() => this.input.value.set(this.stringify(this.value())));
        }
    }

    protected onInput(valueWithAffixes: string): void {
        const value = valueWithAffixes
            .replace(this.prefix(), '')
            .replace(this.postfix(), '');
        const time =
            value.length === this.timeMode().length ? TuiTime.fromString(value) : null;
        const newValue =
            this.accept().length && time
                ? this.findNearestTime(time, this.accept())
                : time;

        this.control?.control?.updateValueAndValidity({emitEvent: false});
        this.onChange(newValue);

        if (newValue && newValue !== time) {
            this.input.value.set(this.stringify(newValue));
        }
    }

    protected toggle(): void {
        this.open.update((x) => !x);
    }

    protected onBlur(valueWithAffixes: string): void {
        const value = valueWithAffixes
            .replace(this.prefix(), '')
            .replace(this.postfix(), '');

        if (value && !this.value()) {
            const time = TuiTime.fromString(value);

            const newValue = this.accept().length
                ? this.findNearestTime(time, this.accept())
                : time;

            this.control?.control?.updateValueAndValidity({emitEvent: false});
            this.onChange(newValue);

            if (newValue) {
                this.input.value.set(this.stringify(newValue));
            }
        }
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
