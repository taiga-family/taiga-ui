import {coerceArray} from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    signal,
    viewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core/components/carousel';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {TUI_DROPDOWN_HOST} from '@taiga-ui/core/portals/dropdown';
import {
    TUI_COMMON_ICONS,
    TUI_MONTHS,
    TUI_SPIN_TEXTS,
    tuiAsAuxiliary,
} from '@taiga-ui/core/tokens';
import {TuiDatePickerHeader} from '@taiga-ui/experimental/components/date-picker';
import {
    TUI_MONTH_OPTIONS,
    TuiMonthComponent,
} from '@taiga-ui/experimental/components/month';
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
    selector: 'tui-calendars',
    imports: [
        FormsModule,
        TuiButton,
        TuiCarousel,
        TuiDatePickerHeader,
        TuiMapperPipe,
        // eslint-disable-next-line @taiga-ui/experience-next/short-tui-imports
        TuiMonthComponent,
        TuiSlides,
    ],
    templateUrl: './calendars.component.html',
    styleUrl: './calendars.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsAuxiliary(TuiCalendars),
        tuiProvide(AbstractTuiCalendar, TuiCalendars),
        tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'}),
        tuiTextfieldOptionsProvider({size: signal('m'), cleaner: signal(false)}),
    ],
    host: {'[style.--t-months]': 'months()'},
})
export class TuiCalendars<
    T extends 'multi' | 'range' | 'single' = 'single',
> extends AbstractTuiCalendar<DatePicker<T>> {
    protected readonly options = inject(TUI_MONTH_OPTIONS);
    protected readonly carousel = viewChild(TuiCarouselComponent);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly texts = inject(TUI_SPIN_TEXTS);
    protected readonly i18n = inject(TUI_MONTHS);
    protected readonly dropdown = inject(TUI_DROPDOWN_HOST, {optional: true});
    protected readonly scroll = viewChild.required(TuiCarouselComponent, {
        read: ElementRef,
    });

    protected readonly disabledDay = computed(
        () => (day: TuiDay) =>
            day < this.min() || day > this.max() || this.disabledItemHandler()(day),
    );

    protected readonly start = computed(
        (carousel = this.carousel()) => carousel?.index() === carousel?.min(),
    );

    protected readonly end = computed(
        (carousel = this.carousel()) => carousel?.index() === carousel?.max(),
    );

    protected readonly index = computed(
        () => this.month().year * 12 + this.month().month,
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

    public readonly mode = input<T>();
    public readonly contentDay = input<PolymorpheusContent<TuiContext<TuiDay>>>();
    public readonly dayType = input(this.options.dayType);
    public readonly showWeek = input(this.options.showWeek);
    public readonly months = input<1 | 2 | 3>(2);

    protected getMonth(index: number): TuiMonth {
        return new TuiMonth(Math.floor(index / 12), index % 12);
    }

    protected onSpin(step: number): void {
        const el: HTMLElement = this.scroll().nativeElement;
        const sign = el.matches('[dir="rtl"] :scope') ? -1 : 1;
        const left = el.offsetWidth / this.months();

        el.scrollTo({left: el.scrollLeft + left * sign * step, behavior: 'smooth'});
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
