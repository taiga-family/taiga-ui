import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    HostListener,
    Inject,
    inject,
    Input,
    Optional,
    Self,
    Type,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MASKITO_DEFAULT_OPTIONS, MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    AbstractTuiValueTransformer,
    ALWAYS_FALSE_HANDLER,
    changeDateSeparator,
    DATE_FILLER_LENGTH,
    InjectFlags,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_FIRST_DAY,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    TUI_LAST_DISPLAYED_DAY,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    tuiDateClamp,
    TuiDateMode,
    TuiDay,
    TuiFocusableElementAccessor,
    TuiMonth,
    tuiNullableSame,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_DROPDOWN_COMPONENT,
    TUI_TEXTFIELD_SIZE,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiNamedDay} from '@taiga-ui/kit/classes';
import {TUI_DATE_MODE_MASKITO_ADAPTER} from '@taiga-ui/kit/constants';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_VALUE_TRANSFORMER,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    tuiDateStreamWithTransformer,
    TuiInputDateOptions,
} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-input-date:not([multiple])',
    templateUrl: './input-date.template.html',
    styleUrls: ['./input-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateComponent),
        tuiAsControl(TuiInputDateComponent),
        tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER),
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useFactory: () =>
                (inject(TUI_IS_MOBILE) &&
                    inject(TUI_MOBILE_CALENDAR, InjectFlags.Optional)) ||
                inject(TUI_DROPDOWN_COMPONENT, InjectFlags.SkipSelf),
        },
    ],
})
export class TuiInputDateComponent
    extends AbstractTuiNullableControl<TuiDay>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private month: TuiMonth | null = null;

    @Input()
    min: TuiDay | null = this.options.min;

    @Input()
    max: TuiDay | null = this.options.max;

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    items: readonly TuiNamedDay[] = [];

    @Input()
    defaultActiveYearMonth = TuiMonth.currentLocal();

    open = false;

    readonly type!: TuiContextWithImplicit<TuiActiveZoneDirective>;

    readonly filler$: Observable<string> = this.dateTexts$.pipe(
        map(dateTexts =>
            changeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Optional()
        @Inject(TUI_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<Record<string, any>> | null,
        @Inject(TUI_DATE_FORMAT) readonly dateFormat: TuiDateMode,
        @Inject(TUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(TUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<TuiDateMode, string>>,
        @Optional()
        @Inject(TUI_DATE_VALUE_TRANSFORMER)
        override readonly valueTransformer: AbstractTuiValueTransformer<TuiDay | null> | null,
        @Inject(TUI_INPUT_DATE_OPTIONS) private readonly options: TuiInputDateOptions,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
    ) {
        super(control, cdr, valueTransformer);
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get computedMin(): TuiDay {
        /**
         * TODO: we can delete this workaround in v4.0
         * after solving this issue:
         * https://github.com/taiga-family/maskito/issues/604
         */
        if (this.value && this.control?.pristine) {
            return TUI_FIRST_DAY;
        }

        return this.min ?? this.options.min;
    }

    get computedMax(): TuiDay {
        /**
         * TODO: we can delete this workaround in v4.0
         * after solving this issue:
         * https://github.com/taiga-family/maskito/issues/604
         */
        if (this.value && this.control?.pristine) {
            return TUI_LAST_DAY;
        }

        return this.max ?? this.options.max;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return !!this.textfield?.focused;
    }

    /**
     * @deprecated
     */
    get computedMobile(): boolean {
        return this.isMobile && (!!this.mobileCalendar || this.nativePicker);
    }

    get nativePicker(): boolean {
        return this.options.nativePicker && this.isMobile;
    }

    get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    get computedValue(): string {
        const {value, nativeValue, activeItem} = this;

        if (activeItem) {
            return String(activeItem);
        }

        return value ? value.toString(this.dateFormat, this.dateSeparator) : nativeValue;
    }

    get computedActiveYearMonth(): TuiMonth {
        const clampedDate = tuiDateClamp(
            this.defaultActiveYearMonth,
            this.computedMin,
            this.computedMax,
        );

        if (this.value?.dayAfter(TUI_LAST_DISPLAYED_DAY)) {
            return this.month || clampedDate;
        }

        if (this.items[0] && this.value?.daySame(this.items[0].day)) {
            return this.items[0].displayDay;
        }

        return this.month || this.value || clampedDate;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    set nativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    get computedMask(): MaskitoOptions {
        /**
         * TODO: we can delete this workaround in v4.0
         * after solving this issue:
         * https://github.com/taiga-family/maskito/issues/604
         */
        const nativeValueIsNotSynced = this.nativeValue !== this.computedValue;

        return this.activeItem || nativeValueIsNotSynced
            ? MASKITO_DEFAULT_OPTIONS
            : this.computeMaskOptions(
                  this.dateFormat,
                  this.dateSeparator,
                  this.computedMin,
                  this.computedMax,
              );
    }

    get activeItem(): TuiNamedDay | null {
        const {value} = this;

        return (value && this.items.find(item => item.day.daySame(value))) || null;
    }

    @HostListener('click')
    onClick(): void {
        if (!this.isMobile && this.interactive) {
            this.open = !this.open;
        }
    }

    getComputedFiller(filler: string): string {
        return this.activeItem ? '' : filler;
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * TODO: Remove in 4.0
     * @deprecated: use {@link onIconClick} instead
     */
    onMobileClick(): void {
        this.onIconClick();
    }

    onIconClick(): void {
        if (this.isMobile && this.interactive) {
            this.open = true;
        }
    }

    onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value && !this.mobileCalendar) {
            this.onOpenChange(true);
        }

        if (this.activeItem) {
            this.nativeValue = '';
        }

        this.value =
            value.length !== DATE_FILLER_LENGTH || this.activeItem
                ? null
                : TuiDay.normalizeParse(value, this.dateFormat);
    }

    onDayClick(value: TuiDay): void {
        this.value = value;
        this.open = false;
    }

    onMonthChange(month: TuiMonth): void {
        this.month = month;
    }

    onOpenChange(open: boolean): void {
        this.open = open;
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    override writeValue(value: TuiDay | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    protected override valueIdenticalComparator(
        oldValue: TuiDay | null,
        newValue: TuiDay | null,
    ): boolean {
        return tuiNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }

    @tuiPure
    private computeMaskOptions(
        mode: TuiDateMode,
        separator: string,
        min: TuiDay,
        max: TuiDay,
    ): MaskitoOptions {
        return maskitoDateOptionsGenerator({
            separator,
            mode: TUI_DATE_MODE_MASKITO_ADAPTER[mode],
            min: min.toLocalNativeDate(),
            max: max.toLocalNativeDate(),
        });
    }
}
