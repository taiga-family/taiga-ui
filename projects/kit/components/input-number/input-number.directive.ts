import {computed, Directive, effect, inject, input, untracked} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions, maskitoTransform} from '@maskito/core';
import {
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    type MaskitoNumberParams,
    maskitoParseNumber,
} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {CHAR_HYPHEN} from '@taiga-ui/cdk/constants';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsSafeToRound} from '@taiga-ui/cdk/utils/math';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_NUMBER_OPTIONS} from './input-number.options';

const DEFAULT_MAX_LENGTH = 18;

@Directive({
    selector: 'input[tuiInputNumber]',
    providers: [
        tuiAsControl(TuiInputNumberDirective),
        tuiValueTransformerFrom(TUI_INPUT_NUMBER_OPTIONS),
    ],
    hostDirectives: [TuiWithInput, MaskitoDirective],
    host: {
        '[disabled]': 'disabled()',
        '[attr.inputMode]': 'inputMode()',
        '[attr.maxLength]':
            'element.maxLength > 0 ? element.maxLength : defaultMaxLength()',
        '(focusout)': 'setValue(transformer.fromControlValue(control.value))',
        '(focus)': 'onFocus()',
    },
})
export class TuiInputNumberDirective extends TuiControl<number | null> {
    private readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);
    private readonly input = inject(TuiInputDirective);
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly numberFormat = inject(TUI_NUMBER_FORMAT);

    private readonly formatted = computed(() =>
        maskitoParseNumber(this.input.value(), this.maskParams),
    );

    private readonly precision = computed((precision = this.numberFormat().precision) =>
        Number.isNaN(precision) ? 2 : precision,
    );

    private readonly unfinished = computed((value = this.formatted()) =>
        value < 0 ? value > this.max() : value < this.min(),
    );

    protected readonly element = tuiInjectElement<HTMLInputElement>();
    protected readonly mask = tuiMaskito(
        computed(() => this.computeMask(this.maskParams)),
    );

    protected readonly inputMode = computed(() => {
        if (this.isIOS) {
            return this.min() < 0
                ? 'text' // iPhone does not have minus sign if inputMode is equal to 'numeric' / 'decimal'
                : 'decimal';
        }

        /**
         * Samsung Keyboard does not have minus sign for `inputmode=decimal`
         * @see https://github.com/taiga-family/taiga-ui/issues/11061#issuecomment-2939103792
         */
        return 'numeric';
    });

    protected readonly defaultMaxLength = computed(() => {
        const {decimalSeparator, thousandSeparator} = this.numberFormat();
        const decimalPart =
            !!this.precision() && this.input.value().includes(decimalSeparator);
        const precision = decimalPart ? Math.min(this.precision() + 1, 20) : 0;
        const takeThousand = thousandSeparator.repeat(5).length;
        const affixes = this.prefix().length + this.postfix().length;

        return DEFAULT_MAX_LENGTH + precision + takeThousand + affixes;
    });

    protected readonly onChangeEffect = effect(() => {
        const value = this.formatted();

        if (Number.isNaN(value) && !Number.isNaN(this.value())) {
            this.onChange(null);

            return;
        }

        if (
            this.unfinished() ||
            value < this.min() ||
            value > this.max() ||
            Object.is(this.value(), value)
        ) {
            return;
        }

        this.onChange(value);
    });

    protected maskInitialCalibrationEffect = effect(() => {
        const options = maskitoNumberOptionsGenerator({
            ...this.maskParams,
            min: Number.MIN_SAFE_INTEGER,
            max: Number.MAX_SAFE_INTEGER,
        });

        this.input.value.update((x) => maskitoTransform(x, options));
    });

    public readonly min = input<number, number | null>(this.options.min, {
        transform: (x) => x ?? this.options.min,
    });

    public readonly max = input<number, number | null>(this.options.max, {
        transform: (x) => x ?? this.options.max,
    });

    public readonly prefix = input(this.options.prefix);
    public readonly postfix = input(this.options.postfix);

    public override writeValue(value: number | null): void {
        const reset = this.control.pristine && this.control.untouched && !value;
        const changed = untracked(() => value !== this.value());

        if (changed || reset) {
            super.writeValue(value);
            untracked(() => this.setValue(this.value()));
        }
    }

    public setValue(value: number | null): void {
        this.input.value.set(this.formatNumber(value));
    }

    protected onFocus(): void {
        if (Number.isNaN(this.formatted()) && !this.readOnly()) {
            this.input.value.set(this.prefix() + this.postfix());
        }
    }

    private get maskParams(): MaskitoNumberParams {
        const {decimalMode, ...numberFormat} = this.numberFormat();
        const maximumFractionDigits = this.precision();

        return {
            ...numberFormat,
            ...this.options,
            maximumFractionDigits,
            min: this.min(),
            max: this.max(),
            prefix: this.prefix(),
            postfix: this.postfix(),
            minimumFractionDigits: decimalMode === 'always' ? maximumFractionDigits : 0,
        } as const satisfies MaskitoNumberParams;
    }

    private formatNumber(value: number | null): string {
        if (value === null || Number.isNaN(value)) {
            return '';
        }

        const minus = this.options.minusSign;

        return (
            (this.prefix() !== minus ? this.prefix() : '') +
            tuiFormatNumber(value, {
                ...this.numberFormat(),
                /**
                 * Number can satisfy interval [Number.MIN_SAFE_INTEGER; Number.MAX_SAFE_INTEGER]
                 * but its rounding can violate it.
                 * Before BigInt support there is no perfect solution – only trade off.
                 * No rounding is better than lose precision and incorrect mutation of already valid value.
                 */
                precision: tuiIsSafeToRound(value, this.precision())
                    ? this.precision()
                    : Infinity,
            }).replace(CHAR_HYPHEN, minus) +
            this.postfix()
        );
    }

    private computeMask(params: MaskitoNumberParams): MaskitoOptions {
        const {prefix = '', postfix = ''} = params;
        const {plugins, ...options} = maskitoNumberOptionsGenerator(params);

        return {
            ...options,
            plugins: [
                ...plugins,
                maskitoCaretGuard((value) => [
                    prefix.length,
                    value.length - postfix.length,
                ]),
            ],
        };
    }
}
