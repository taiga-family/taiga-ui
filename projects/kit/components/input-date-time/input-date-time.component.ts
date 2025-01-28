import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MaskitoOptions} from '@maskito/core';
import {maskitoDateTimeOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiControl,
    AbstractTuiValueTransformer,
    ALWAYS_FALSE_HANDLER,
    changeDateSeparator,
    DATE_FILLER_LENGTH,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_FIRST_DAY,
    TUI_IS_IOS,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    tuiClamp,
    TuiContextWithImplicit,
    tuiDateClamp,
    TuiDateMode,
    TuiDay,
    TuiFocusableElementAccessor,
    TuiMonth,
    tuiNullableSame,
    tuiPure,
    TuiTime,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {
    DATE_TIME_SEPARATOR,
    TUI_DATE_MODE_MASKITO_ADAPTER,
} from '@taiga-ui/kit/constants';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_TIME_VALUE_TRANSFORMER,
    TUI_INPUT_DATE_OPTIONS,
    TUI_TIME_TEXTS,
    tuiDateStreamWithTransformer,
    TuiInputDateOptions,
} from '@taiga-ui/kit/tokens';
import {BehaviorSubject, combineLatest, Observable, timer} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-input-date-time',
    templateUrl: './input-date-time.template.html',
    styleUrls: ['./input-date-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateTimeComponent),
        tuiAsControl(TuiInputDateTimeComponent),
        tuiDateStreamWithTransformer(TUI_DATE_TIME_VALUE_TRANSFORMER),
    ],
})
export class TuiInputDateTimeComponent
    extends AbstractTuiControl<[TuiDay | null, TuiTime | null]>
    implements
        TuiWithOptionalMinMax<TuiDay | [TuiDay | null, TuiTime | null] | null>,
        TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private month: TuiMonth | null = null;
    private readonly timeMode$ = new BehaviorSubject<TuiTimeMode>('HH:MM');

    @Input()
    min: TuiDay | [TuiDay | null, TuiTime | null] | null = this.options.min;

    @Input()
    max: TuiDay | [TuiDay | null, TuiTime | null] | null = this.options.max;

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    defaultActiveYearMonth = TuiMonth.currentLocal();

    @Input()
    set timeMode(value: TuiTimeMode) {
        this.timeMode$.next(value);
    }

    get timeMode(): TuiTimeMode {
        return this.timeMode$.value;
    }

    open = false;

    readonly type!: TuiContextWithImplicit<TuiActiveZoneDirective>;

    readonly filler$: Observable<string> = combineLatest([
        this.dateTexts$.pipe(
            map(dateTexts =>
                changeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
            ),
        ),
        this.timeTexts$,
        this.timeMode$,
    ]).pipe(
        map(([dateFiller, timeTexts, timeMode]) =>
            this.getDateTimeString(dateFiller, timeTexts[timeMode]),
        ),
    );

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_DATE_FORMAT) readonly dateFormat: TuiDateMode,
        @Inject(TUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(TUI_TIME_TEXTS)
        readonly timeTexts$: Observable<Record<TuiTimeMode, string>>,
        @Inject(TUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<TuiDateMode, string>>,
        @Optional()
        @Inject(TUI_DATE_TIME_VALUE_TRANSFORMER)
        override readonly valueTransformer: AbstractTuiValueTransformer<
            [TuiDay | null, TuiTime | null]
        > | null,
        @Inject(TUI_INPUT_DATE_OPTIONS) private readonly options: TuiInputDateOptions,
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
    ) {
        super(control, cdr, valueTransformer);
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get computedMin(): TuiDay | [TuiDay, TuiTime] {
        /**
         * TODO: we can delete this workaround in v4.0
         * after solving this issue:
         * https://github.com/taiga-family/maskito/issues/604
         */
        if (this.value && this.control?.pristine) {
            return TUI_FIRST_DAY;
        }

        return this.toTuiDay(this.min, this.options.min);
    }

    get computedMax(): TuiDay | [TuiDay, TuiTime] {
        /**
         * TODO: we can delete this workaround in v4.0
         * after solving this issue:
         * https://github.com/taiga-family/maskito/issues/604
         */
        if (this.value && this.control?.pristine) {
            return TUI_LAST_DAY;
        }

        return this.toTuiDay(this.max, this.options.max);
    }

    get fillerLength(): number {
        return DATE_FILLER_LENGTH + DATE_TIME_SEPARATOR.length + this.timeMode.length;
    }

    get maskOptions(): MaskitoOptions {
        return this.calculateMask(
            this.computedMin,
            this.computedMax,
            this.timeMode,
            this.dateFormat,
            this.dateSeparator,
        );
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return !!this.textfield?.focused;
    }

    get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    private get nativePicker(): boolean {
        return this.options.nativePicker && this.isMobile;
    }

    get showNativePicker(): boolean {
        return this.nativePicker && this.timeMode === 'HH:MM';
    }

    get computedValue(): string {
        const {value, nativeValue, timeMode} = this;
        const [date, time] = value;
        const hasTimeInputChars = nativeValue.length > DATE_FILLER_LENGTH;

        if (!date || (!time && hasTimeInputChars)) {
            return nativeValue;
        }

        return this.getDateTimeString(date, time, timeMode);
    }

    get calendarValue(): TuiDay | null {
        return this.value[0];
    }

    get calendarMinDay(): TuiDay {
        const min = this.toTuiDay(this.min, this.options.min);

        return Array.isArray(min) ? min[0] : min;
    }

    get calendarMaxDay(): TuiDay {
        const max = this.toTuiDay(this.max, this.options.max);

        return Array.isArray(max) ? max[0] : max;
    }

    get computedActiveYearMonth(): TuiMonth {
        const {computedMin, computedMax} = this;

        return (
            this.month ||
            this.value[0] ||
            tuiDateClamp(
                this.defaultActiveYearMonth,
                Array.isArray(computedMin) ? computedMin[0] : computedMin,
                Array.isArray(computedMax) ? computedMax[0] : computedMax,
            )
        );
    }

    get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    @HostListener('click')
    onClick(): void {
        this.open = !this.open;
    }

    onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value) {
            this.onOpenChange(true);
        }

        if (value.length < DATE_FILLER_LENGTH) {
            this.value = [null, null];

            return;
        }

        const [date, time] = value.split(DATE_TIME_SEPARATOR);
        const parsedDate = TuiDay.normalizeParse(date, this.dateFormat);
        const parsedTime =
            time && time.length === this.timeMode.length
                ? TuiTime.fromString(time)
                : null;

        this.open = false;
        this.value = [parsedDate, parsedTime];
    }

    onDayClick(day: TuiDay): void {
        const modifiedTime = this.value[1] && this.clampTime(this.value[1], day);
        const newCaretIndex = DATE_FILLER_LENGTH + DATE_TIME_SEPARATOR.length;

        this.value = [day, modifiedTime];
        this.updateNativeValue(day);
        this.nativeFocusableElement?.setSelectionRange(newCaretIndex, newCaretIndex);
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

        if (focused) {
            return;
        }

        timer(0)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.nativeValue = this.trimTrailingSeparator(this.nativeValue);
            });

        if (
            this.value[0] === null ||
            this.value[1] !== null ||
            this.nativeValue.length === this.fillerLength ||
            this.timeMode === 'HH:MM'
        ) {
            return;
        }

        const [, time] = this.nativeValue.split(DATE_TIME_SEPARATOR);

        if (!time) {
            return;
        }

        const parsedTime = TuiTime.fromString(time);

        this.value = [this.value[0], parsedTime];
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    override writeValue(value: [TuiDay | null, TuiTime | null] | null): void {
        super.writeValue(value);

        this.nativeValue =
            this.value && (this.value[0] || this.value[1]) ? this.computedValue : '';
    }

    protected getFallbackValue(): [TuiDay | null, TuiTime | null] {
        return [null, null];
    }

    protected override valueIdenticalComparator(
        oldValue: [TuiDay | null, TuiTime | null],
        newValue: [TuiDay | null, TuiTime | null],
    ): boolean {
        return (
            tuiNullableSame(oldValue[0], newValue[0], (a, b) => a.daySame(b)) &&
            tuiNullableSame(oldValue[1], newValue[1], (a, b) => String(a) === String(b))
        );
    }

    @tuiPure
    private calculateMask(
        min: TuiDay | [TuiDay, TuiTime],
        max: TuiDay | [TuiDay, TuiTime],
        timeMode: TuiTimeMode,
        dateFormat: TuiDateMode,
        dateSeparator: string,
    ): MaskitoOptions {
        return maskitoDateTimeOptionsGenerator({
            timeMode,
            dateSeparator,
            dateMode: TUI_DATE_MODE_MASKITO_ADAPTER[dateFormat],
            min: this.toNativeDate(min),
            max: this.toNativeDate(max),
        });
    }

    @tuiPure
    private getDateTimeString(
        date: TuiDay | string,
        time: TuiTime | string | null,
        timeMode: TuiTimeMode = 'HH:MM',
    ): string {
        const dateString =
            date instanceof TuiDay
                ? date.toString(this.dateFormat, this.dateSeparator)
                : date;
        const timeString = time instanceof TuiTime ? time.toString(timeMode) : time || '';

        return timeString
            ? `${dateString}${DATE_TIME_SEPARATOR}${timeString}`
            : dateString;
    }

    private updateNativeValue(day: TuiDay): void {
        const time = this.nativeValue.split(DATE_TIME_SEPARATOR)[1] || '';

        this.nativeValue = this.getDateTimeString(day, time);
    }

    private clampTime(time: TuiTime, day: TuiDay): TuiTime {
        const {computedMin, computedMax} = this;

        const ms = time.toAbsoluteMilliseconds();
        const min =
            Array.isArray(computedMin) && day.daySame(this.calendarMinDay)
                ? computedMin[1].toAbsoluteMilliseconds()
                : -Infinity;
        const max =
            Array.isArray(computedMax) && day.daySame(this.calendarMaxDay)
                ? computedMax[1].toAbsoluteMilliseconds()
                : Infinity;

        return TuiTime.fromAbsoluteMilliseconds(tuiClamp(ms, min, max));
    }

    private trimTrailingSeparator(value: string): string {
        return value.replace(
            new RegExp(`(\\${this.dateSeparator}|${DATE_TIME_SEPARATOR}|\\.)$`),
            '',
        );
    }

    private toNativeDate(value: TuiDay | [TuiDay, TuiTime]): Date {
        if (!Array.isArray(value)) {
            return value.toLocalNativeDate();
        }

        const [{year, month, day}, {hours, minutes, seconds, ms}] = value;

        return new Date(year, month, day, hours, minutes, seconds, ms);
    }

    private toTuiDay(
        value: TuiDay | [TuiDay | null, TuiTime | null] | null,
        fallback: TuiDay,
    ): TuiDay | [TuiDay, TuiTime] {
        if (!value) {
            return fallback;
        }

        if (!Array.isArray(value)) {
            return value;
        }

        const [tuiDay, tuiTime] = value;

        if (!tuiDay) {
            return fallback;
        }

        if (!tuiTime) {
            return tuiDay;
        }

        return value as [TuiDay, TuiTime];
    }
}
