import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
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
    TUI_FIRST_DAY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_LAST_DAY,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiMonth,
    TuiMonthRange,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_MONTHS,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiMonthContext} from '@taiga-ui/kit/interfaces';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TuiBooleanHandlerWithContext} from '@taiga-ui/kit/types';
import {Observable} from 'rxjs';

// @dynamic
@Component({
    selector: 'tui-input-month-range',
    templateUrl: './input-month-range.template.html',
    styleUrls: ['./input-month-range.style.less'],
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputMonthRangeComponent),
        },
        LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputMonthRangeComponent
    extends AbstractTuiNullableControl<TuiMonthRange>
    implements TuiWithOptionalMinMax<TuiMonth>, TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    min: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiMonth = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandlerWithContext<
        TuiMonth,
        TuiMonthContext
    > = ALWAYS_FALSE_HANDLER;

    open = false;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MONTHS) readonly months$: Observable<readonly string[]>,
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
        return sizeBigger(this.textfieldSize.size)
            ? 'tuiIconCalendarLarge'
            : 'tuiIconCalendar';
    }

    computeValue(
        value: TuiMonthRange | null,
        focused: boolean,
        months: readonly string[],
    ): string {
        if (value === null) {
            return '';
        }

        const formattedValueTo =
            !value.isSingleMonth || !focused ? this.formatMonth(value.to, months) : '';

        return `${this.formatMonth(value.from, months)} — ${formattedValueTo}`;
    }

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly;
    }

    onValueChange(value: string) {
        if (value === '') {
            this.updateValue(null);
        }
    }

    onMonthClick(month: TuiMonth) {
        if (this.value === null || !this.value.isSingleMonth) {
            this.writeValue(new TuiMonthRange(month, month));

            return;
        }

        this.updateValue(TuiMonthRange.sort(this.value.from, month));
        this.close();
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onOpenChange(open: boolean) {
        this.open = open;
    }

    onActiveZone(focused: boolean) {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        if (this.value && this.value.isSingleMonth) {
            this.updateValue(new TuiMonthRange(this.value.from, this.value.from));
        }
    }

    setDisabledState() {
        super.setDisabledState();
        this.close();
    }

    private formatMonth(
        {month, formattedYear}: TuiMonth,
        months: readonly string[],
    ): string {
        return `${months[month]} ${formattedYear}`;
    }

    private close() {
        this.open = false;
    }
}
