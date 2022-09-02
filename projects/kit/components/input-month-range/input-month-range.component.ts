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
    TuiFocusableElementAccessor,
    TuiInjectionTokenType,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    CHAR_EN_DASH,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiMonthRange,
} from '@taiga-ui/cdk';
import type {TuiWithOptionalMinMax} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiMonthPipe,
    TuiPrimitiveTextfieldComponent,
    tuiSizeBigger,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import type {TuiMonthContext} from '@taiga-ui/kit/interfaces';
import {TUI_MONTH_FORMATTER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import type {TuiBooleanHandlerWithContext} from '@taiga-ui/kit/types';

@Component({
    selector: `tui-input-month-range`,
    templateUrl: `./input-month-range.template.html`,
    styleUrls: [`./input-month-range.style.less`],
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

    @Input()
    @tuiDefaultProp()
    min: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiMonth = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> =
        ALWAYS_FALSE_HANDLER;

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MONTH_FORMATTER)
        readonly formatter: TuiInjectionTokenType<typeof TUI_MONTH_FORMATTER>,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
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

    computeValue(from: string | null, to: string | null): string {
        const formattedTo = from === to && this.focused && !this.readOnly ? `` : to;

        return `${from} ${CHAR_EN_DASH} ${formattedTo}`;
    }

    onValueChange(value: string): void {
        if (value) {
            return;
        }

        this.updateValue(null);
        this.onOpenChange(true);
    }

    onMonthClick(month: TuiMonth): void {
        if (this.value === null || !this.value.isSingleMonth) {
            this.writeValue(new TuiMonthRange(month, month));

            return;
        }

        this.updateValue(TuiMonthRange.sort(this.value.from, month));
        this.close();
    }

    onOpenChange(open: boolean): void {
        this.open = open;
    }

    onActiveZone(focused: boolean): void {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        if (this.value?.isSingleMonth) {
            this.updateValue(new TuiMonthRange(this.value.from, this.value.from));
        }
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    private close(): void {
        this.open = false;
    }
}
