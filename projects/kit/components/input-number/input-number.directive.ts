import {computed, Directive, effect, inject, untracked} from '@angular/core';
import {maskitoParseNumber} from '@maskito/kit';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';

import {TuiNumberMask, TuiWithNumberMask} from './number-mask.directive';
import {TuiNumberValueTransformer} from './transformers/number.value-transformer';

const DEFAULT_MAX_LENGTH = 18;

@Directive({
    selector: 'input[tuiInputNumber]',
    providers: [tuiAsControl(TuiInputNumberDirective)],
    hostDirectives: [TuiWithInput, TuiWithNumberMask, TuiNumberValueTransformer],
    host: {
        '[disabled]': 'disabled()',
        '[attr.inputMode]': 'inputMode()',
        '[attr.maxLength]':
            'element.maxLength > 0 ? element.maxLength : defaultMaxLength()',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
    },
})
export class TuiInputNumberDirective extends TuiControl<string> {
    private readonly mask = inject(TuiNumberMask);
    private readonly input = inject(TuiInputDirective);
    private readonly isIOS = inject(WA_IS_IOS);

    protected readonly element = tuiInjectElement<HTMLInputElement>();

    protected readonly inputMode = computed(() => {
        if (this.isIOS) {
            return this.mask.min() < 0
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
        const {
            decimalSeparator,
            thousandSeparator,
            maximumFractionDigits,
            prefix,
            postfix,
            min,
            max,
        } = this.mask.params();

        if (!Number.isFinite(min) || !Number.isFinite(max)) {
            return -1;
        }

        const decimalPart =
            !!maximumFractionDigits && this.input.value().includes(decimalSeparator);
        const precision = decimalPart ? Math.min(maximumFractionDigits + 1, 20) : 0;
        const takeThousand = thousandSeparator.repeat(5).length;
        const affixes = prefix.length + postfix.length;

        return DEFAULT_MAX_LENGTH + precision + takeThousand + affixes;
    });

    public readonly parsed = computed(() => this.parse(this.input.value()));

    protected readonly onChangeEffect = effect(() => {
        const changed = !Object.is(
            this.input.value().replaceAll(/\D/g, ''),
            untracked(() => this.value()?.replaceAll(/\D/g, '')) ?? '',
        );
        const value = this.parsed();
        const valid =
            Number.isNaN(value) || (value >= this.mask.min() && value <= this.mask.max());

        if (changed && valid) {
            this.onChange(this.input.value());
        }
    });

    public override writeValue(value: any): void {
        const reset = this.control.pristine && this.control.untouched && !value;
        const changed = untracked(
            () => value !== this.transformer.toControlValue(this.value()),
        );

        if (changed || reset) {
            super.writeValue(value);
            untracked(() => this.input.value.set(this.value()));
        }
    }

    public setValue(value: bigint | number | string | null): void {
        this.input.value.set(
            typeof value === 'string' ? value : this.mask.stringify(value),
        );
    }

    protected onFocus(): void {
        if (!this.input.value() && !this.readOnly()) {
            this.input.value.set(this.mask.prefix() + this.mask.postfix());
        }
    }

    protected onBlur(): void {
        setTimeout(() =>
            this.setValue(this.transformer.fromControlValue(this.control.value)),
        );
    }

    private parse(value: string): bigint | number {
        const params = this.mask.params();
        const possibleTooBig =
            !Number.isFinite(this.mask.min()) || !Number.isFinite(this.mask.max());

        return (
            maskitoParseNumber(value, {
                ...params,
                bigint: !value.includes(params.decimalSeparator) && possibleTooBig,
            }) ?? NaN
        );
    }
}
