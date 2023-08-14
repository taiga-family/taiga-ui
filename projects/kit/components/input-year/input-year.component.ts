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
import {MaskitoOptions} from '@maskito/core';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiFocusableElementAccessor,
    tuiPure,
    TuiYear,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_INPUT_DATE_OPTIONS, TuiInputDateOptions} from '@taiga-ui/kit/tokens';

const UP_TO_4_DIGITS_REG = /^\d{0,4}$/;

@Component({
    selector: 'tui-input-year',
    templateUrl: './input-year.template.html',
    styleUrls: ['./input-year.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputYearComponent),
        tuiAsControl(TuiInputYearComponent),
    ],
})
export class TuiInputYearComponent
    extends AbstractTuiNullableControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input()
    min: number | null = this.options.min.year;

    @Input()
    max: number | null = this.options.max.year;

    @Input()
    disabledItemHandler: TuiBooleanHandler<number> = ALWAYS_FALSE_HANDLER;

    open = false;
    nativeValue = '';

    readonly initialItem = new Date().getFullYear();

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_INPUT_DATE_OPTIONS)
        private readonly options: TuiInputDateOptions,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
    ) {
        super(control, cdr);
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get computedMin(): number {
        return this.min ?? this.options.min.year;
    }

    get computedMax(): number {
        return this.max ?? this.options.max.year;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
    }

    get focused(): boolean {
        return !!this.textfield?.focused;
    }

    get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    @tuiPure
    getMaskOptions(min: number, max: number): MaskitoOptions {
        return {
            ...maskitoNumberOptionsGenerator({
                min,
                max,
                thousandSeparator: '',
            }),
            mask: UP_TO_4_DIGITS_REG,
        };
    }

    onValueChange(value: string): void {
        this.value = value ? Number(value) : null;
    }

    onYearClick({year}: TuiYear): void {
        this.value = year;
        this.updateNativeValue(year);
        this.onOpenChange(false);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onOpenChange(open: boolean): void {
        this.open = open;
    }

    toggle(): void {
        this.open = !this.open;
    }

    override writeValue(value: number | null): void {
        super.writeValue(value);
        this.updateNativeValue(value);
    }

    private updateNativeValue(value: number | null): void {
        this.nativeValue = value?.toString() || '';
    }
}
