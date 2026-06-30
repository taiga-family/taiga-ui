import {coerceArray} from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    input,
    model,
    signal,
    viewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiBooleanHandler, type TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core/components/carousel';
import {TuiLink} from '@taiga-ui/core/components/link';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {TUI_DROPDOWN_HOST} from '@taiga-ui/core/portals/dropdown';
import {
    TUI_COMMON_ICONS,
    TUI_MONTHS,
    TUI_SPIN_TEXTS,
    tuiAsAuxiliary,
} from '@taiga-ui/core/tokens';
import {
    TUI_CALENDAR_OPTIONS,
    TuiCalendar,
} from '@taiga-ui/experimental/components/calendar';
import {TuiDataGrid} from '@taiga-ui/experimental/components/data-grid';
import {TuiInputDate} from '@taiga-ui/kit/components/input-date';
import {TuiInputDateMulti} from '@taiga-ui/kit/components/input-date-multi';
import {TuiInputDateRange} from '@taiga-ui/kit/components/input-date-range';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiElasticContainer} from '@taiga-ui/layout/components/elastic-container';
import {TuiSlides} from '@taiga-ui/layout/components/slides';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

type DatePicker<T> = T extends 'single'
    ? TuiDay
    : T extends 'multi'
      ? readonly TuiDay[]
      : TuiDayRange;

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-date-picker',
    imports: [
        FormsModule,
        TuiButton,
        TuiCalendar,
        TuiCarousel,
        TuiChevron,
        TuiDataGrid,
        TuiElasticContainer,
        TuiInputDate,
        TuiInputDateMulti,
        TuiInputDateRange,
        TuiLink,
        TuiMapperPipe,
        TuiSlides,
    ],
    templateUrl: './date-picker.component.html',
    styleUrl: './date-picker.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsAuxiliary(TuiDatePicker),
        tuiProvide(AbstractTuiCalendar, TuiDatePicker),
        tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'}),
        tuiTextfieldOptionsProvider({size: signal('m'), cleaner: signal(false)}),
    ],
})
export class TuiDatePicker<
    T extends 'multi' | 'range' | 'single' = 'single',
> extends AbstractTuiCalendar<DatePicker<T>> {
    protected readonly options = inject(TUI_CALENDAR_OPTIONS);
    protected readonly carousel = viewChild(TuiCarouselComponent);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly texts = inject(TUI_SPIN_TEXTS);
    protected readonly i18n = inject(TUI_MONTHS);
    protected readonly dropdown = inject(TUI_DROPDOWN_HOST, {optional: true});

    protected readonly content = computed<PolymorpheusContent<TuiContext<TuiMonth>>>(
        () => (c) => this.i18n()[c.$implicit.month],
    );

    protected readonly years = computed((value = this.value()) =>
        value instanceof TuiDayRange
            ? Array.from(
                  {length: value.to.year - value.from.year + 1},
                  (_, index) => value.from.year + index,
              )
            : Array.from(new Set(coerceArray<TuiDay>(value ?? []).map(({year}) => year))),
    );

    protected readonly year = computed(() =>
        Array.from({length: 12}, (_, index) => new TuiMonth(this.month().year, index)),
    );

    protected readonly months = computed((value = this.value()) =>
        this.year().filter((month) =>
            value instanceof TuiDayRange
                ? value.monthInRange(month)
                : coerceArray<TuiDay>(value ?? []).some((day) => day.monthSame(month)),
        ),
    );

    protected readonly button = computed(() =>
        this.view() === 'day'
            ? `${this.i18n()[this.month().month]} ${this.month().formattedYear}`
            : this.month().formattedYear,
    );

    protected readonly yearMin = computed(() =>
        Math.ceil((this.min().year - this.month().year - 5) / 12),
    );

    protected readonly yearMax = computed(() =>
        Math.floor((this.max().year - this.month().year + 6) / 12),
    );

    protected readonly disabledDay = computed(
        () => (day: TuiDay) =>
            day < this.min() || day > this.max() || this.disabledItemHandler()(day),
    );

    protected readonly disabledMonth = computed<TuiBooleanHandler<TuiMonth>>(
        () => (month) => month.monthBefore(this.min()) || month.monthAfter(this.max()),
    );

    protected readonly disabledYear = computed(
        () => (year: number) => year < this.min().year || year > this.max().year,
    );

    protected readonly start = computed((carousel = this.carousel()) =>
        this.view() === 'month'
            ? this.month().year === this.min().year
            : carousel?.index() === carousel?.min(),
    );

    protected readonly end = computed((carousel = this.carousel()) =>
        this.view() === 'month'
            ? this.month().year === this.max().year
            : carousel?.index() === carousel?.max(),
    );

    protected readonly sync = effect(() => {
        const value = this.value();
        const [day] = value instanceof TuiDayRange ? [value.from] : coerceArray(value);

        if (!day || day.year < 9000) {
            this.month.update(({month, year}) =>
                (day || new TuiDay(year, month, 1)).dayLimit(this.min(), this.max()),
            );
        }
    });

    public readonly view = model<'day' | 'month' | 'year'>('day');
    public readonly mode = input<T>();
    public readonly contentDay = input<PolymorpheusContent<TuiContext<TuiDay>>>();
    public readonly contentMonth = input<PolymorpheusContent<TuiContext<TuiMonth>>>();
    public readonly contentYear = input<PolymorpheusContent<TuiContext<number>>>();
    public readonly dayType = input(this.options.dayType);
    public readonly showAdjacent = input(this.options.showAdjacent);
    public readonly showWeek = input(this.options.showWeek);

    protected getMonth(index: number): TuiMonth {
        return new TuiMonth(Math.floor(index / 12), index % 12);
    }

    protected getItems(initial: number): readonly number[] {
        return Array.from({length: 12}, (_, index) => initial + index);
    }

    protected onSpin(step: number): void {
        this.carousel()?.[step > 0 ? 'next' : 'prev']();

        if (this.view() === 'month') {
            this.month.update((month) => month.append({year: step}));
        }
    }

    protected onYear(year: number): void {
        this.month.update(({month}) => new TuiMonth(year, month));
        this.view.set('month');
    }

    protected onMonth(month: TuiMonth): void {
        this.month.set(month);
        this.view.set('day');
    }

    protected onDay(day: TuiDay): void {
        if (this.mode() === 'range') {
            this.value.update((value): any =>
                value instanceof TuiDayRange && value.from === value.to
                    ? TuiDayRange.sort(value.to, day.append({}))
                    : new TuiDayRange(day, day),
            );
        } else if (this.mode() === 'multi') {
            this.value.update((value): any =>
                Array.isArray(value)
                    ? tuiArrayToggle(value, day, (a: TuiDay, b: TuiDay) => a.daySame(b))
                    : [day],
            );
        } else {
            this.value.set(day as any);
        }
    }
}
