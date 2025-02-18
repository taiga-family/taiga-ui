import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    signal,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {MaskitoOptions} from '@maskito/core';
import {MASKITO_DEFAULT_OPTIONS} from '@maskito/core';
import {maskitoDateRangeOptionsGenerator} from '@maskito/kit';
import {tuiAsControl} from '@taiga-ui/cdk/classes';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiDateMode, TuiDay, TuiDayLike} from '@taiga-ui/cdk/date-time';
import {
    DATE_FILLER_LENGTH,
    DATE_RANGE_FILLER_LENGTH,
    RANGE_SEPARATOR_CHAR,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {
    changeDateSeparator,
    tuiIsPresent,
    tuiNullableSame,
    tuiPure,
} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiMarkerHandler} from '@taiga-ui/core/components/calendar';
import {tuiAsDataListHost} from '@taiga-ui/core/components/data-list';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {TuiDayRangePeriod} from '@taiga-ui/kit/components/calendar-range';
import type {TuiInputDateOptions} from '@taiga-ui/kit/tokens';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_TEXTS,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    TUI_MOBILE_CALENDAR_PROVIDER,
    tuiDateStreamWithTransformer,
} from '@taiga-ui/kit/tokens';
import {
    AbstractTuiNullableControl,
    tuiAsControl as tuiAsLegacyControl,
} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {TUI_DATE_MODE_MASKITO_ADAPTER} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {map} from 'rxjs';

@Component({
    standalone: false,
    selector: 'tui-input-date-range',
    templateUrl: './input-date-range.template.html',
    styleUrls: ['./input-date-range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateRangeComponent),
        tuiAsControl(TuiInputDateRangeComponent as any),
        tuiAsLegacyControl(TuiInputDateRangeComponent),
        tuiDateStreamWithTransformer(TUI_DATE_RANGE_VALUE_TRANSFORMER),
        tuiAsDataListHost(TuiInputDateRangeComponent),
        TUI_MOBILE_CALENDAR_PROVIDER,
    ],
    host: {
        '[attr.data-size]': 'size',
        '(click)': 'onClick()',
    },
})
export class TuiInputDateRangeComponent
    extends AbstractTuiNullableControl<TuiDayRange>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly mobileCalendar = inject(TUI_MOBILE_CALENDAR, {optional: true});
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly nativeValue = signal('');

    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer = inject(
        TUI_DATE_RANGE_VALUE_TRANSFORMER,
        {optional: true},
    );

    protected readonly dateFiller$ = this.dateTexts$.pipe(
        map((dateTexts) =>
            changeDateSeparator(
                dateTexts[this.dateFormat.mode],
                this.dateFormat.separator,
            ),
        ),
    );

    protected dateFormat = TUI_DEFAULT_DATE_FORMAT;
    protected readonly dateFormat$ = inject(TUI_DATE_FORMAT)
        .pipe(tuiWatch(this.cdr), takeUntilDestroyed())
        .subscribe((format) => {
            this.dateFormat = format;
        });

    protected selectedActivePeriod: TuiDayRangePeriod | null = null;

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
            : nativeValue();
    }

    public get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public onClick(): void {
        if (!this.isMobile && this.interactive) {
            this.toggle();
        }
    }

    public onValueChange(value: string): void {
        this.nativeValue.set(value);

        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value && !this.mobileCalendar) {
            this.onOpenChange(true);
        }

        if (this.activePeriod) {
            this.nativeValue.set('');
        }

        this.value =
            value.length === DATE_RANGE_FILLER_LENGTH && !this.activePeriod
                ? TuiDayRange.normalizeParse(value, this.dateFormat.mode)
                : null;

        if (!this.value) {
            this.selectedActivePeriod = null;
        }
    }

    public onRangeChange(range: TuiDayRange | null): void {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue.set('');
        }

        this.value = range;
    }

    public override writeValue(value: TuiDayRange | null): void {
        if (this.value === null && value === this.value) {
            return;
        }

        super.writeValue(value);
        this.nativeValue.set(this.value ? this.computedValue : '');
        this.selectedActivePeriod = this.findActivePeriodBy(this.value);
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
        return this.selectedActivePeriod ?? this.findActivePeriodBy(this.value);
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

    protected getComputedRangeFiller(dateFiller: string): string {
        return this.activePeriod ? '' : this.getDateRangeFiller(dateFiller);
    }

    protected onIconClick(): void {
        if (this.isMobile && this.interactive) {
            this.onOpenChange(true);
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
            (this.nativeValue().length === DATE_FILLER_LENGTH ||
                this.nativeValue().length ===
                    DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length)
        ) {
            this.value = TuiDayRange.normalizeParse(
                this.nativeValue(),
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
        return this.items.findIndex((item) => String(item) === this.nativeValue()) !== -1;
    }

    // eslint-disable-next-line @typescript-eslint/max-params,max-params
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

    private findActivePeriodBy(value: TuiDayRange | null): TuiDayRangePeriod | null {
        return (
            this.items.find((item) =>
                tuiNullableSame(
                    value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) ?? null
        );
    }
}
