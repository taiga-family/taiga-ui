import {Directive, HostBinding, Input} from '@angular/core';
import {AbstractTuiControl, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {
    TuiPluralize,
    tuiPluralizeToICU,
    TuiSizeL,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function quantumAssertion(quantum: number): boolean {
    return quantum > 0;
}

/**
 * @internal
 * @deprecated TODO: 3.0 delete me after `InputSlider` and `InputRange` stop using it
 */
@Directive()
export abstract class AbstractTuiInputSlider<T>
    extends AbstractTuiControl<T>
    implements TuiWithOptionalMinMax<number>
{
    @Input()
    @tuiDefaultProp()
    min = 0;

    @Input()
    @tuiDefaultProp()
    max = Infinity;

    /**
     * @deprecated This input-property will be deleted in next major update.
     * Use `valueContent` for `InputSlider`.
     * Use `leftValueContent` for `InputRange`.
     * ___
     * TODO remove in v3.0.
     * Dont forget to delete backward-compatibility helpers inside `InputSlider` and `InputRange`:
     *** {@link legacyMinMaxLabel}
     */
    @Input()
    @tuiDefaultProp()
    minLabel = '';

    /**
     * @deprecated This input-property will be deleted in next major update.
     * Use `valueContent` for `InputSlider`.
     * Use `rightValueContent` for `InputRange`.
     * ___
     * TODO remove in v3.0.
     * Dont forget to delete backward-compatibility helpers inside `InputSlider` and `InputRange`:
     *** {@link legacyMinMaxLabel}
     */
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

    /**
     * @deprecated This input-property will be deleted in next major update.
     * You can create ticks labels below this input by yourself. It is easy!
     * Mixin `tui-slider-ticks-labels` will help with it. See examples in demo page `InputSlider`.
     * ___
     * TODO remove in v3.0.
     * Dont forget to delete:
     *** {@link segmentsPluralizeMap}
     *** {@link getTickPrefix}
     *** TuiFormatNumberPipeModule
     *** TuiRepeatTimesModule
     */
    @Input()
    @tuiDefaultProp()
    set segmentsPluralize(pluralize: TuiPluralize | Record<string, string> | null) {
        this.segmentsPluralizeMap = Array.isArray(pluralize)
            ? tuiPluralizeToICU(pluralize)
            : pluralize;
    }

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

    /**
     * @deprecated use `tuiTextfieldSize` instead
     * TODO delete in v3.0
     */
    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeL = 'l';

    /**
     * @deprecated replace by input-property {@link pluralize} in v3.0
     */
    pluralizeMap: Record<string, string> | null = null;
    /** @deprecated TODO remove in v3.0 */
    segmentsPluralizeMap: Record<string, string> | null = null;
    /** @deprecated TODO remove in v3.0 */
    readonly pluralizeMapFallback = {
        one: '',
        few: '',
        many: '',
        other: '',
    };

    /** @deprecated TODO remove in v3.0 */
    @tuiPure
    getTickPrefix(segment: number, segments: number, texts: [string, string]): string {
        if (segments !== 1) {
            return '';
        }

        return segment === 0 ? `${texts[0]}` : `${texts[1]}`;
    }

    @HostBinding('class._segmented')
    get segmented(): boolean {
        return this.segments > 0;
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

    get computedKeySteps(): TuiKeySteps {
        return this.computePureKeySteps(this.keySteps, this.min, this.max);
    }

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    @tuiPure
    private computePureKeySteps(
        keySteps: TuiKeySteps | null,
        min: number,
        max: number,
    ): TuiKeySteps {
        return [[0, min], ...(keySteps || []), [100, max]];
    }
}
