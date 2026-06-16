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
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiDay,
    TuiDayRange,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiBooleanHandler, type TuiContext} from '@taiga-ui/cdk/types';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core/components/carousel';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TUI_COMMON_ICONS, TUI_MONTHS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';
import {TuiCalendar} from '@taiga-ui/experimental/components/calendar';
import {TuiDataGrid} from '@taiga-ui/experimental/components/data-grid';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiSlides} from '@taiga-ui/layout/components/slides';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

type DatePicker<T extends 'multi' | 'range' | 'single' = 'single'> = {
    single: TuiDay;
    multi: readonly TuiDay[];
    range: TuiDayRange;
}[T];

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
    providers: [tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'})],
})
export class TuiDatePicker<T extends 'multi' | 'range' | 'single' = 'single'> {
    protected readonly carousel = viewChild(TuiCarouselComponent);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly texts = inject(TUI_SPIN_TEXTS);
    protected readonly i18n = inject(TUI_MONTHS);

    protected readonly month = computed<PolymorpheusContent<TuiContext<number>>>(
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
                ? value.monthInRange(new TuiMonth(this.current().year, index))
                : coerceArray<TuiDay>(value ?? []).some(
                      ({month, year}) => this.current().year === year && index === month,
                  ),
        ),
    );

    protected readonly button = computed(() =>
        this.view() === 'day'
            ? `${this.i18n()[this.current().month]} ${this.current().formattedYear}`
            : this.current().formattedYear,
    );

    protected readonly yearMin = computed(() =>
        Math.ceil((this.min().year - this.current().year - 5) / 12),
    );

    protected readonly yearMax = computed(() =>
        Math.floor((this.max().year - this.current().year + 6) / 12),
    );

    protected readonly disabledDay = computed(
        () => (day: TuiDay) =>
            day < this.min() || day > this.max() || this.disabledItemHandler()(day),
    );

    protected readonly disabledMonth = computed(
        () => (month: number) =>
            this.current().year * 12 + month < this.min().year * 12 + this.min().month ||
            this.current().year * 12 + month > this.max().year * 12 + this.max().month,
    );

    protected readonly disabledYear = computed(
        () => (year: number) => year < this.min().year || year > this.max().year,
    );

    protected readonly start = computed((carousel = this.carousel()) =>
        this.view() === 'month'
            ? this.current().year === this.min().year
            : carousel?.index() === carousel?.min(),
    );

    protected readonly end = computed((carousel = this.carousel()) =>
        this.view() === 'month'
            ? this.current().year === this.max().year
            : carousel?.index() === carousel?.max(),
    );

    public readonly view = model<'day' | 'month' | 'year'>('day');
    public readonly value = model<NoInfer<DatePicker<T>> | null>(null);
    public readonly current = model(TuiMonth.currentLocal());
    public readonly mode = input<T>();

    public readonly disabledItemHandler =
        input<TuiBooleanHandler<TuiDay>>(TUI_FALSE_HANDLER);

    public readonly min = input(TUI_FIRST_DAY, {
        transform: (min?: TuiDay | null) => min ?? TUI_FIRST_DAY,
    });

    public readonly max = input(TUI_LAST_DAY, {
        transform: (max?: TuiDay | null) => max ?? TUI_LAST_DAY,
    });

    protected getMonth(index: number): TuiMonth {
        return new TuiMonth(Math.floor(index / 12), index % 12);
    }

    protected getItems(initial: number): readonly number[] {
        return Array.from({length: 12}, (_, index) => initial + index);
    }

    protected onSpin(step: number): void {
        this.carousel()?.[step > 0 ? 'next' : 'prev']();

        if (this.view() === 'month') {
            this.current.update((current) => current.append({year: step}));
        }
    }

    protected onYear(year: number): void {
        this.current.update(({month}) => new TuiMonth(year, month));
        this.view.set('month');
    }

    protected onMonth(index: number): void {
        this.current.update(({year}) => new TuiMonth(year, index));
        this.view.set('day');
    }

    protected onDay(day: TuiDay): void {
        if (day.monthAfter(this.current())) {
            this.carousel()?.next();
        } else if (day.monthBefore(this.current())) {
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
