import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {maskitoParseNumber} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiIsPresent,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_NUMBER_FORMAT,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiNumberFormatSettings,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldController,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiInputNumberComponent} from '@taiga-ui/kit/components/input-number';
import {TUI_PLUS_MINUS_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TUI_INPUT_COUNT_OPTIONS, TuiInputCountOptions} from './input-count.options';

/**
 * @deprecated use {@link TuiInputNumberComponent} with [step] instead
 */
@Component({
    selector: 'tui-input-count',
    templateUrl: './input-count.template.html',
    styleUrls: ['./input-count.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCountComponent),
        tuiAsControl(TuiInputCountComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputCountComponent
    extends AbstractTuiNullableControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiInputNumberComponent)
    private readonly inputNumber?: TuiInputNumberComponent;

    @Input()
    step = this.options.step;

    @Input()
    min: number | null = this.options.min;

    @Input()
    max: number | null = this.options.max;

    @Input()
    hideButtons = this.options.hideButtons;

    /** @deprecated use `tuiTextfieldPrefix` from {@link TuiTextfieldControllerModule} instead */
    @Input()
    prefix = '';

    /** @deprecated use `tuiTextfieldPostfix` from {@link TuiTextfieldControllerModule} instead */
    @Input()
    postfix = this.options.postfix;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        private readonly textfieldController: TuiTextfieldController,
        @Inject(TUI_PLUS_MINUS_TEXTS)
        readonly minusTexts$: Observable<[string, string]>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_INPUT_COUNT_OPTIONS)
        readonly options: TuiInputCountOptions,
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: TuiNumberFormatSettings,
    ) {
        super(control, cdr);
    }

    get computedMin(): number {
        return this.min ?? this.options.min;
    }

    get computedMax(): number {
        return this.max ?? this.options.max;
    }

    @HostBinding('class._hide-buttons')
    get buttonsHidden(): boolean {
        return this.hideButtons || this.textfieldController.appearance === 'table';
    }

    get iconUp(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.up;
    }

    get iconDown(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.down;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.inputNumber || this.computedDisabled
            ? null
            : this.inputNumber.nativeFocusableElement;
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldController.size;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get minusButtonDisabled(): boolean {
        return (
            !this.interactive ||
            (tuiIsPresent(this.value) && this.value <= this.computedMin)
        );
    }

    get plusButtonDisabled(): boolean {
        return (
            !this.interactive ||
            (tuiIsPresent(this.value) && this.value >= this.computedMax)
        );
    }

    onButtonMouseDown(event: MouseEvent, disabled: boolean = false): void {
        if (disabled || !this.nativeFocusableElement || this.isMobile) {
            return;
        }

        event.preventDefault();
        this.nativeFocusableElement.focus();
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    /**
     * @deprecated
     * TODO: drop in v4.0 as unused method
     */
    onInputNumberChange(value: number | null): void {
        this.value = value;
    }

    /** @deprecated */
    onValueChange(value: string): void {
        this.value = maskitoParseNumber(value, this.numberFormat.decimalSeparator);
    }

    decreaseValue(): void {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) - this.step;

        this.safeUpdateValue(newValue);
    }

    increaseValue(): void {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) + this.step;

        this.safeUpdateValue(newValue);
    }

    onKeydown(event: KeyboardEvent): void {
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

    private safeUpdateValue(newValue: number): void {
        this.value = tuiClamp(newValue, this.computedMin, this.computedMax);
    }
}
