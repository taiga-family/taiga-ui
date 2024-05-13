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
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import type {
    TuiBooleanHandler,
    TuiFocusableElementAccessor,
    TuiMapper,
    TuiValueTransformer,
} from '@taiga-ui/cdk';
import {
    AbstractTuiMultipleControl,
    changeDateSeparator,
    TUI_FALSE_HANDLER,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDateClamp,
    TuiDay,
    tuiIsString,
    TuiMonth,
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
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import {TuiStringifiableItem} from '@taiga-ui/kit/classes';
import {TuiInputTagComponent} from '@taiga-ui/kit/components/input-tag';
import type {TuiInputDateOptions} from '@taiga-ui/kit/tokens';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_VALUE_TRANSFORMER,
    TUI_DONE_WORD,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    tuiDateStreamWithTransformer,
} from '@taiga-ui/kit/tokens';
import {tuiImmutableUpdateInputDateMulti} from '@taiga-ui/kit/utils';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    selector: 'tui-input-date[multiple]',
    templateUrl: './input-date-multi.template.html',
    styleUrls: ['../input-date/input-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateMultiComponent),
        tuiAsControl(TuiInputDateMultiComponent),
        tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER),
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
    private readonly injector = inject(INJECTOR);
    private readonly dialogs = inject(TuiDialogService);
    private readonly mobileCalendar = inject(TUI_MOBILE_CALENDAR, {optional: true});
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public min: TuiDay | null = this.options.min;

    @Input()
    public max: TuiDay | null = this.options.max;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Input()
    public markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

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

    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer = inject<
        TuiValueTransformer<readonly TuiDay[]>
    >(TUI_DATE_VALUE_TRANSFORMER, {optional: true});

    protected maskitoOptions: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
        separator: '.',
        min: this.min?.toLocalNativeDate(),
        max: this.max?.toLocalNativeDate(),
    });

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

    protected get canOpen(): boolean {
        return this.interactive && !this.computedMobile;
    }

    @HostListener('click')
    protected onClick(): void {
        if (!this.isMobile) {
            this.open = !this.open;
        }
    }

    protected onIconClick(): void {
        if (!this.computedMobile || !this.mobileCalendar) {
            return;
        }

        this.dialogs
            .open<readonly TuiDay[]>(
                new PolymorpheusComponent(this.mobileCalendar, this.injector),
                {
                    size: 'fullscreen',
                    closeable: false,
                    data: {
                        multi: true,
                        min: this.min,
                        max: this.max,
                        disabledItemHandler: this.disabledItemHandler,
                    },
                },
            )
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(value => {
                this.value = value;
            });
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

        this.value = tuiImmutableUpdateInputDateMulti(
            this.value,
            TuiDay.normalizeParse(search),
        );

        if (this.inputTag) {
            this.inputTag.search = '';
        }

        this.done();
    }

    protected onValueChange(value: ReadonlyArray<TuiStringifiableItem<TuiDay>>): void {
        this.control?.updateValueAndValidity({emitEvent: false});

        if (!value.length) {
            this.onOpenChange(true);
        }

        this.value = value.map(({item}) => item);
    }

    protected onDayClick(value: TuiDay): void {
        this.value = tuiImmutableUpdateInputDateMulti(this.value, value);
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
