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
import type {
    TuiBooleanHandler,
    TuiFocusableElementAccessor,
    TuiInjectionTokenType,
    TuiMonth,
    TuiYear,
} from '@taiga-ui/cdk';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiDay,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import type {TuiWithOptionalMinMax} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiMonthPipe,
    TuiPrimitiveTextfieldComponent,
    tuiSizeBigger,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';

@Component({
    selector: `tui-input-month`,
    templateUrl: `./input-month.template.html`,
    styleUrls: [`./input-month.style.less`],
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
    min: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiMonth = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiMonth> = ALWAYS_FALSE_HANDLER;

    open = false;
    activeYear: TuiYear = this.value || TuiDay.currentLocal();

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_MONTH_FORMATTER)
        readonly formatter: TuiInjectionTokenType<typeof TUI_MONTH_FORMATTER>,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get calendarIcon(): string {
        return tuiSizeBigger(this.textfieldSize.size)
            ? `tuiIconCalendarLarge`
            : `tuiIconCalendar`;
    }

    onValueChange(value: string): void {
        if (value) {
            return;
        }

        this.updateValue(null);
        this.onOpenChange(true);
    }

    onMonthClick(month: TuiMonth): void {
        this.updateValue(month);
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

    toggle(): void {
        this.open = !this.open;
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    private close(): void {
        this.open = false;
    }
}
