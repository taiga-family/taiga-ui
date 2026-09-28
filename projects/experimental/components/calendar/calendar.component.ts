import {coerceArray} from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    model,
    signal,
    viewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {type TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiBooleanHandler, type TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core/components/carousel';
import {TuiLink} from '@taiga-ui/core/components/link';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {TuiDataGrid} from '@taiga-ui/experimental/components/data-grid';
import {TuiMonthComponent} from '@taiga-ui/experimental/components/month';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiElasticContainer} from '@taiga-ui/layout/components/elastic-container';
import {TuiSlides} from '@taiga-ui/layout/components/slides';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiCalendarHeader} from './calendar-header.component';
import {TuiDatePicker} from './date-picker';

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-calendar[new]',
    imports: [
        FormsModule,
        TuiButton,
        TuiCalendarHeader,
        TuiCarousel,
        TuiChevron,
        TuiDataGrid,
        TuiElasticContainer,
        TuiLink,
        TuiMapperPipe,
        // eslint-disable-next-line @taiga-ui/experience-next/short-tui-imports
        TuiMonthComponent,
        TuiSlides,
    ],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsAuxiliary(TuiCalendarComponent),
        tuiProvide(AbstractTuiCalendar, TuiCalendarComponent),
        tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'}),
        tuiTextfieldOptionsProvider({size: signal('m'), cleaner: signal(false)}),
    ],
})
export class TuiCalendarComponent<
    T extends 'multi' | 'range' | 'single',
> extends TuiDatePicker<T> {
    protected readonly carousel = viewChild(TuiCarouselComponent);
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

    protected readonly index = computed(
        () => this.month().year * 12 + this.month().month,
    );

    public readonly view = model<'day' | 'month' | 'year'>('day');
    public readonly contentMonth = input<PolymorpheusContent<TuiContext<TuiMonth>>>();
    public readonly contentYear = input<PolymorpheusContent<TuiContext<number>>>();
    public readonly showAdjacent = input(this.options.showAdjacent);

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
}
