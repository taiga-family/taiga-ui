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
import {MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiMultipleControl,
    AbstractTuiValueTransformer,
    ALWAYS_FALSE_HANDLER,
    changeDateSeparator,
    InjectFlags,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    tuiDateClamp,
    TuiDateMode,
    TuiDay,
    TuiFocusableElementAccessor,
    tuiIsString,
    TuiMapper,
    TuiMonth,
    TuiTypedMapper,
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
import {TuiStringifiableItem} from '@taiga-ui/kit/classes';
import {TuiInputTagComponent} from '@taiga-ui/kit/components/input-tag';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_VALUE_TRANSFORMER,
    TUI_DONE_WORD,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    tuiDateStreamWithTransformer,
    TuiInputDateOptions,
} from '@taiga-ui/kit/tokens';
import {tuiImmutableUpdateInputDateMulti} from '@taiga-ui/kit/utils';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-input-date[multiple]',
    templateUrl: './input-date-multi.template.html',
    styleUrls: ['../input-date/input-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateMultiComponent),
        tuiAsControl(TuiInputDateMultiComponent),
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
export class TuiInputDateMultiComponent
    extends AbstractTuiMultipleControl<TuiDay>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiInputTagComponent)
    private readonly inputTag?: TuiInputTagComponent;

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
    defaultActiveYearMonth = TuiMonth.currentLocal();

    @Input()
    expandable = false;

    @Input()
    inputHidden = false;

    @Input()
    search: string | null = '';

    @Input()
    placeholder = '';

    @Input()
    rows = Infinity;

    maskitoOptions: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
        separator: '.',
        min: this.min?.toLocalNativeDate(),
        max: this.max?.toLocalNativeDate(),
    });

    open = false;

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
        override readonly valueTransformer: AbstractTuiValueTransformer<
            readonly TuiDay[]
        > | null,
        @Inject(TUI_INPUT_DATE_OPTIONS) private readonly options: TuiInputDateOptions,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_DONE_WORD) readonly doneWord$: Observable<string>,
    ) {
        super(control, cdr, valueTransformer);
    }

    @Input()
    tagValidator: TuiBooleanHandler<string> = (tag: TuiDay | string) => {
        const {year, month, day} = tuiIsString(tag)
            ? TuiDay.parseRawDateString(tag)
            : tag;
        const date = new TuiDay(year, month, day);

        return (
            (TuiDay.isValidDay(year, month, day) &&
                this.min?.daySameOrBefore(date) &&
                this.max?.daySameOrAfter(date)) ??
            false
        );
    };

    @HostListener('click')
    onClick(): void {
        if (!this.isMobile && this.interactive) {
            this.open = !this.open;
        }
    }

    readonly disabledItemHandlerWrapper: TuiMapper<
        TuiBooleanHandler<string> | TuiBooleanHandler<TuiDay>,
        TuiBooleanHandler<TuiStringifiableItem<any> | string>
    > = handler => stringifiable =>
        tuiIsString(stringifiable) || handler(stringifiable.item);

    readonly valueMapper: TuiTypedMapper<
        [readonly TuiDay[]],
        ReadonlyArray<TuiStringifiableItem<TuiDay>>
    > = value => value.map(item => new TuiStringifiableItem(item, item => String(item)));

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get nativeDropdownMode(): boolean {
        return this.isMobile;
    }

    get computedMin(): TuiDay {
        return this.min ?? this.options.min;
    }

    get computedMax(): TuiDay {
        return this.max ?? this.options.max;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
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

    get computedActiveYearMonth(): TuiMonth {
        return (
            this.month ||
            this.value[this.value.length - 1] ||
            tuiDateClamp(this.defaultActiveYearMonth, this.computedMin, this.computedMax)
        );
    }

    onIconClick(): void {
        if (this.isMobile && this.interactive) {
            this.open = true;
        }
    }

    onEnter(search: string): void {
        if (!this.tagValidator(search)) {
            return;
        }

        this.value = tuiImmutableUpdateInputDateMulti(
            this.value,
            TuiDay.normalizeParse(search),
        );

        if (this.inputTag) {
            this.inputTag.search = '';
        }

        this.done();
    }

    onValueChange(value: ReadonlyArray<TuiStringifiableItem<TuiDay>>): void {
        this.control?.updateValueAndValidity({emitEvent: false});

        if (!value.length && !this.mobileCalendar) {
            this.onOpenChange(true);
        }

        this.value = value.map(({item}) => item);
    }

    onDayClick(value: TuiDay): void {
        this.value = tuiImmutableUpdateInputDateMulti(this.value, value);
    }

    done(): void {
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
}
