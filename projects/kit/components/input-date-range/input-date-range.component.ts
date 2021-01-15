import {
    ChangeDetectorRef,
    Component,
    forwardRef,
    Inject,
    Injector,
    Input,
    Optional,
    Self,
    Type,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    nullableSame,
    RANGE_SEPARATOR_CHAR,
    setNativeFocused,
    TUI_DATE_FILLER,
    TUI_DATE_RANGE_FILLER,
    TUI_FIRST_DAY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiMapper,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_TEXTFIELD_EXAMPLE_TEXT,
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldExampleTextDirective,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';
import {
    EMPTY_MASK,
    MAX_DAY_RANGE_LENGTH_MAPPER,
    TUI_DATE_RANGE_MASK,
} from '@taiga-ui/kit/constants';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_CALENDAR_DATA_STREAM, TUI_MOBILE_CALENDAR} from '@taiga-ui/kit/tokens';
import {tuiCreateAutoCorrectedDateRangePipe} from '@taiga-ui/kit/utils/mask';
import {TuiReplayControlValueChangesFactory} from '@taiga-ui/kit/utils/miscellaneous';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-input-date-range',
    templateUrl: './input-date-range.template.html',
    styleUrls: ['./input-date-range.style.less'],
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputDateRangeComponent),
        },
        {
            provide: TUI_CALENDAR_DATA_STREAM,
            deps: [[new Optional(), new Self(), NgControl]],
            useFactory: TuiReplayControlValueChangesFactory,
        },
        LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputDateRangeComponent
    extends AbstractTuiNullableControl<TuiDayRange>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @tuiDefaultProp()
    defaultViewedMonth = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<TuiDayRangePeriod> = [];

    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    minLength: TuiDayLike | null = null;

    @Input()
    @tuiDefaultProp()
    maxLength: TuiDayLike | null = null;

    open = false;

    readonly maxLengthMapper: TuiMapper<TuiDay, TuiDay> = MAX_DAY_RANGE_LENGTH_MAPPER;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly textMaskOptions: TuiTextMaskOptions = {
        mask: TUI_DATE_RANGE_MASK,
        pipe: tuiCreateAutoCorrectedDateRangePipe(this),
        guide: false,
    };

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Optional()
        @Inject(TUI_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_TEXTFIELD_EXAMPLE_TEXT)
        private readonly textfieldExampleText: TuiTextfieldExampleTextDirective,
        @Inject(TUI_DATE_FILLER) readonly filler: string,
        @Inject(TUI_DATE_RANGE_FILLER) readonly rangeFiller: string,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    get calendarIcon(): string {
        return sizeBigger(this.textfieldSize.size)
            ? 'tuiIconCalendarLarge'
            : 'tuiIconCalendar';
    }

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly && !this.computedMobile;
    }

    get computedExampleText(): string {
        return this.items.length ? this.textfieldExampleText.exampleText : '';
    }

    get computedFiller(): string {
        return this.activePeriod ? '' : this.rangeFiller;
    }

    get computedMask(): TuiTextMaskOptions {
        return this.activePeriod ? EMPTY_MASK : this.textMaskOptions;
    }

    get activePeriod(): TuiDayRangePeriod | null {
        return (
            this.items.find(item =>
                nullableSame(
                    this.value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) || null
        );
    }

    get computedValue(): string {
        const {value, nativeValue, activePeriod} = this;

        if (activePeriod) {
            return String(activePeriod);
        }

        return value ? value.formattedDayRange : nativeValue;
    }

    get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocused === false) {
            return false;
        }

        if (this.open || this.computedFocused) {
            return true;
        }

        return null;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
    }

    set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    onClick() {
        if (!this.isMobile || !this.mobileCalendar) {
            this.toggle();

            return;
        }

        this.dialogService
            .open<TuiDayRange>(
                new PolymorpheusComponent(this.mobileCalendar, this.injector),
                {
                    size: 'fullscreen',
                    closeable: false,
                    data: {
                        single: false,
                        min: this.maxLengthMapper(
                            this.min,
                            this.value,
                            this.maxLength,
                            true,
                        ),
                        max: this.maxLengthMapper(
                            this.max,
                            this.value,
                            this.maxLength,
                            false,
                        ),
                        disabledItemHandler: this.disabledItemHandler,
                    },
                },
            )
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => {
                this.updateValue(value);
            });
    }

    onOpenChange(open: boolean) {
        this.open = open;
    }

    onValueChange(value: string) {
        if (value && this.control) {
            this.control.updateValueAndValidity();
        }

        if (value.length !== this.rangeFiller.length) {
            this.updateValue(null);

            return;
        }

        const parsedValue = TuiDayRange.normalizeParse(
            value,
            this.filler,
            this.rangeFiller,
        );

        this.updateValue(
            !this.minLength && !this.maxLength
                ? parsedValue
                : this.clampValue(parsedValue),
        );
    }

    onRangeChange(range: TuiDayRange) {
        this.toggle();
        this.focusInput();

        if (!nullableSame<TuiDayRange>(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
        }
    }

    onItemSelect(item: string | TuiDayRangePeriod) {
        this.toggle();
        this.focusInput();

        if (typeof item !== 'string') {
            this.updateValue(item.range.dayLimit(this.min, this.max));

            return;
        }

        if (this.activePeriod !== null) {
            this.updateValue(null);
            this.nativeValue = '';
        }
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onPressed(pressed: boolean) {
        this.updatePressed(pressed);
    }

    onActiveZone(focused: boolean) {
        this.updateFocused(focused);

        if (
            !focused &&
            !this.itemSelected &&
            (this.nativeValue.length === this.filler.length ||
                this.nativeValue.length ===
                    this.filler.length + RANGE_SEPARATOR_CHAR.length)
        ) {
            this.updateValue(
                TuiDayRange.normalizeParse(
                    this.nativeValue,
                    this.filler,
                    this.rangeFiller,
                ),
            );
        }
    }

    writeValue(value: TuiDayRange | null) {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    private get itemSelected(): boolean {
        return this.items.findIndex(item => String(item) === this.nativeValue) !== -1;
    }

    private toggle() {
        this.open = !this.open;
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }

    private clampValue(value: TuiDayRange): TuiDayRange {
        const clampedBottom =
            this.minLength && value.from.append(this.minLength).dayAfter(value.to)
                ? new TuiDayRange(
                      value.from,
                      value.from.append(this.minLength).append({day: -1}),
                  )
                : value;

        const availableMax = this.maxLength
            ? clampedBottom.from.append(this.maxLength).append({day: -1})
            : this.max;

        return clampedBottom.to.dayAfter(availableMax)
            ? new TuiDayRange(clampedBottom.from, availableMax)
            : clampedBottom;
    }
}
