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
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiBooleanHandler, type TuiContext} from '@taiga-ui/cdk/types';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core/components/carousel';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TUI_COMMON_ICONS, TUI_MONTHS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';
import {TuiCalendar} from '@taiga-ui/experimental/components/calendar';
import {TuiDataGrid} from '@taiga-ui/experimental/components/data-grid';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiSlides} from '@taiga-ui/layout/components/slides';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

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
export class TuiDatePicker {
    protected readonly carousel = viewChild(TuiCarouselComponent);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly texts = inject(TUI_SPIN_TEXTS);
    protected readonly months = inject(TUI_MONTHS);

    protected readonly month = computed<PolymorpheusContent<TuiContext<number>>>(
        () => (c) => this.months()[c.$implicit],
    );

    protected readonly button = computed(() =>
        this.view() === 'day'
            ? `${this.months()[this.current().month]} ${this.current().formattedYear}`
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
    public readonly value = model<TuiDay | null>(null);
    public readonly current = model(TuiMonth.currentLocal());

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
        this.value.set(day);

        if (day.monthAfter(this.current())) {
            this.carousel()?.next();
        } else if (day.monthBefore(this.current())) {
            this.carousel()?.prev();
        }
    }
}
