import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    CHAR_EN_DASH,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDateClamp,
    TuiDay,
    TuiFocusableElementAccessor,
    TuiMonth,
    TuiMonthRange,
    TuiYear,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    TuiMonthPipe,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiMonthContext} from '@taiga-ui/kit/interfaces';
import {TUI_MONTH_FORMATTER_PROVIDER} from '@taiga-ui/kit/providers';
import {
    TUI_INPUT_DATE_OPTIONS,
    TUI_MONTH_FORMATTER,
    TuiInputDateOptions,
} from '@taiga-ui/kit/tokens';
import {TuiBooleanHandlerWithContext} from '@taiga-ui/kit/types';

@Component({
    selector: 'tui-input-month-range',
    templateUrl: './input-month-range.template.html',
    styleUrls: ['./input-month-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputMonthRangeComponent),
        tuiAsControl(TuiInputMonthRangeComponent),
        TUI_MONTH_FORMATTER_PROVIDER,
        TuiMonthPipe,
    ],
})
export class TuiInputMonthRangeComponent
    extends AbstractTuiNullableControl<TuiMonthRange>
    implements TuiWithOptionalMinMax<TuiMonth>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public min: TuiMonth = this.options.min;

    @Input()
    public max: TuiMonth = this.options.max;

    @Input()
    public disabledItemHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> =
        ALWAYS_FALSE_HANDLER;

    @Input()
    public defaultActiveYear: TuiYear = TuiDay.currentLocal();

    protected open = false;

    protected readonly formatter = inject(TUI_MONTH_FORMATTER);

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    protected get computedDefaultActiveYear(): TuiYear {
        return (
            this.value?.from || tuiDateClamp(this.defaultActiveYear, this.min, this.max)
        );
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    public computeValue(from: string | null, to: string | null): string {
        const formattedTo = from === to && this.focused && !this.readOnly ? '' : to;

        return `${from} ${CHAR_EN_DASH} ${formattedTo}`;
    }

    public onValueChange(value: string): void {
        if (value) {
            return;
        }

        this.value = null;
        this.onOpenChange(true);
    }

    protected onMonthClick(month: TuiMonth): void {
        if (this.value === null || !this.value.isSingleMonth) {
            this.writeValue(new TuiMonthRange(month, month));

            return;
        }

        this.value = TuiMonthRange.sort(this.value.from, month);
        this.close();
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected onActiveZone(focused: boolean): void {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        if (this.value?.isSingleMonth) {
            this.value = new TuiMonthRange(this.value.from, this.value.from);
        }
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    private close(): void {
        this.open = false;
    }
}
