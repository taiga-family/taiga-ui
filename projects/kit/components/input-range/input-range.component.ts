import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {
    AbstractTuiControl,
    EMPTY_QUERY,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiIsNativeFocusedIn,
    TuiNativeFocusableElement,
    tuiPure,
    tuiRound,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiDecimal,
    tuiGetFractionPartPadded,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiInputNumberComponent} from '@taiga-ui/kit/components/input-number';
import {TuiRangeComponent} from '@taiga-ui/kit/components/range';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChildren(TuiInputNumberComponent)
    private readonly inputNumberRefs: QueryList<TuiInputNumberComponent> = EMPTY_QUERY;

    @ViewChild(TuiRangeComponent)
    private readonly rangeRef: TuiRangeComponent | null = null;

    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly el: Element = inject(ElementRef).nativeElement;

    @Input()
    min = 0;

    @Input()
    max = 100;

    @Input()
    quantum = 1;

    @Input()
    steps = 0;

    @Input()
    segments = 1;

    @Input()
    keySteps: TuiKeySteps | null = null;

    @Input()
    leftValueContent: PolymorpheusContent<TuiContext<number>>;

    @Input()
    rightValueContent: PolymorpheusContent<TuiContext<number>>;

    @Input()
    pluralize: Record<string, string> | null = null;

    leftTextfieldValue = this.safeCurrentValue[0];
    rightTextfieldValue = this.safeCurrentValue[1];
    lastActiveSide: 'left' | 'right' = 'left';

    readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);

    get leftFocusableElement(): HTMLInputElement | null {
        return this.inputNumberRefs.first?.nativeFocusableElement || null;
    }

    get rightFocusableElement(): HTMLInputElement | null {
        return this.inputNumberRefs.last?.nativeFocusableElement || null;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.disabled
            ? null
            : this.leftFocusableElement || this.rightFocusableElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    get appearance(): string {
        return this.controller.appearance;
    }

    get showLeftValueContent(): boolean {
        return Boolean(
            this.leftValueContent &&
                !tuiIsNativeFocused(this.leftFocusableElement) &&
                !(this.rangeRef?.focused && this.lastActiveSide === 'left'),
        );
    }

    get showRightValueContent(): boolean {
        return Boolean(
            this.rightValueContent &&
                !tuiIsNativeFocused(this.rightFocusableElement) &&
                !(this.rangeRef?.focused && this.lastActiveSide === 'right'),
        );
    }

    get precision(): number {
        return tuiGetFractionPartPadded(this.quantum).length;
    }

    get decimal(): TuiDecimal {
        return this.precision ? 'not-zero' : 'never';
    }

    get computedSteps(): number {
        return this.steps || (this.max - this.min) / this.quantum;
    }

    get step(): number {
        return (this.max - this.min) / this.computedSteps;
    }

    @tuiPure
    computeKeySteps(keySteps: TuiKeySteps | null, min: number, max: number): TuiKeySteps {
        return (
            keySteps || [
                [0, min],
                [100, max],
            ]
        );
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    onTextInputFocused(focused: boolean): void {
        if (!focused) {
            this.updateTextfieldValues(this.value);
        }
    }

    changeByStep(
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

    onInputLeft(value: number | null): void {
        this.safelyUpdateValue([value ?? this.safeCurrentValue[0], this.value[1]]);
    }

    onInputRight(value: number | null): void {
        this.safelyUpdateValue([this.value[0], value ?? this.safeCurrentValue[1]]);
    }

    onExternalValueUpdate(value: [number, number]): void {
        this.safelyUpdateValue(value);
        this.updateTextfieldValues(this.value);
    }

    focusToTextInput(): void {
        const element =
            this.lastActiveSide === 'left'
                ? this.leftFocusableElement
                : this.rightFocusableElement;

        if (!this.isMobile && element) {
            element.focus();
        }
    }

    onActiveThumbChange(activeThumb: 'left' | 'right'): void {
        this.lastActiveSide = activeThumb;
    }

    override writeValue(value: [number, number]): void {
        super.writeValue(value);
        this.updateTextfieldValues(this.value);
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
