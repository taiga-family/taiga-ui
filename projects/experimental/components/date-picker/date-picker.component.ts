import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    model,
    viewChild,
} from '@angular/core';
import {type TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiContext} from '@taiga-ui/cdk/types';
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
    private readonly carousel = viewChild(TuiCarouselComponent);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly texts = inject(TUI_SPIN_TEXTS);
    protected readonly months = inject(TUI_MONTHS);

    protected readonly button = computed(() =>
        this.view() === 'day'
            ? `${this.months()[this.current().month]} ${this.current().formattedYear}`
            : this.current().formattedYear,
    );

    public readonly view = model<'day' | 'month' | 'year'>('day');
    public readonly value = model<TuiDay | null>(null);
    public readonly current = model(TuiMonth.currentLocal());

    public readonly month = input<PolymorpheusContent<TuiContext<number>>>(
        ({$implicit}) => this.months()[$implicit],
    );

    protected getMonth(index: number): TuiMonth {
        return new TuiMonth(Math.floor(index / 12), index % 12);
    }

    protected getItems(initial: number): readonly number[] {
        return Array.from({length: 12}, (_, index) => initial + index);
    }

    protected onView(): void {
        this.view.update((view) => (view === 'day' ? 'month' : 'year'));
    }

    protected onSpin(step: number): void {
        const carousel = this.carousel();

        if (step > 0) {
            carousel?.next();
        } else {
            carousel?.prev();
        }

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
    }
}
