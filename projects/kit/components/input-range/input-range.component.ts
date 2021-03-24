import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    Inject,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    isNativeFocused,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    formatNumber,
    maskedMoneyValueIsEmpty,
    maskedNumberStringToNumber,
    TuiModeDirective,
} from '@taiga-ui/core';
import {AbstractTuiInputSlider} from '@taiga-ui/kit/abstract';

// @dynamic
@Component({
    selector: 'tui-input-range',
    templateUrl: './input-range.template.html',
    styleUrls: ['./input-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputRangeComponent),
        },
    ],
})
export class TuiInputRangeComponent
    extends AbstractTuiInputSlider<[number, number]>
    implements TuiFocusableElementAccessor {
    @ViewChild('nativeLeft')
    private readonly nativeLeft?: ElementRef<HTMLInputElement>;

    @ViewChild('nativeRight')
    private readonly nativeRight?: ElementRef<HTMLInputElement>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Optional()
        @Inject(TuiModeDirective)
        protected readonly modeDirective: TuiModeDirective | null,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.nativeLeft || this.disabled ? null : this.nativeLeft.nativeElement;
    }

    get focused(): boolean {
        return this.focusedLeft || this.focusedRight;
    }

    get focusedLeft(): boolean {
        return !!this.nativeLeft && isNativeFocused(this.nativeLeft.nativeElement);
    }

    get focusedRight(): boolean {
        return !!this.nativeRight && isNativeFocused(this.nativeRight.nativeElement);
    }

    @HostBinding('class._min-label')
    get showMinLabel(): boolean {
        return !this.focusedLeft && !!this.minLabel && this.value[0] === this.min;
    }

    @HostBinding('class._max-label')
    get showMaxLabel(): boolean {
        return !this.focusedRight && !!this.maxLabel && this.value[1] === this.max;
    }

    get inputValueLeft(): string {
        return this.nativeLeft ? this.nativeLeft.nativeElement.value : '';
    }

    get inputValueRight(): string {
        return this.nativeRight ? this.nativeRight.nativeElement.value : '';
    }

    get computedValueLeft(): string {
        return formatNumber(this.value[0]);
    }

    get computedValueRight(): string {
        return formatNumber(this.value[1]);
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    onMouseDown() {
        if (this.nativeRight && !this.isMobile) {
            setNativeFocused(this.nativeRight.nativeElement);
        }
    }

    onKeyDownArrowUpLeft(event: KeyboardEvent) {
        if (this.readOnly) {
            return;
        }

        event.preventDefault();
        this.processStep(true, false);
    }

    onKeyDownArrowDownLeft(event: KeyboardEvent) {
        if (this.readOnly) {
            return;
        }

        event.preventDefault();
        this.processStep(false, false);
    }

    onKeyDownArrowUpRight(event: KeyboardEvent) {
        if (this.readOnly) {
            return;
        }

        event.preventDefault();
        this.processStep(true, true);
    }

    onKeyDownArrowDownRight(event: KeyboardEvent) {
        if (this.readOnly) {
            return;
        }

        event.preventDefault();
        this.processStep(false, true);
    }

    onInputLeft() {
        const value = this.inputValueLeft;
        const capped = this.capInputValue(value, this.value[1]);
        const postfix = value.slice(-1)[0] === ',' ? ',' : '';

        if (maskedMoneyValueIsEmpty(value) || capped === null) {
            return;
        }

        const newValue = formatNumber(capped) + postfix;

        if (this.nativeLeft && this.inputValueLeft !== newValue) {
            this.nativeLeft.nativeElement.value = newValue;
        }

        this.updateValue([capped, this.value[1]]);
    }

    onInputRight() {
        const value = this.inputValueRight;
        const capped = this.capInputValue(value);
        const postfix = value.slice(-1)[0] === ',' ? ',' : '';

        if (maskedMoneyValueIsEmpty(value) || capped === null) {
            return;
        }

        const newValue = formatNumber(capped) + postfix;

        if (this.nativeRight && this.inputValueRight !== newValue) {
            this.nativeRight.nativeElement.value = newValue;
        }

        if (capped >= this.value[0]) {
            this.updateValue([this.value[0], capped]);
        }
    }

    onRangeValue(value: [number, number]) {
        const guardedValue = value.map(item => this.valueGuard(item)) as [number, number];

        if (
            !this.nativeLeft ||
            !this.nativeRight ||
            (guardedValue[0] === this.value[0] && guardedValue[1] === this.value[1])
        ) {
            return;
        }

        if (!this.isMobile) {
            const element =
                guardedValue[0] !== this.value[0]
                    ? this.nativeLeft.nativeElement
                    : this.nativeRight.nativeElement;

            setNativeFocused(element);
        }

        this.updateValue(guardedValue);
        this.nativeLeft.nativeElement.value = formatNumber(guardedValue[0]);
    }

    onLeftFocused(focused: boolean) {
        if (focused || !this.nativeLeft) {
            return;
        }

        const inputValue = maskedNumberStringToNumber(this.computedValueLeft);
        const value = isNaN(inputValue) ? this.min : this.valueGuard(inputValue);

        this.nativeLeft.nativeElement.value = formatNumber(value);

        if (value !== this.value[0]) {
            this.updateValue([value, this.value[1]]);
        }
    }

    onRightFocused(focused: boolean) {
        if (focused || !this.nativeRight) {
            return;
        }

        const inputValue = maskedNumberStringToNumber(this.computedValueRight);
        const value = isNaN(inputValue)
            ? this.value[0]
            : this.valueGuard(Math.max(inputValue, this.value[0]));

        this.nativeRight.nativeElement.value = formatNumber(value);

        if (value !== this.value[1]) {
            this.updateValue([this.value[0], value]);
        }
    }

    protected getFallbackValue(): [number, number] {
        return [0, 0];
    }

    private processStep(increment: boolean, right: boolean) {
        const start = this.valueGuard(
            increment ? this.value[0] + this.step : this.value[0] - this.step,
        );
        const end = this.valueGuard(
            increment ? this.value[1] + this.step : this.value[1] - this.step,
        );
        const value: [number, number] = [
            right ? this.value[0] : Math.min(start, this.value[1]),
            right ? Math.max(end, this.value[0]) : this.value[1],
        ];

        if (value[0] !== this.value[0] || value[1] !== this.value[1]) {
            this.updateValue(value);
        }
    }
}
