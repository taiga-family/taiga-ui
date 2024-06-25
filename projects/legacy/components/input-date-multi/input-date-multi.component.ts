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
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {tuiAsControl} from '@taiga-ui/cdk/classes';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiDateClamp, TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiBooleanHandler, TuiMapper} from '@taiga-ui/cdk/types';
import {changeDateSeparator, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiMarkerHandler} from '@taiga-ui/core/components/calendar';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {TuiInputDateOptions} from '@taiga-ui/kit/tokens';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_VALUE_TRANSFORMER,
    TUI_DONE_WORD,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    TUI_MOBILE_CALENDAR_PROVIDER,
    tuiDateStreamWithTransformer,
} from '@taiga-ui/kit/tokens';
import {tuiToggleDay} from '@taiga-ui/kit/utils';
import {
    AbstractTuiMultipleControl,
    tuiAsControl as tuiAsLegacyControl,
    TuiStringifiableItem,
} from '@taiga-ui/legacy/classes';
import {TuiInputTagComponent} from '@taiga-ui/legacy/components/input-tag';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

/**
 * @deprecated: drop in v5.0
 */
@Component({
    selector: 'tui-input-date[multiple]',
    templateUrl: './input-date-multi.template.html',
    styleUrls: ['../input-date/input-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateMultiComponent),
        tuiAsControl(TuiInputDateMultiComponent as any),
        tuiAsLegacyControl(TuiInputDateMultiComponent),
        tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER),
        TUI_MOBILE_CALENDAR_PROVIDER,
    ],
})
export class TuiInputDateMultiComponent
    extends AbstractTuiMultipleControl<TuiDay>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiInputTagComponent)
    private readonly inputTag?: TuiInputTagComponent;

    private month: TuiMonth | null = null;
    private readonly mobileCalendar = inject(TUI_MOBILE_CALENDAR, {optional: true});
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer = inject<
        TuiValueTransformer<readonly TuiDay[]>
    >(TUI_DATE_VALUE_TRANSFORMER, {optional: true});

    protected open = false;

    protected dateFormat = TUI_DEFAULT_DATE_FORMAT;
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly doneWord$ = inject(TUI_DONE_WORD);
    protected readonly filler$: Observable<string> = this.dateTexts$.pipe(
        map(dateTexts =>
            changeDateSeparator(
                dateTexts[this.dateFormat.mode],
                this.dateFormat.separator,
            ),
        ),
    );

    protected readonly dateFormat$ = inject(TUI_DATE_FORMAT)
        .pipe(tuiWatch(this.cdr), takeUntilDestroyed())
        .subscribe(format => {
            this.dateFormat = format;
        });

    @Input()
    public min: TuiDay | null = this.options.min;

    @Input()
    public max: TuiDay | null = this.options.max;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Input()
    public markerHandler: TuiMarkerHandler | null = null;

    @Input()
    public defaultActiveYearMonth = TuiMonth.currentLocal();

    @Input()
    public inputHidden = false;

    @Input()
    @HostBinding('class._editable')
    public editable = true;

    @Input()
    public search: string | null = '';

    @Input()
    public placeholder = '';

    @Input()
    public rows = 1;

    public readonly maskitoOptions: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
        separator: '.',
        min: this.min?.toLocalNativeDate(),
        max: this.max?.toLocalNativeDate(),
    });

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    @Input()
    public tagValidator: TuiBooleanHandler<string> = (tag: TuiDay | string) => {
        const {year, month, day} = tuiIsString(tag)
            ? TuiDay.parseRawDateString(tag)
            : tag;
        const date = new TuiDay(year, month, day);

        return (
            (TuiDay.isValidDay(year, month, day) &&
                this.min?.dayBefore(date) &&
                this.max?.dayAfter(date)) ??
            false
        );
    };

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get nativeDropdownMode(): boolean {
        return this.isMobile && !this.editable;
    }

    protected get computedMin(): TuiDay {
        return this.min ?? this.options.min;
    }

    protected get computedMax(): TuiDay {
        return this.max ?? this.options.max;
    }

    protected get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    protected get computedActiveYearMonth(): TuiMonth {
        return (
            this.month ||
            this.value[this.value.length - 1] ||
            tuiDateClamp(this.defaultActiveYearMonth, this.computedMin, this.computedMax)
        );
    }

    @HostListener('click')
    protected onClick(): void {
        if (!this.isMobile && this.interactive) {
            this.open = !this.open;
        }
    }

    protected onIconClick(): void {
        if (this.isMobile && this.interactive) {
            this.open = true;
        }
    }

    protected readonly disabledItemHandlerWrapper: TuiMapper<
        [TuiBooleanHandler<string> | TuiBooleanHandler<TuiDay>],
        TuiBooleanHandler<TuiStringifiableItem<any> | string>
    > = handler => stringifiable =>
        tuiIsString(stringifiable) || handler(stringifiable.item);

    protected readonly valueMapper: TuiMapper<
        [readonly TuiDay[]],
        ReadonlyArray<TuiStringifiableItem<TuiDay>>
    > = value => value.map(item => new TuiStringifiableItem(item, item => String(item)));

    protected onEnter(search: string): void {
        if (!this.tagValidator(search)) {
            return;
        }

        this.value = tuiToggleDay(this.value, TuiDay.normalizeParse(search));

        if (this.inputTag) {
            this.inputTag.search = '';
        }

        this.done();
    }

    protected onValueChange(value: ReadonlyArray<TuiStringifiableItem<TuiDay>>): void {
        this.control?.updateValueAndValidity({emitEvent: false});

        if (!value.length && !this.mobileCalendar) {
            this.onOpenChange(true);
        }

        this.value = value.map(({item}) => item);
    }

    protected onDayClick(value: TuiDay): void {
        this.value = tuiToggleDay(this.value, value);
    }

    protected done(): void {
        this.open = false;
    }

    protected onMonthChange(month: TuiMonth): void {
        this.month = month;
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }
}
