import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
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

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public min: number | null = this.options.min.year;

    @Input()
    public max: number | null = this.options.max.year;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<number> = ALWAYS_FALSE_HANDLER;

    public nativeValue = '';

    protected open = false;
    protected readonly initialItem = new Date().getFullYear();

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public onValueChange(value: string): void {
        this.value = value ? Number(value) : null;
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.updateNativeValue(value);
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get computedMin(): number {
        return this.min ?? this.options.min.year;
    }

    protected get computedMax(): number {
        return this.max ?? this.options.max.year;
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    @tuiPure
    protected getMaskOptions(min: number, max: number): MaskitoOptions {
        return {
            ...maskitoNumberOptionsGenerator({
                min,
                max,
                thousandSeparator: '',
            }),
            mask: UP_TO_4_DIGITS_REG,
        };
    }

    protected onYearClick({year}: TuiYear): void {
        this.value = year;
        this.updateNativeValue(year);
        this.onOpenChange(false);
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected toggle(): void {
        this.open = !this.open;
    }

    private updateNativeValue(value: number | null): void {
        this.nativeValue = value?.toString() || '';
    }
}
