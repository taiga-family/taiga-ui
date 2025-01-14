import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoInitialCalibrationPlugin} from '@maskito/core';
import {
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    maskitoParseNumber,
} from '@maskito/kit';
import {TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {CHAR_HYPHEN, CHAR_MINUS, TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TUI_IS_IOS, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiIsSafeToRound} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldContent,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_NUMBER_OPTIONS} from './input-number.options';

const DEFAULT_MAX_LENGTH = 18;

@Component({
    standalone: true,
    selector: 'input[tuiInputNumber]',
    imports: [NgIf, TuiButton, TuiTextfieldContent],
    templateUrl: './input-number.template.html',
    styleUrls: ['./input-number.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiFallbackValueProvider(null),
        tuiValueTransformerFrom(TUI_INPUT_NUMBER_OPTIONS),
    ],
    hostDirectives: [TuiWithTextfield, MaskitoDirective],
    host: {
        '[value]': 'textfieldValue()',
        '[disabled]': 'disabled()',
        '[attr.inputMode]': 'inputMode()',
        '[attr.maxLength]': 'maxLength()',
        '(input)': 'textfieldValue.set(element.value)',
        '(blur)': 'onBlur()',
        '(focus)': 'onFocus()',
        '(keydown.arrowDown)': 'onStep(-step())',
        '(keydown.arrowUp)': 'onStep(step())',
        '[class._with-buttons]': 'step()',
    },
})
export class TuiInputNumber extends TuiControl<number | null> {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly numberFormat = toSignal(inject(TUI_NUMBER_FORMAT), {
        initialValue: TUI_DEFAULT_NUMBER_FORMAT,
    });

    private readonly precision = computed(() =>
        Number.isNaN(this.numberFormat().precision) ? 2 : this.numberFormat().precision,
    );

    private readonly isIntermediateState = computed(() => {
        const value = maskitoParseNumber(
            this.textfieldValue(),
            this.numberFormat().decimalSeparator,
        );

        return value < 0 ? value > this.max() : value < this.min();
    });

    protected readonly onChangeEffect = effect(() => {
        const value = maskitoParseNumber(
            this.textfieldValue(),
            this.numberFormat().decimalSeparator,
        );

        if (Number.isNaN(value)) {
            this.onChange(null);

            return;
        }

        if (
            this.isIntermediateState() ||
            value < this.min() ||
            value > this.max() ||
            this.value() === value
        ) {
            return;
        }

        this.onChange(value);
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);
    protected readonly min = signal(this.options.min);
    protected readonly max = signal(this.options.max);
    protected readonly step = signal(this.options.step);
    protected readonly prefix = signal(this.options.prefix);
    protected readonly postfix = signal(this.options.postfix);
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);
    protected readonly element = tuiInjectElement<HTMLInputElement>();
    protected readonly textfieldValue = signal(this.element.value || '');

    protected readonly inputMode = computed(() => {
        if (this.isIOS && this.min() < 0) {
            // iPhone does not have minus sign if inputMode is equal to 'numeric' / 'decimal'
            return 'text';
        }

        return this.precision() ? 'decimal' : 'numeric';
    });

    protected readonly maxLength = computed(() => {
        const {decimalSeparator, thousandSeparator} = this.numberFormat();
        const decimalPart =
            !!this.precision() && this.textfieldValue().includes(decimalSeparator);
        const precision = decimalPart ? Math.min(this.precision() + 1, 20) : 0;
        const takeThousand = thousandSeparator.repeat(5).length;

        return DEFAULT_MAX_LENGTH + precision + takeThousand;
    });

    protected readonly mask = tuiMaskito(
        computed(({decimalMode, ...numberFormat} = this.numberFormat()) =>
            this.computeMask({
                ...numberFormat,
                precision: this.precision(),
                min: this.min(),
                max: this.max(),
                prefix: this.prefix(),
                postfix: this.postfix(),
                decimalZeroPadding: decimalMode === 'always',
            }),
        ),
    );

    @Input('min')
    public set minSetter(x: number | null) {
        this.updateMinMaxLimits(x, this.max());
    }

    @Input('max')
    public set maxSetter(x: number | null) {
        this.updateMinMaxLimits(this.min(), x);
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

    // TODO(v5): replace with signal input
    @Input('step')
    public set stepSetter(x: number) {
        this.step.set(x);
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.textfieldValue.set(this.formatNumber(this.value()));
    }

    protected onBlur(): void {
        this.onTouched();

        if (!this.isIntermediateState()) {
            this.textfieldValue.set(this.formatNumber(this.value()));
        }
    }

    protected onFocus(): void {
        const value = maskitoParseNumber(
            this.textfieldValue(),
            this.numberFormat().decimalSeparator,
        );

        if (Number.isNaN(value) && !this.readOnly()) {
            this.textfieldValue.set(this.prefix() + this.postfix());
        }
    }

    protected onStep(step: number): void {
        this.textfieldValue.set(
            this.formatNumber(
                tuiClamp((this.value() ?? 0) + step, this.min(), this.max()),
            ),
        );
    }

    private formatNumber(value: number | null): string {
        if (value === null) {
            return '';
        }

        return (
            this.prefix() +
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
        const min =
            this.transformer?.fromControlValue(nullableMin) ??
            nullableMin ??
            this.options.min;
        const max =
            this.transformer?.fromControlValue(nullableMax) ??
            nullableMax ??
            this.options.max;

        this.min.set(Math.min(min, max));
        this.max.set(Math.max(min, max));
    }

    private computeMask(
        params: NonNullable<Parameters<typeof maskitoNumberOptionsGenerator>[0]>,
    ): MaskitoOptions {
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
