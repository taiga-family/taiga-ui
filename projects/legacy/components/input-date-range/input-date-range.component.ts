import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {MaskitoOptions} from '@maskito/core';
import {MASKITO_DEFAULT_OPTIONS} from '@maskito/core';
import {maskitoDateRangeOptionsGenerator} from '@maskito/kit';
import type {
    TuiBooleanHandler,
    TuiDateMode,
    TuiDay,
    TuiDayLike,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    AbstractTuiNullableControl,
    changeDateSeparator,
    DATE_FILLER_LENGTH,
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiDayRange,
    tuiIsPresent,
    TuiMonth,
    tuiNullableSame,
    tuiPure,
    tuiWatch,
} from '@taiga-ui/cdk';
import type {
    TuiMarkerHandler,
    TuiSizeL,
    TuiSizeS,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {
    TUI_DATE_FORMAT,
    TUI_DEFAULT_DATE_FORMAT,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import type {TuiDayRangePeriod, TuiInputDateOptions} from '@taiga-ui/kit';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_TEXTS,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    TUI_MOBILE_CALENDAR_PROVIDER,
    tuiDateStreamWithTransformer,
} from '@taiga-ui/kit';
import {TUI_DATE_MODE_MASKITO_ADAPTER} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {map} from 'rxjs';

@Component({
    selector: 'tui-input-date-range',
    templateUrl: './input-date-range.template.html',
    styleUrls: ['./input-date-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateRangeComponent),
        tuiAsControl(TuiInputDateRangeComponent),
        tuiDateStreamWithTransformer(TUI_DATE_RANGE_VALUE_TRANSFORMER),
        TUI_MOBILE_CALENDAR_PROVIDER,
    ],
})
export class TuiInputDateRangeComponent
    extends AbstractTuiNullableControl<TuiDayRange>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly mobileCalendar = inject(TUI_MOBILE_CALENDAR, {optional: true});
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Input()
    public markerHandler: TuiMarkerHandler | null = null;

    @Input()
    public defaultViewedMonth = TuiMonth.currentLocal();

    @Input()
    public items: readonly TuiDayRangePeriod[] = [];

    @Input()
    public min: TuiDay | null = this.options.min;

    @Input()
    public max: TuiDay | null = this.options.max;

    @Input()
    public minLength: TuiDayLike | null = null;

    @Input()
    public maxLength: TuiDayLike | null = null;

    public open = false;

    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer = inject(
        TUI_DATE_RANGE_VALUE_TRANSFORMER,
        {optional: true},
    );

    protected readonly dateFiller$ = this.dateTexts$.pipe(
        map(dateTexts =>
            changeDateSeparator(
                dateTexts[this.dateFormat.mode],
                this.dateFormat.separator,
            ),
        ),
    );

    protected dateFormat = TUI_DEFAULT_DATE_FORMAT;
    protected readonly dateFormat$ = inject(TUI_DATE_FORMAT)
        .pipe(tuiWatch(this.cdr), takeUntilDestroyed())
        .subscribe(format => {
            this.dateFormat = format;
        });

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get computedExampleText(): string {
        return this.items.length
            ? this.textfield?.nativeFocusableElement?.placeholder || ''
            : '';
    }

    public get computedValue(): string {
        const {value, nativeValue, activePeriod} = this;

        if (activePeriod) {
            return String(activePeriod);
        }

        return value
            ? value.getFormattedDayRange(this.dateFormat.mode, this.dateFormat.separator)
            : nativeValue;
    }

    @HostListener('click')
    public onClick(): void {
        if (!this.isMobile && this.interactive) {
            this.open = !this.open;
        }
    }

    public onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value && !this.mobileCalendar) {
            this.onOpenChange(true);
        }

        this.value =
            value.length === DATE_RANGE_FILLER_LENGTH
                ? TuiDayRange.normalizeParse(value, this.dateFormat.mode)
                : null;
    }

    public onRangeChange(range: TuiDayRange | null): void {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue = '';
        }

        this.value = range;
    }

    public override writeValue(value: TuiDayRange | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    protected get computedMask(): MaskitoOptions {
        return this.activePeriod
            ? MASKITO_DEFAULT_OPTIONS
            : this.calculateMask(
                  this.dateFormat.mode,
                  this.dateFormat.separator,
                  this.min,
                  this.max,
                  this.minLength,
                  this.maxLength,
              );
    }

    protected get activePeriod(): TuiDayRangePeriod | null {
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

    protected get showValueTemplate(): boolean {
        return tuiIsPresent(this.value) && !this.focused;
    }

    protected get computedContent(): PolymorpheusContent {
        return this.activePeriod?.content || this.computedValue;
    }

    protected get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocus === false) {
            return false;
        }

        if (this.open || this.computedFocused) {
            return true;
        }

        return null;
    }

    protected get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    protected set nativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    protected getComputedRangeFiller(dateFiller: string): string {
        return this.activePeriod ? '' : this.getDateRangeFiller(dateFiller);
    }

    protected onIconClick(): void {
        if (this.isMobile && this.interactive) {
            this.open = true;
        }
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected onActiveZone(focused: boolean): void {
        this.updateFocused(focused);

        if (
            !focused &&
            !this.itemSelected &&
            (this.nativeValue.length === DATE_FILLER_LENGTH ||
                this.nativeValue.length ===
                    DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length)
        ) {
            this.value = TuiDayRange.normalizeParse(
                this.nativeValue,
                this.dateFormat.mode,
            );
        }
    }

    protected override valueIdenticalComparator(
        oldValue: TuiDayRange | null,
        newValue: TuiDayRange | null,
    ): boolean {
        return tuiNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }

    private get itemSelected(): boolean {
        return this.items.findIndex(item => String(item) === this.nativeValue) !== -1;
    }

    @tuiPure
    private calculateMask(
        dateFormat: TuiDateMode,
        dateSeparator: string,
        min: TuiDay | null,
        max: TuiDay | null,
        minLength: TuiDayLike | null,
        maxLength: TuiDayLike | null,
    ): MaskitoOptions {
        return maskitoDateRangeOptionsGenerator({
            dateSeparator,
            mode: TUI_DATE_MODE_MASKITO_ADAPTER[dateFormat],
            min: (min || TUI_FIRST_DAY).toLocalNativeDate(),
            max: (max || TUI_LAST_DAY).toLocalNativeDate(),
            minLength: minLength || {},
            maxLength: maxLength || {},
        });
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
