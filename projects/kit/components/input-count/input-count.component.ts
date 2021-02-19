import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    CHAR_NO_BREAK_SPACE,
    clamp,
    isNativeFocused,
    isPresent,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    formatNumber,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_SIZE,
    TuiAppearance,
    tuiCreateNumberMask,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_PLUS_MINUS_TEXTS} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

// @dynamic
@Component({
    selector: 'tui-input-count',
    templateUrl: './input-count.template.html',
    styleUrls: ['./input-count.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputCountComponent),
        },
    ],
})
export class TuiInputCountComponent
    extends AbstractTuiControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    step = 1;

    @Input()
    @tuiDefaultProp()
    min = 0;

    @Input()
    @tuiDefaultProp()
    max = Infinity;

    @Input()
    @tuiDefaultProp()
    hideButtons = false;

    @Input()
    @tuiDefaultProp()
    postfix = '';

    readonly textMaskOptions: TuiTextMaskOptions = {
        mask: tuiCreateNumberMask(),
        guide: false,
    };

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_APPEARANCE)
        private readonly appearance: string,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_PLUS_MINUS_TEXTS)
        readonly minusTexts$: Observable<[string, string]>,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.primitiveTextfield || this.computedDisabled
            ? null
            : this.primitiveTextfield.nativeFocusableElement;
    }

    @HostBinding('attr.data-tui-host-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding('class._has-buttons')
    get hasButtons(): boolean {
        return !this.hideButtons && this.appearance !== TuiAppearance.Table;
    }

    get exampleText(): string {
        return String(this.min);
    }

    get computedValue(): string {
        return formatNumber(this.value);
    }

    get minusButtonDisabled(): boolean {
        return (
            this.disabled ||
            this.readOnly ||
            (isPresent(this.value) && this.value <= this.min)
        );
    }

    get plusButtonDisabled(): boolean {
        return (
            this.disabled ||
            this.readOnly ||
            (isPresent(this.value) && this.value >= this.max)
        );
    }

    onButtonMouseDown(event: MouseEvent, disabled: boolean = false) {
        if (disabled || !this.nativeFocusableElement) {
            return;
        }

        event.preventDefault();
        setNativeFocused(this.nativeFocusableElement);
    }

    onFocused(focused: boolean) {
        if (!focused) {
            this.onBlur();
        }

        this.updateFocused(focused);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onPressed(pressed: boolean) {
        this.updatePressed(pressed);
    }

    onValueChange() {
        const capped = this.capValue(this.nativeNumberValue);

        if (capped === null || isNaN(capped)) {
            return;
        }

        const newValue = formatNumber(capped);

        if (this.nativeValue !== newValue) {
            this.nativeValue = newValue;
        }

        this.updateValue(capped);
    }

    decreaseValue() {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) - this.step;

        this.safeUpdateValue(newValue);
    }

    increaseValue() {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) + this.step;

        this.safeUpdateValue(newValue);
    }

    onKeydown(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowUp':
            case 'Up':
                this.increaseValue();
                event.preventDefault();
                break;
            case 'ArrowDown':
            case 'Down':
                this.decreaseValue();
                event.preventDefault();
                break;
            default:
                break;
        }
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private get nativeNumberValue(): number {
        return parseInt(this.nativeValue.split(CHAR_NO_BREAK_SPACE).join(''), 10);
    }

    private get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
    }

    private set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    private safeUpdateValue(newValue: number) {
        const value = clamp(newValue, this.min, this.max);

        this.updateValue(value);
        this.nativeValue = formatNumber(value);
    }

    private capValue(value: number): number | null {
        const capped = Math.min(value, this.max);

        return isNaN(capped) || capped < this.min ? null : capped;
    }

    private onBlur() {
        const value = Math.max(this.nativeNumberValue || 0, this.min);
        const formattedValue = formatNumber(value);

        this.nativeValue = formattedValue;
        this.updateValue(value);

        if (this.primitiveTextfield) {
            this.primitiveTextfield.value = formattedValue;
        }
    }
}
