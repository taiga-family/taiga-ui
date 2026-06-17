import {coerceArray} from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    model,
    viewChild,
} from '@angular/core';
import {type TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core/components/carousel';
import {TuiLink} from '@taiga-ui/core/components/link';
import {
    TUI_COMMON_ICONS,
    TUI_MONTHS,
    TUI_SPIN_TEXTS,
    tuiAsAuxiliary,
} from '@taiga-ui/core/tokens';
import {TuiCalendar} from '@taiga-ui/experimental/components/calendar';
import {TuiDataGrid} from '@taiga-ui/experimental/components/data-grid';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
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
        TuiButton,
        TuiCalendar,
        TuiCarousel,
        TuiChevron,
        TuiDataGrid,
        TuiLink,
        TuiMapperPipe,
        TuiSlides,
    ],
    templateUrl: './date-picker.component.html',
    styleUrl: './date-picker.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsAuxiliary(TuiDatePicker),
        tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'}),
    ],
})
export class TuiDatePicker<
    T extends 'multi' | 'range' | 'single' = 'single',
> extends AbstractTuiCalendar<DatePicker<T>> {
    protected readonly carousel = viewChild(TuiCarouselComponent);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly texts = inject(TUI_SPIN_TEXTS);
    protected readonly i18n = inject(TUI_MONTHS);

    protected readonly content = computed<PolymorpheusContent<TuiContext<number>>>(
        () => (c) => this.i18n()[c.$implicit],
    );

    protected readonly years = computed((value = this.value()) =>
        value instanceof TuiDayRange
            ? Array.from(
                  {length: value.to.year - value.from.year + 1},
                  (_, index) => value.from.year + index,
              )
            : Array.from(new Set(coerceArray<TuiDay>(value ?? []).map(({year}) => year))),
    );

    protected readonly months = computed((value = this.value()) =>
        Array.from({length: 12}, (_, index) => index).filter((index) =>
            value instanceof TuiDayRange
                ? value.monthInRange(new TuiMonth(this.month().year, index))
                : coerceArray<TuiDay>(value ?? []).some(
                      ({month, year}) => this.month().year === year && index === month,
                  ),
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

    protected readonly disabledMonth = computed(
        () => (month: number) =>
            this.month().year * 12 + month < this.min().year * 12 + this.min().month ||
            this.month().year * 12 + month > this.max().year * 12 + this.max().month,
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

    public readonly view = model<'day' | 'month' | 'year'>('day');
    public readonly mode = input<T>();

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

    protected onMonth(index: number): void {
        this.month.update(({year}) => new TuiMonth(year, index));
        this.view.set('day');
    }

    protected onDay(day: TuiDay): void {
        if (day.monthAfter(this.month())) {
            this.carousel()?.next();
        } else if (day.monthBefore(this.month())) {
            this.carousel()?.prev();
        }

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
