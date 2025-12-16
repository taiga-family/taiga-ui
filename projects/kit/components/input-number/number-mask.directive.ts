import {computed, Directive, effect, inject, input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions, maskitoTransform} from '@maskito/core';
import {
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    type MaskitoNumberParams,
    maskitoStringifyNumber,
} from '@maskito/kit';
import {TuiInputDirective} from '@taiga-ui/core/components/input';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {
    TUI_INPUT_NUMBER_OPTIONS,
    type TuiInputNumberOptions,
} from './input-number.options';

@Directive({hostDirectives: [MaskitoDirective]})
export class TuiNumberMask {
    private readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);
    private readonly numberFormat = inject(TUI_NUMBER_FORMAT);
    private readonly input = inject(TuiInputDirective);

    public readonly prefix = input(this.options.prefix);
    public readonly postfix = input(this.options.postfix);
    public readonly maximumFractionDigits = computed(
        (precision = this.numberFormat().precision) =>
            Number.isNaN(precision) ? 2 : precision,
    );

    public readonly min = input<
        TuiInputNumberOptions['min'],
        TuiInputNumberOptions['min'] | null
    >(this.options.min, {
        transform: (x) => x ?? this.options.min,
    });

    public readonly max = input<
        TuiInputNumberOptions['max'],
        TuiInputNumberOptions['max'] | null
    >(this.options.max, {
        transform: (x) => x ?? this.options.max,
    });

    public readonly params = computed(() => {
        const {decimalMode, ...numberFormat} = this.numberFormat();
        const maximumFractionDigits = this.maximumFractionDigits();

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
    });

    protected readonly mask = tuiMaskito(computed(() => this.computeMask(this.params())));

    protected maskInitialCalibration = effect(() => {
        const options = maskitoNumberOptionsGenerator({
            ...this.params(),
            min: -Infinity,
            max: Infinity,
        });

        this.input.value.update((x) => maskitoTransform(x, options));
    });

    public stringify(value: bigint | number | null | undefined): string {
        const params = this.params();

        return maskitoStringifyNumber(value ?? null, {
            ...params,
            minimumFractionDigits:
                String(value).includes(params.decimalSeparator) &&
                this.numberFormat().decimalMode !== 'not-zero'
                    ? params.maximumFractionDigits
                    : 0,
        });
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

@Directive({
    hostDirectives: [
        {
            directive: TuiNumberMask,
            inputs: ['min', 'max', 'prefix', 'postfix'],
        },
    ],
})
export class TuiWithNumberMask {}
