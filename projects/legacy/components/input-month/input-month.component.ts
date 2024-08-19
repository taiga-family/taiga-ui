import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiYear} from '@taiga-ui/cdk/date-time';
import {tuiDateClamp, TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {TuiMonthPipe} from '@taiga-ui/core/pipes/month';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {TuiInputDateOptions} from '@taiga-ui/kit/tokens';
import {TUI_INPUT_DATE_OPTIONS} from '@taiga-ui/kit/tokens';
import {AbstractTuiNullableControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {
    TUI_MONTH_FORMATTER,
    TUI_MONTH_FORMATTER_PROVIDER,
    tuiAsFocusableItemAccessor,
} from '@taiga-ui/legacy/tokens';

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
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected readonly formatter = inject(TUI_MONTH_FORMATTER);
    protected activeYear?: TuiYear;

    @Input()
    public min: TuiMonth | null = this.options.min;

    @Input()
    public max: TuiMonth | null = this.options.max;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiMonth> = TUI_FALSE_HANDLER;

    @Input()
    public defaultActiveYear: TuiYear = TuiDay.currentLocal();

    public open = false;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public onValueChange(value: string): void {
        if (value) {
            return;
        }

        this.value = null;
        this.onOpenChange(!this.nativePicker);
    }

    public onMonthClick(month: TuiMonth): void {
        this.value = month;
        this.close();
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get computedMin(): TuiMonth {
        return this.min ?? this.options.min;
    }

    protected get computedMax(): TuiMonth {
        return this.max ?? this.options.max;
    }

    protected get computedDefaultActiveYear(): TuiYear {
        return (
            this.activeYear ||
            this.value ||
            tuiDateClamp(this.defaultActiveYear, this.computedMin, this.computedMax)
        );
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    protected get nativePicker(): boolean {
        return this.isMobile && this.options.nativePicker;
    }

    protected get nativePickerMin(): string {
        return this.computedMin.toJSON();
    }

    protected get nativePickerMax(): string {
        return this.computedMax.toJSON();
    }

    protected get nativeValue(): string {
        return this.value?.toJSON() || '';
    }

    protected onNativeChange(value: string): void {
        const [year, month] = value.split('-').map(Number);

        this.value = value
            ? tuiDateClamp(
                  new TuiMonth(year, month - 1),
                  this.computedMin,
                  this.computedMax,
              )
            : null;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onOpenChange(open: boolean): void {
        if (open && this.value) {
            this.activeYear = this.value;
        }

        this.open = open;
    }

    private close(): void {
        this.open = false;
    }
}
