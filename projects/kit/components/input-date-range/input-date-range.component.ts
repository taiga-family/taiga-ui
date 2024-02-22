import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    INJECTOR,
    Input,
    ViewChild,
} from '@angular/core';
import {MASKITO_DEFAULT_OPTIONS, MaskitoOptions} from '@maskito/core';
import {maskitoDateRangeOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    changeDateSeparator,
    DATE_FILLER_LENGTH,
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_FIRST_DAY,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiDateMode,
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    TuiFocusableElementAccessor,
    tuiIsPresent,
    TuiMonth,
    tuiNullableSame,
    tuiPure,
    TuiTypedMapper,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';
import {
    MAX_DAY_RANGE_LENGTH_MAPPER,
    TUI_DATE_MODE_MASKITO_ADAPTER,
} from '@taiga-ui/kit/constants';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_TEXTS,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    tuiDateStreamWithTransformer,
    TuiInputDateOptions,
} from '@taiga-ui/kit/tokens';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {map, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-input-date-range',
    templateUrl: './input-date-range.template.html',
    styleUrls: ['./input-date-range.style.less'],
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

    private readonly injector = inject(INJECTOR);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly dialogs = inject(TuiDialogService);
    private readonly mobileCalendar = inject(TUI_MOBILE_CALENDAR, {optional: true});
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer = inject(
        TUI_DATE_RANGE_VALUE_TRANSFORMER,
        {optional: true},
    );

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    defaultViewedMonth = TuiMonth.currentLocal();

    @Input()
    items: readonly TuiDayRangePeriod[] = [];

    @Input()
    min: TuiDay | null = this.options.min;

    @Input()
    max: TuiDay | null = this.options.max;

    @Input()
    minLength: TuiDayLike | null = null;

    @Input()
    maxLength: TuiDayLike | null = null;

    open = false;

    readonly maxLengthMapper: TuiTypedMapper<
        [TuiDay, TuiDayRange | null, TuiDayLike | null, boolean],
        TuiDay
    > = MAX_DAY_RANGE_LENGTH_MAPPER;

    readonly dateFiller$ = this.dateTexts$.pipe(
        map(dateTexts =>
            changeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );

    readonly dateFormat = inject(TUI_DATE_FORMAT);
    readonly dateSeparator = inject(TUI_DATE_SEPARATOR);

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get computedMin(): TuiDay {
        return this.min ?? TUI_FIRST_DAY;
    }

    get computedMax(): TuiDay {
        return this.max ?? TUI_LAST_DAY;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return !!this.textfield?.focused;
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
            ? this.textfield?.nativeFocusableElement?.placeholder || ''
            : '';
    }

    get computedMask(): MaskitoOptions {
        return this.activePeriod
            ? MASKITO_DEFAULT_OPTIONS
            : this.calculateMask(
                  this.dateFormat,
                  this.dateSeparator,
                  this.computedMin,
                  this.computedMax,
                  this.minLength,
                  this.maxLength,
              );
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

    get showValueTemplate(): boolean {
        return tuiIsPresent(this.value) && !this.focused;
    }

    get computedContent(): PolymorpheusContent {
        return this.activePeriod?.content || this.computedValue;
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
        return this.nativeFocusableElement?.value || '';
    }

    set nativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    @HostListener('click')
    onClick(): void {
        if (!this.isMobile) {
            this.toggle();
        }
    }

    getComputedRangeFiller(dateFiller: string): string {
        return this.activePeriod ? '' : this.getDateRangeFiller(dateFiller);
    }

    onIconClick(): void {
        if (!this.computedMobile || !this.mobileCalendar) {
            return;
        }

        this.dialogs
            .open<TuiDayRange>(
                new PolymorpheusComponent(this.mobileCalendar, this.injector),
                {
                    size: 'fullscreen',
                    closeable: false,
                    data: {
                        min: this.maxLengthMapper(
                            this.computedMin,
                            this.value,
                            this.maxLength,
                            true,
                        ),
                        max: this.maxLengthMapper(
                            this.computedMax,
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
                this.value = value;
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

        this.value =
            value.length === DATE_RANGE_FILLER_LENGTH
                ? TuiDayRange.normalizeParse(value, this.dateFormat)
                : null;
    }

    onRangeChange(range: TuiDayRange | null): void {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue = '';
        }

        this.value = range;
    }

    // TODO: investigate if it is used anywhere and (if not) delete it in v4.0
    onItemSelect(item: TuiDayRangePeriod | string): void {
        this.toggle();
        this.focusInput();

        if (typeof item !== 'string') {
            this.value = item.range.dayLimit(this.min, this.max);

            return;
        }

        if (this.activePeriod === null) {
            return;
        }

        this.value = null;
        this.nativeValue = '';
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
            this.value = TuiDayRange.normalizeParse(this.nativeValue, this.dateFormat);
        }
    }

    override writeValue(value: TuiDayRange | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    protected override valueIdenticalComparator(
        oldValue: TuiDayRange | null,
        newValue: TuiDayRange | null,
    ): boolean {
        return tuiNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }

    @tuiPure
    private calculateMask(
        dateFormat: TuiDateMode,
        dateSeparator: string,
        min: TuiDay,
        max: TuiDay,
        minLength: TuiDayLike | null,
        maxLength: TuiDayLike | null,
    ): MaskitoOptions {
        return maskitoDateRangeOptionsGenerator({
            dateSeparator,
            mode: TUI_DATE_MODE_MASKITO_ADAPTER[dateFormat],
            min: min.toLocalNativeDate(),
            max: max.toLocalNativeDate(),
            minLength: minLength || {},
            maxLength: maxLength || {},
        });
    }

    private get itemSelected(): boolean {
        return this.items.findIndex(item => String(item) === this.nativeValue) !== -1;
    }

    private toggle(): void {
        this.open = !this.open;
    }

    private focusInput(preventScroll = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }

    private getDateRangeFiller(dateFiller: string): string {
        return `${dateFiller}${RANGE_SEPARATOR_CHAR}${dateFiller}`;
    }
}
