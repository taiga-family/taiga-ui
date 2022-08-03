import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    Optional,
    QueryList,
    Self,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    EMPTY_QUERY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    tuiClamp,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiIsNativeFocusedIn,
    TuiNativeFocusableElement,
    tuiPure,
    tuiRound,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiDecimal,
    tuiGetFractionPartPadded,
    TuiTextfieldController,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiInputNumberComponent} from '@taiga-ui/kit/components/input-number';
import {TuiRangeComponent} from '@taiga-ui/kit/components/range';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-input-range`,
    templateUrl: `./input-range.template.html`,
    styleUrls: [`./input-range.style.less`],
    host: {
        '[attr.data-size]': `controller.size`,
        '[class._label-outside]': `controller.labelOutside`,
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputRangeComponent),
        },
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

    @Input()
    @tuiDefaultProp()
    min = 0;

    @Input()
    @tuiDefaultProp()
    max = 100;

    @Input()
    @tuiDefaultProp(q => q > 0, `[quantum] must be positive`)
    quantum = 1;

    @Input()
    @tuiDefaultProp(
        s => s >= 0 && Number.isInteger(s),
        `[steps] must be non-negative integer`,
    )
    steps = 0;

    @Input()
    @tuiDefaultProp(
        s => s > 0 && Number.isInteger(s),
        `[segments] must be positive integer`,
    )
    segments = 1;

    @Input()
    @tuiDefaultProp()
    keySteps: TuiKeySteps | null = null;

    @Input()
    @tuiDefaultProp()
    leftValueContent: PolymorpheusContent<TuiContextWithImplicit<number>> = ``;

    @Input()
    @tuiDefaultProp()
    rightValueContent: PolymorpheusContent<TuiContextWithImplicit<number>> = ``;

    @Input()
    @tuiDefaultProp()
    pluralize: Record<string, string> | null = null;

    lastActiveSide: 'left' | 'right' = `left`;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_IS_MOBILE)
        private readonly isMobile: boolean,
        @Inject(TUI_TEXTFIELD_APPEARANCE)
        readonly appearance: string,
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
    ) {
        super(control, changeDetectorRef);
    }

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
        return tuiIsNativeFocusedIn(this.elementRef.nativeElement);
    }

    get showLeftValueContent(): boolean {
        return Boolean(
            this.leftValueContent &&
                !tuiIsNativeFocused(this.leftFocusableElement) &&
                !(this.rangeRef?.focused && this.lastActiveSide === `left`),
        );
    }

    get showRightValueContent(): boolean {
        return Boolean(
            this.rightValueContent &&
                !tuiIsNativeFocused(this.rightFocusableElement) &&
                !(this.rangeRef?.focused && this.lastActiveSide === `right`),
        );
    }

    get precision(): number {
        return tuiGetFractionPartPadded(this.quantum).length;
    }

    get decimal(): TuiDecimal {
        return this.precision ? `not-zero` : `never`;
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

    onTextInputFocused(focused: boolean, right: boolean): void {
        if (focused) {
            return;
        }

        const [leftTextInputRef, rightTextInputRef] = this.inputNumberRefs;
        const inputRef = right ? rightTextInputRef : leftTextInputRef;
        const valueIndex = right ? 1 : 0;

        if (!inputRef.nativeValue || inputRef.value !== this.value[valueIndex]) {
            this.updateTextInputValue(this.safeCurrentValue[valueIndex], right);
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
        const leftValueChanged = newValue[0] !== this.value[0];
        const rightValueChanged = newValue[1] !== this.value[1];

        if (leftValueChanged || rightValueChanged) {
            this.safelyUpdateValue(newValue);
            this.updateTextInputValue(
                newValue[rightValueChanged ? 1 : 0],
                rightValueChanged,
            );
        }
    }

    onInputLeft(value: number | null): void {
        this.safelyUpdateValue([value ?? this.safeCurrentValue[0], this.value[1]]);
    }

    onInputRight(value: number | null): void {
        this.safelyUpdateValue([this.value[0], value ?? this.safeCurrentValue[1]]);
    }

    onRangeValue(value: [number, number]): void {
        this.safelyUpdateValue(value);

        const rightValueChanged = this.lastActiveSide === `right`;

        this.updateTextInputValue(
            this.value[rightValueChanged ? 1 : 0],
            rightValueChanged,
        );
    }

    focusToTextInput(): void {
        const element =
            this.lastActiveSide === `left`
                ? this.leftFocusableElement
                : this.rightFocusableElement;

        if (!this.isMobile && element) {
            element.focus();
        }
    }

    onActiveThumbChange(activeThumb: 'right' | 'left'): void {
        this.lastActiveSide = activeThumb;
    }

    protected getFallbackValue(): [number, number] {
        return [0, 0];
    }

    private safelyUpdateValue(value: [number, number]): void {
        this.updateValue(this.valueGuard(value));
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

    private updateTextInputValue(value: number, right: boolean): void {
        const [leftInputRef, rightInputRef] = this.inputNumberRefs;
        const textInputRef = right ? rightInputRef : leftInputRef;

        if (textInputRef) {
            textInputRef.nativeValue = textInputRef.getFormattedValue(value);
        }
    }
}

@Directive({
    selector: `[tuiTextfieldAppearance]`,
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE,
            deps: [ElementRef],
            useFactory: ({nativeElement}: ElementRef) =>
                nativeElement.getAttribute(`tuiTextfieldAppearance`),
        },
    ],
})
export class TuiTextfieldAppearanceDirective {}
