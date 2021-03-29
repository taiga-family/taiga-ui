import {Directive, HostBinding, Input} from '@angular/core';
import {
    AbstractTuiControl,
    clamp,
    round,
    tuiDefaultProp,
    TuiInputMode,
    TuiMapper,
} from '@taiga-ui/cdk';
import {
    maskedNumberStringToNumber,
    TuiBrightness,
    tuiCreateAutoCorrectedNumberPipe,
    tuiCreateNumberMask,
    TuiModeDirective,
    TuiPluralize,
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

    @Input()
    @tuiDefaultProp()
    pluralize: TuiPluralize | null = null;

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
        }),
        pipe: tuiCreateAutoCorrectedNumberPipe(),
        guide: false,
    });

    protected abstract readonly modeDirective: TuiModeDirective | null;

    @HostBinding('class._segmented')
    get segmented(): boolean {
        return this.segments > 0;
    }

    get hasPlaceholder(): boolean {
        return this.size === 'l';
    }

    get inputMode(): TuiInputMode {
        return Number.isInteger(this.quantum)
            ? TuiInputMode.Numeric
            : TuiInputMode.Decimal;
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

    isPluralized(pluralize: TuiPluralize | null): pluralize is TuiPluralize {
        return pluralize !== null && pluralize.length === 3;
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
        const capped = Math.min(maskedNumberStringToNumber(value), max);

        if (this.min < 0 && capped < this.min) {
            return this.min;
        }

        return isNaN(capped) || capped < this.min ? null : capped;
    }
}
