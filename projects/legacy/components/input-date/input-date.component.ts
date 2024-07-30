/* eslint-disable @typescript-eslint/member-ordering */
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
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl} from '@taiga-ui/cdk/classes';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiDateMode} from '@taiga-ui/cdk/date-time';
import {
    DATE_FILLER_LENGTH,
    tuiDateClamp,
    TuiDay,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import type {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiBooleanHandler, TuiContext} from '@taiga-ui/cdk/types';
import {
    changeDateSeparator,
    tuiNullableSame,
    tuiPure,
} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiMarkerHandler} from '@taiga-ui/core/components/calendar';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {TuiInputDateOptions} from '@taiga-ui/kit/tokens';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_VALUE_TRANSFORMER,
    TUI_INPUT_DATE_OPTIONS,
    TUI_MOBILE_CALENDAR,
    TUI_MOBILE_CALENDAR_PROVIDER,
    tuiDateStreamWithTransformer,
} from '@taiga-ui/kit/tokens';
import type {TuiNamedDay} from '@taiga-ui/legacy/classes';
import {
    AbstractTuiNullableControl,
    tuiAsControl as tuiAsLegacyControl,
} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {TUI_DATE_MODE_MASKITO_ADAPTER} from '@taiga-ui/legacy/utils';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

/**
 * @deprecated: drop in v5.0
 */
@Component({
    selector: 'tui-input-date:not([multiple])',
    templateUrl: './input-date.template.html',
    styleUrls: ['./input-date.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateComponent),
        tuiAsControl(TuiInputDateComponent as any),
        tuiAsLegacyControl(TuiInputDateComponent),
        tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER),
        TUI_MOBILE_CALENDAR_PROVIDER,
    ],
})
export class TuiInputDateComponent
    extends AbstractTuiNullableControl<TuiDay>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly mobileCalendar = inject(TUI_MOBILE_CALENDAR, {optional: true});
    private month: TuiMonth | null = null;

    @Input()
    public min: TuiDay | null = this.options.min;

    @Input()
    public max: TuiDay | null = this.options.max;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Input()
    public markerHandler: TuiMarkerHandler | null = null;

    @Input()
    public items: readonly TuiNamedDay[] = [];

    @Input()
    public defaultActiveYearMonth = TuiMonth.currentLocal();

    public dateFormat = TUI_DEFAULT_DATE_FORMAT;
    protected open = false;
    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer = inject(TUI_DATE_VALUE_TRANSFORMER, {
        optional: true,
    });

    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly type!: TuiContext<TuiActiveZone>;
    protected readonly filler$: Observable<string> = this.dateTexts$.pipe(
        map((dateTexts) =>
            changeDateSeparator(
                dateTexts[this.dateFormat.mode],
                this.dateFormat.separator,
            ),
        ),
    );

    protected readonly dateFormat$ = inject(TUI_DATE_FORMAT)
        .pipe(tuiWatch(this.cdr), takeUntilDestroyed())
        .subscribe((format) => {
            this.dateFormat = format;
        });

    public get computedMin(): TuiDay {
        return this.min ?? this.options.min;
    }

    public get computedMax(): TuiDay {
        return this.max ?? this.options.max;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    public set nativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    public get computedValue(): string {
        const {value, nativeValue, activeItem} = this;

        if (activeItem) {
            return String(activeItem);
        }

        return value
            ? value.toString(this.dateFormat.mode, this.dateFormat.separator)
            : nativeValue;
    }

    public onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value && !this.mobileCalendar) {
            this.onOpenChange(true);
        }

        this.value =
            value.length !== DATE_FILLER_LENGTH
                ? null
                : TuiDay.normalizeParse(value, this.dateFormat.mode);
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    public override writeValue(value: TuiDay | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get nativePicker(): boolean {
        return this.options.nativePicker && this.isMobile;
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    protected get computedActiveYearMonth(): TuiMonth {
        if (this.items[0] && this.value?.daySame(this.items[0].day)) {
            return this.items[0].displayDay;
        }

        return (
            this.month ||
            this.value ||
            tuiDateClamp(this.defaultActiveYearMonth, this.computedMin, this.computedMax)
        );
    }

    protected get computedMask(): MaskitoOptions {
        return this.activeItem
            ? MASKITO_DEFAULT_OPTIONS
            : this.computeMaskOptions(
                  this.dateFormat.mode,
                  this.dateFormat.separator,
                  this.computedMin,
                  this.computedMax,
              );
    }

    protected get activeItem(): TuiNamedDay | null {
        const {value} = this;

        return (value && this.items.find((item) => item.day.daySame(value))) || null;
    }

    @HostListener('click')
    protected onClick(): void {
        if (!this.isMobile && this.interactive) {
            this.open = !this.open;
        }
    }

    protected getComputedFiller(filler: string): string {
        return this.activeItem ? '' : filler;
    }

    protected onIconClick(): void {
        if (this.isMobile && this.interactive) {
            this.open = true;
        }
    }

    protected onDayClick(value: TuiDay): void {
        this.value = value;
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
