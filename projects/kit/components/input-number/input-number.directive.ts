import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoInitialCalibrationPlugin, type MaskitoOptions} from '@maskito/core';
import {
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    type MaskitoNumberParams,
    maskitoParseNumber,
} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {CHAR_HYPHEN, CHAR_MINUS, TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsSafeToRound} from '@taiga-ui/cdk/utils/math';
import {
    TuiTextfieldDirective,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_NUMBER_OPTIONS} from './input-number.options';

const DEFAULT_MAX_LENGTH = 18;

@Directive({
    standalone: true,
    selector: 'input[tuiInputNumber]',
    providers: [
        tuiAsControl(TuiInputNumberDirective),
        tuiValueTransformerFrom(TUI_INPUT_NUMBER_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, MaskitoDirective],
    host: {
        '[disabled]': 'disabled()',
        '[attr.inputMode]': 'inputMode()',
        '[attr.maxLength]':
            'element.maxLength > 0 ? element.maxLength : defaultMaxLength()',
        '(blur)': 'setValue(transformer.fromControlValue(control.value))',
        '(focus)': 'onFocus()',
    },
})
export class TuiInputNumberDirective extends TuiControl<number | null> {
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly numberFormat = toSignal(inject(TUI_NUMBER_FORMAT), {
        initialValue: TUI_DEFAULT_NUMBER_FORMAT,
    });

    private readonly formatted = computed(() =>
        maskitoParseNumber(this.textfield.value(), this.numberFormat()),
    );

    private readonly precision = computed(() =>
        Number.isNaN(this.numberFormat().precision) ? 2 : this.numberFormat().precision,
    );

    private readonly unfinished = computed((value = this.formatted()) =>
        value < 0 ? value > this.max() : value < this.min(),
    );

    protected readonly onChangeEffect = effect(() => {
        const value = this.formatted();

        if (Number.isNaN(value)) {
            this.onChange(null);

            return;
        }

        if (
            this.unfinished() ||
            value < this.min() ||
            value > this.max() ||
            this.value() === value
        ) {
            return;
        }

        this.onChange(value);
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly element = tuiInjectElement<HTMLInputElement>();

    protected readonly inputMode = computed(() => {
        if (this.isIOS) {
            return this.min() < 0
                ? 'text' // iPhone does not have minus sign if inputMode equals to 'numeric' / 'decimal'
                : 'decimal';
        }

        /**
         * Samsung Keyboard does not minus sign for `inputmode=decimal`
         * @see https://github.com/taiga-family/taiga-ui/issues/11061#issuecomment-2939103792
         */
        return 'numeric';
    });

    protected readonly defaultMaxLength = computed(() => {
        const {decimalSeparator, thousandSeparator} = this.numberFormat();
        const decimalPart =
            !!this.precision() && this.textfield.value().includes(decimalSeparator);
        const precision = decimalPart ? Math.min(this.precision() + 1, 20) : 0;
        const takeThousand = thousandSeparator.repeat(5).length;

        return DEFAULT_MAX_LENGTH + precision + takeThousand;
    });

    protected readonly mask = tuiMaskito(
        computed(
            (
                {decimalMode, ...numberFormat} = this.numberFormat(),
                maximumFractionDigits = this.precision(),
            ) =>
                this.computeMask({
                    ...numberFormat,
                    maximumFractionDigits,
                    min: this.min(),
                    max: this.max(),
                    prefix: this.prefix(),
                    postfix: this.postfix(),
                    minimumFractionDigits:
                        decimalMode === 'always' ? maximumFractionDigits : 0,
                }),
        ),
    );

    public readonly min = signal(this.options.min);
    public readonly max = signal(this.options.max);
    public readonly prefix = signal(this.options.prefix);
    public readonly postfix = signal(this.options.postfix);

    @Input('min')
    public set minSetter(x: number | null) {
        this.updateMinMaxLimits(this.transformer.fromControlValue(x), this.max());
    }

    @Input('max')
    public set maxSetter(x: number | null) {
        this.updateMinMaxLimits(this.min(), this.transformer.fromControlValue(x));
    }

    // TODO(v5): replace with signal input
    @Input('prefix')
    public set prefixSetter(x: string) {
        this.prefix.set(x);
    }

    // TODO(v5): replace with signal input
    @Input('postfix')
    public set postfixSetter(x: string) {
        this.postfix.set(x);
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.setValue(this.value());
    }

    public setValue(value: number | null): void {
        this.textfield.value.set(this.formatNumber(value));
    }

    protected onFocus(): void {
        if (Number.isNaN(this.formatted()) && !this.readOnly()) {
            this.textfield.value.set(this.prefix() + this.postfix());
        }
    }

    private formatNumber(value: number | null): string {
        if (value === null || Number.isNaN(value)) {
            return '';
        }

        return (
            (this.prefix() !== CHAR_MINUS ? this.prefix() : '') +
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
            }).replace(CHAR_HYPHEN, CHAR_MINUS) +
            this.postfix()
        );
    }

    private updateMinMaxLimits(
        nullableMin: number | null,
        nullableMax: number | null,
    ): void {
        const min = nullableMin ?? this.options.min;
        const max = nullableMax ?? this.options.max;

        this.min.set(Math.min(min, max));
        this.max.set(Math.max(min, max));
    }

    private computeMask(params: MaskitoNumberParams): MaskitoOptions {
        const {prefix = '', postfix = ''} = params;
        const {plugins, ...options} = maskitoNumberOptionsGenerator(params);
        const initialCalibrationPlugin = maskitoInitialCalibrationPlugin(
            maskitoNumberOptionsGenerator({
                ...params,
                min: Number.MIN_SAFE_INTEGER,
                max: Number.MAX_SAFE_INTEGER,
            }),
        );

        return {
            ...options,
            plugins: [
                ...plugins,
                initialCalibrationPlugin,
                maskitoCaretGuard((value) => [
                    prefix.length,
                    value.length - postfix.length,
                ]),
            ],
        };
    }
}
