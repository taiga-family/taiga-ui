import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    tuiDateClamp,
    TuiDay,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiHandler,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';
import {
    TuiMonthPipe,
    TuiPrimitiveTextfieldComponent,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER_PROVIDER} from '@taiga-ui/kit/providers';
import {
    TUI_INPUT_DATE_OPTIONS,
    TUI_MONTH_FORMATTER,
    TuiInputDateOptions,
} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-input-month',
    templateUrl: './input-month.template.html',
    styleUrls: ['./input-month.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputMonthComponent),
        tuiAsControl(TuiInputMonthComponent),
        TUI_MONTH_FORMATTER_PROVIDER,
        TuiMonthPipe,
    ],
})
export class TuiInputMonthComponent
    extends AbstractTuiNullableControl<TuiMonth>
    implements TuiWithOptionalMinMax<TuiMonth>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    min: TuiMonth = this.options.min;

    @Input()
    @tuiDefaultProp()
    max: TuiMonth = this.options.max;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiMonth> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    defaultActiveYear: TuiYear = TuiDay.currentLocal();

    activeYear?: TuiYear;

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_MONTH_FORMATTER)
        readonly formatter: TuiHandler<TuiMonth | null, Observable<string>>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_INPUT_DATE_OPTIONS) private readonly options: TuiInputDateOptions,
    ) {
        super(control, cdr);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
    }

    get computedDefaultActiveYear(): TuiYear {
        return (
            this.activeYear ||
            this.value ||
            tuiDateClamp(this.defaultActiveYear, this.min, this.max)
        );
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    get nativePicker(): boolean {
        return this.isMobile && this.options.nativePicker;
    }

    get nativeValue(): string {
        return this.value?.toJSON() || '';
    }

    onNativeChange(value: string): void {
        const [year, month] = value.split('-').map(Number);

        this.value = value ? new TuiMonth(year, month - 1) : null;
    }

    onValueChange(value: string): void {
        if (value) {
            return;
        }

        this.value = null;
        this.onOpenChange(!this.nativePicker);
    }

    onMonthClick(month: TuiMonth): void {
        this.value = month;
        this.close();
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onOpenChange(open: boolean): void {
        if (open && this.value) {
            this.activeYear = this.value;
        }

        this.open = open;
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    private close(): void {
        this.open = false;
    }
}
