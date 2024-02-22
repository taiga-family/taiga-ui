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
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    changeDateSeparator,
    DATE_FILLER_LENGTH,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_IS_MOBILE,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiContext,
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
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
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
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {map, Observable, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-input-date',
    templateUrl: './input-date.template.html',
    styleUrls: ['./input-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateComponent),
        tuiAsControl(TuiInputDateComponent),
        tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER),
    ],
})
export class TuiInputDateComponent
    extends AbstractTuiNullableControl<TuiDay>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly injector = inject(INJECTOR);
    private readonly dialogs = inject(TuiDialogService);
    private readonly mobileCalendar = inject(TUI_MOBILE_CALENDAR, {optional: true});
    private month: TuiMonth | null = null;
    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer = inject(TUI_DATE_VALUE_TRANSFORMER, {
        optional: true,
    });

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

    readonly type!: TuiContext<TuiActiveZoneDirective>;

    readonly filler$: Observable<string> = this.dateTexts$.pipe(
        map(dateTexts =>
            changeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );

    readonly isMobile = inject(TUI_IS_MOBILE);
    readonly dateFormat = inject(TUI_DATE_FORMAT);
    readonly dateSeparator = inject(TUI_DATE_SEPARATOR);

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get computedMin(): TuiDay {
        return this.min ?? this.options.min;
    }

    get computedMax(): TuiDay {
        return this.max ?? this.options.max;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return !!this.textfield?.focused;
    }

    get computedMobile(): boolean {
        return this.isMobile && (!!this.mobileCalendar || this.nativePicker);
    }

    get nativePicker(): boolean {
        return this.options.nativePicker;
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
        if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
            return this.items[0].displayDay;
        }

        return (
            this.month ||
            this.value ||
            tuiDateClamp(this.defaultActiveYearMonth, this.computedMin, this.computedMax)
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

    get canOpen(): boolean {
        return this.interactive && !this.computedMobile;
    }

    get computedMask(): MaskitoOptions {
        return this.activeItem
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
        if (!this.isMobile) {
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
        if (!this.computedMobile || !this.mobileCalendar) {
            return;
        }

        this.dialogs
            .open<TuiDay>(new PolymorpheusComponent(this.mobileCalendar, this.injector), {
                size: 'fullscreen',
                closeable: false,
                data: {
                    single: true,
                    min: this.min,
                    max: this.max,
                    disabledItemHandler: this.disabledItemHandler,
                },
            })
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => {
                this.value = value;
            });
    }

    onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value) {
            this.onOpenChange(true);
        }

        this.value =
            value.length !== DATE_FILLER_LENGTH
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
