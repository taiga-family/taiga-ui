import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocused, tuiIsNativeFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiClamp, tuiRound} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiGetFractionPartPadded} from '@taiga-ui/core/utils/format';
import {TuiRangeComponent} from '@taiga-ui/kit/components/range';
import type {TuiKeySteps} from '@taiga-ui/kit/components/slider';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/components/slider';
import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiInputNumberComponent} from '@taiga-ui/legacy/components/input-number';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/legacy/directives';
import type {
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-input-range',
    templateUrl: './input-range.template.html',
    styleUrls: ['./input-range.style.less'],
    host: {
        '[attr.data-size]': 'controller.size',
        '[class._label-outside]': 'controller.labelOutside',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputRangeComponent),
        tuiAsControl(TuiInputRangeComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputRangeComponent
    extends AbstractTuiControl<[number, number]>
    implements TuiFocusableElementAccessor
{
    @ViewChildren(TuiInputNumberComponent)
    private readonly inputNumberRefs: QueryList<TuiInputNumberComponent> = EMPTY_QUERY;

    @ViewChild(TuiRangeComponent, {read: ElementRef})
    private readonly range?: ElementRef<HTMLElement>;

    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly el = tuiInjectElement();

    protected leftTextfieldValue = this.safeCurrentValue[0];
    protected rightTextfieldValue = this.safeCurrentValue[1];
    protected lastActiveSide: 'left' | 'right' = 'left';
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);

    @Input()
    public min = 0;

    @Input()
    public max = 100;

    @Input()
    public quantum = 1;

    @Input()
    public steps = 0;

    @Input()
    public segments = 1;

    @Input()
    public keySteps: TuiKeySteps | null = null;

    @Input()
    public leftValueContent: PolymorpheusContent<TuiContext<number>>;

    @Input()
    public rightValueContent: PolymorpheusContent<TuiContext<number>>;

    @Input()
    public pluralize: Record<string, string> | null = null;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.disabled
            ? null
            : this.leftFocusableElement || this.rightFocusableElement;
    }

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    public override writeValue(value: [number, number]): void {
        super.writeValue(value);
        this.updateTextfieldValues(this.value);
    }

    protected get leftFocusableElement(): HTMLInputElement | null {
        return this.inputNumberRefs.first?.nativeFocusableElement || null;
    }

    protected get rightFocusableElement(): HTMLInputElement | null {
        return this.inputNumberRefs.last?.nativeFocusableElement || null;
    }

    protected get appearance(): string {
        return this.controller.appearance;
    }

    protected get showLeftValueContent(): boolean {
        return Boolean(
            this.leftValueContent &&
                !tuiIsNativeFocused(this.leftFocusableElement) &&
                !(
                    tuiIsNativeFocusedIn(this.range?.nativeElement) &&
                    this.lastActiveSide === 'left'
                ),
        );
    }

    protected get showRightValueContent(): boolean {
        return Boolean(
            this.rightValueContent &&
                !tuiIsNativeFocused(this.rightFocusableElement) &&
                !(
                    tuiIsNativeFocusedIn(this.range?.nativeElement) &&
                    this.lastActiveSide === 'right'
                ),
        );
    }

    protected get precision(): number {
        return tuiGetFractionPartPadded(this.quantum).length;
    }

    protected get computedSteps(): number {
        return this.steps || (this.max - this.min) / this.quantum;
    }

    protected get step(): number {
        return (this.max - this.min) / this.computedSteps;
    }

    @tuiPure
    protected computeKeySteps(
        keySteps: TuiKeySteps | null,
        min: number,
        max: number,
    ): TuiKeySteps {
        return (
            keySteps || [
                [0, min],
                [100, max],
            ]
        );
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected onTextInputFocused(focused: boolean): void {
        if (!focused) {
            this.updateTextfieldValues(this.value);
        }
    }

    protected changeByStep(
        event: Event | KeyboardEvent,
        [leftCoefficient, rightCoefficient]: [number, number],
    ): void {
        if (this.readOnly) {
            return;
        }

        event.preventDefault();

        const newValue = this.valueGuard([
            this.value[0] + leftCoefficient * this.step,
            this.value[1] + rightCoefficient * this.step,
        ]);

        if (newValue[0] !== this.value[0] || newValue[1] !== this.value[1]) {
            this.onExternalValueUpdate(newValue);
        }
    }

    protected onInputLeft(value: number | null): void {
        this.safelyUpdateValue([value ?? this.safeCurrentValue[0], this.value[1]]);
    }

    protected onInputRight(value: number | null): void {
        this.safelyUpdateValue([this.value[0], value ?? this.safeCurrentValue[1]]);
    }

    protected onExternalValueUpdate(value: [number, number]): void {
        this.safelyUpdateValue(value);
        this.updateTextfieldValues(this.value);
    }

    protected focusToTextInput(): void {
        const element =
            this.lastActiveSide === 'left'
                ? this.leftFocusableElement
                : this.rightFocusableElement;

        if (!this.isMobile && element) {
            element.focus();
        }
    }

    protected onActiveThumbChange(activeThumb: 'left' | 'right'): void {
        this.lastActiveSide = activeThumb;
    }

    protected getFallbackValue(): [number, number] {
        return [0, 0];
    }

    private safelyUpdateValue(value: [number, number]): void {
        this.value = this.valueGuard(value);
    }

    private valueGuard([leftValue, rightValue]: [number, number]): [number, number] {
        const leftCalibratedValue = this.calibrate(leftValue);
        const rightCalibratedValue = this.calibrate(rightValue);

        return [
            Math.min(leftCalibratedValue, this.value[1]),
            Math.max(rightCalibratedValue, this.value[0]),
        ];
    }

    private calibrate(value: number): number {
        const roundedValue = tuiRound(
            Math.round(value / this.quantum) * this.quantum,
            TUI_FLOATING_PRECISION,
        );

        return tuiClamp(roundedValue, this.min, this.max);
    }

    private updateTextfieldValues([leftValue, rightValue]: [number, number]): void {
        this.leftTextfieldValue = leftValue;
        this.rightTextfieldValue = rightValue;
    }
}
