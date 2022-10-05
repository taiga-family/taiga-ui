import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostListener,
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
    changeDateSeparator,
    DATE_FILLER_LENGTH,
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiControlValueTransformer,
    TuiDateMode,
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiMapper,
    TuiMonth,
    tuiNullableSame,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';
import {EMPTY_MASK, MAX_DAY_RANGE_LENGTH_MAPPER} from '@taiga-ui/kit/constants';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_TEXTS,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    tuiDateStreamWithTransformer,
    TuiInputDateOptions,
} from '@taiga-ui/kit/tokens';
import {
    tuiCreateAutoCorrectedDateRangePipe,
    tuiCreateDateRangeMask,
} from '@taiga-ui/kit/utils/mask';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
    selector: `tui-input-date-range`,
    templateUrl: `./input-date-range.template.html`,
    styleUrls: [`./input-date-range.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateRangeComponent),
        tuiAsControl(TuiInputDateRangeComponent),
        tuiDateStreamWithTransformer(TUI_DATE_RANGE_VALUE_TRANSFORMER),
    ],
})
export class TuiInputDateRangeComponent
    extends AbstractTuiNullableControl<TuiDayRange>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly textMaskOptions: TuiTextMaskOptions = {
        mask: tuiCreateDateRangeMask(this.dateFormat, this.dateSeparator),
        pipe: tuiCreateAutoCorrectedDateRangePipe(this),
        guide: false,
    };

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
    items: readonly TuiDayRangePeriod[] = [];

    @Input()
    @tuiDefaultProp()
    min = this.options.min;

    @Input()
    @tuiDefaultProp()
    max = this.options.max;

    @Input()
    @tuiDefaultProp()
    minLength: TuiDayLike | null = null;

    @Input()
    @tuiDefaultProp()
    maxLength: TuiDayLike | null = null;

    open = false;

    readonly maxLengthMapper: TuiMapper<TuiDay, TuiDay> = MAX_DAY_RANGE_LENGTH_MAPPER;
    readonly dateFiller$ = this.dateTexts$.pipe(
        map(dateTexts =>
            changeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );

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
        private readonly mobileCalendar: Type<object> | null,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_DATE_FORMAT) readonly dateFormat: TuiDateMode,
        @Inject(TUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(TUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<TuiDateMode, string>>,
        @Optional()
        @Inject(TUI_DATE_RANGE_VALUE_TRANSFORMER)
        override readonly valueTransformer: TuiControlValueTransformer<TuiDayRange | null> | null,
        @Inject(TUI_INPUT_DATE_OPTIONS)
        private readonly options: TuiInputDateOptions,
    ) {
        super(control, changeDetectorRef, valueTransformer);
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

    get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    get canOpen(): boolean {
        return this.interactive && !this.computedMobile;
    }

    get computedExampleText(): string {
        return this.items.length
            ? this.textfield?.nativeFocusableElement?.placeholder || ``
            : ``;
    }

    get computedMask(): TuiTextMaskOptions {
        return this.activePeriod ? EMPTY_MASK : this.textMaskOptions;
    }

    get activePeriod(): TuiDayRangePeriod | null {
        return (
            this.items.find(item =>
                tuiNullableSame(
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

        return value
            ? value.getFormattedDayRange(this.dateFormat, this.dateSeparator)
            : nativeValue;
    }

    get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocus === false) {
            return false;
        }

        if (this.open || this.computedFocused) {
            return true;
        }

        return null;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
    }

    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    @HostListener(`click`)
    onClick(): void {
        if (!this.isMobile) {
            this.toggle();
        }
    }

    getComputedRangeFiller(dateFiller: string): string {
        return this.activePeriod ? `` : this.getDateRangeFiller(dateFiller);
    }

    onMobileClick(): void {
        if (!this.mobileCalendar) {
            this.toggle();

            return;
        }

        this.dialogService
            .open<TuiDayRange>(
                new PolymorpheusComponent(this.mobileCalendar, this.injector),
                {
                    size: `fullscreen`,
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

    onOpenChange(open: boolean): void {
        this.open = open;
    }

    onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value) {
            this.onOpenChange(true);
        }

        if (value.length !== DATE_RANGE_FILLER_LENGTH) {
            this.updateValue(null);

            return;
        }

        const parsedValue = TuiDayRange.normalizeParse(value, this.dateFormat);

        this.updateValue(
            !this.minLength && !this.maxLength
                ? parsedValue
                : this.clampValue(parsedValue),
        );
    }

    onRangeChange(range: TuiDayRange | null): void {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue = ``;
        }

        if (!tuiNullableSame<TuiDayRange>(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
        }
    }

    onItemSelect(item: string | TuiDayRangePeriod): void {
        this.toggle();
        this.focusInput();

        if (typeof item !== `string`) {
            this.updateValue(item.range.dayLimit(this.min, this.max));

            return;
        }

        if (this.activePeriod !== null) {
            this.updateValue(null);
            this.nativeValue = ``;
        }
    }

    onActiveZone(focused: boolean): void {
        this.updateFocused(focused);

        if (
            !focused &&
            !this.itemSelected &&
            (this.nativeValue.length === DATE_FILLER_LENGTH ||
                this.nativeValue.length ===
                    DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length)
        ) {
            this.updateValue(
                TuiDayRange.normalizeParse(this.nativeValue, this.dateFormat),
            );
        }
    }

    override writeValue(value: TuiDayRange | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : ``;
    }

    private get itemSelected(): boolean {
        return this.items.findIndex(item => String(item) === this.nativeValue) !== -1;
    }

    private toggle(): void {
        this.open = !this.open;
    }

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
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

    private getDateRangeFiller(dateFiller: string): string {
        return `${dateFiller}${RANGE_SEPARATOR_CHAR}${dateFiller}`;
    }
}
