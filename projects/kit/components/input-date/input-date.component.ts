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
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_FIRST_DAY,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    TuiActiveZoneDirective,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    TuiControlValueTransformer,
    TuiDateMode,
    TuiDay,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiMonth,
    tuiNullableSame,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiNamedDay} from '@taiga-ui/kit/classes';
import {EMPTY_MASK} from '@taiga-ui/kit/constants';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_VALUE_TRANSFORMER,
    TUI_MOBILE_CALENDAR,
} from '@taiga-ui/kit/tokens';
import {
    tuiCreateAutoCorrectedDatePipe,
    tuiCreateDateMask,
} from '@taiga-ui/kit/utils/mask';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TextMaskConfig} from 'angular2-text-mask';
import {Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {TUI_INPUT_DATE_PROVIDERS} from './input-date.providers';

@Component({
    selector: `tui-input-date`,
    templateUrl: `./input-date.template.html`,
    styleUrls: [`./input-date.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_INPUT_DATE_PROVIDERS,
})
export class TuiInputDateComponent
    extends AbstractTuiNullableControl<TuiDay>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private month: TuiMonth | null = null;

    private readonly textMaskOptions: TuiTextMaskOptions = {
        mask: tuiCreateDateMask(this.dateFormat, this.dateSeparator),
        pipe: tuiCreateAutoCorrectedDatePipe(this),
        guide: false,
    };

    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @tuiDefaultProp()
    items: readonly TuiNamedDay[] = [];

    @Input()
    @tuiDefaultProp()
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
        @Inject(TUI_DATE_VALUE_TRANSFORMER)
        readonly valueTransformer: TuiControlValueTransformer<TuiDay | null> | null,
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

    get calendarIcon(): string {
        return sizeBigger(this.textfieldSize.size)
            ? `tuiIconCalendarLarge`
            : `tuiIconCalendar`;
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

        return this.month || this.value || this.defaultActiveYearMonth;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
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

    get computedMask(): TextMaskConfig {
        return (this.activeItem
            ? EMPTY_MASK
            : this.textMaskOptions) as TuiTextMaskOptions as unknown as TextMaskConfig;
    }

    get activeItem(): TuiNamedDay | null {
        const {value} = this;

        return (value && this.items.find(item => item.day.daySame(value))) || null;
    }

    @HostListener(`click`)
    onClick(): void {
        if (!this.isMobile) {
            this.open = !this.open;
        }
    }

    getComputedFiller(filler: string): string {
        return this.activeItem ? `` : filler;
    }

    onMobileClick(): void {
        if (!this.mobileCalendar) {
            this.open = !this.open;

            return;
        }

        this.dialogService
            .open<TuiDay>(new PolymorpheusComponent(this.mobileCalendar, this.injector), {
                size: `fullscreen`,
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
                this.updateValue(value);
            });
    }

    onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value) {
            this.onOpenChange(true);
        }

        this.updateValue(
            value.length !== DATE_FILLER_LENGTH
                ? null
                : TuiDay.normalizeParse(value, this.dateFormat),
        );
    }

    onDayClick(value: TuiDay): void {
        this.updateValue(value);
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

    setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    writeValue(value: TuiDay | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : ``;
    }

    protected valueIdenticalComparator(
        oldValue: TuiDay | null,
        newValue: TuiDay | null,
    ): boolean {
        return tuiNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }
}
