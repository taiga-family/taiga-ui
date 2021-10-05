import {Directive, HostBinding, Input} from '@angular/core';
import {
    AbstractTuiControl,
    clamp,
    round,
    tuiDefaultProp,
    TuiInputModeT,
    TuiMapper,
} from '@taiga-ui/cdk';
import {
    maskedNumberStringToNumber,
    NumberFormatSettings,
    TuiBrightness,
    tuiCreateAutoCorrectedNumberPipe,
    tuiCreateNumberMask,
    TuiModeDirective,
    TuiPluralize,
    tuiPluralizeToICU,
    TuiSizeL,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TuiKeySteps} from '@taiga-ui/kit/types';

export function quantumAssertion(quantum: number): boolean {
    return quantum > 0;
}

/**
 * @internal
 */
@Directive()
export abstract class AbstractTuiInputSlider<T>
    extends AbstractTuiControl<T>
    implements TuiWithOptionalMinMax<number> {
    @Input()
    @tuiDefaultProp()
    min = 0;

    @Input()
    @tuiDefaultProp()
    max = Infinity;

    @Input()
    @tuiDefaultProp()
    minLabel = '';

    @Input()
    @tuiDefaultProp()
    maxLabel = '';

    // TODO: remove setter in v3.0:
    @Input()
    @tuiDefaultProp()
    set pluralize(pluralize: TuiPluralize | Record<string, string> | null) {
        this.pluralizeMap = Array.isArray(pluralize)
            ? tuiPluralizeToICU(pluralize)
            : pluralize;
    }

    @Input()
    @tuiDefaultProp()
    segmentsPluralize: TuiPluralize | null = null;

    @Input()
    @tuiDefaultProp()
    segments = 0;

    @Input()
    @tuiDefaultProp()
    steps = 0;

    @Input()
    @tuiDefaultProp(quantumAssertion, 'Quantum must be positive')
    quantum = 1;

    @Input()
    @tuiDefaultProp()
    keySteps: TuiKeySteps | null = null;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    size: TuiSizeL = 'l';

    mask: TuiMapper<number, TuiTextMaskOptions> = (quantum: number, min: number) => ({
        mask: tuiCreateNumberMask({
            allowNegative: min < 0,
            allowDecimal: !Number.isInteger(quantum),
            decimalSymbol: this.numberFormat.decimalSeparator,
            thousandSymbol: this.numberFormat.thousandSeparator,
        }),
        pipe: tuiCreateAutoCorrectedNumberPipe(
            0,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        ),
        guide: false,
    });

    pluralizeMap: Record<string, string> | null = null;

    protected abstract readonly modeDirective: TuiModeDirective | null;

    protected abstract readonly numberFormat: NumberFormatSettings;

    @HostBinding('class._segmented')
    get segmented(): boolean {
        return this.segments > 0;
    }

    get hasPlaceholder(): boolean {
        return this.size === 'l';
    }

    get inputMode(): TuiInputModeT {
        return Number.isInteger(this.quantum) ? 'numeric' : 'decimal';
    }

    get length(): number {
        return this.max - this.min;
    }

    get computedSteps(): number {
        return this.steps || this.length / this.quantum;
    }

    get step(): number {
        return this.length / this.computedSteps;
    }

    @HostBinding('attr.data-mode')
    get hostMode(): TuiBrightness | null {
        return this.modeDirective && this.modeDirective.mode;
    }

    abstract get showMinLabel(): boolean;

    abstract get showMaxLabel(): boolean;

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    protected valueGuard(value: number): number {
        return this.quantum
            ? clamp(
                  round(
                      Math.round(value / this.quantum) * this.quantum,
                      TUI_FLOATING_PRECISION,
                  ),
                  this.min,
                  this.max,
              )
            : clamp(value, this.min, this.max);
    }

    protected capInputValue(value: string, max: number = this.max): number | null {
        const capped = Math.min(
            maskedNumberStringToNumber(
                value,
                this.numberFormat.decimalSeparator,
                this.numberFormat.thousandSeparator,
            ),
            max,
        );

        if (this.min < 0 && capped < this.min) {
            return this.min;
        }

        return isNaN(capped) || capped < this.min ? null : capped;
    }
}
