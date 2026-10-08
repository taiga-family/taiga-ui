import {coerceArray} from '@angular/cdk/coercion';
import {computed, Directive, effect, inject, input, untracked} from '@angular/core';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk/date-time';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {TUI_DROPDOWN_HOST} from '@taiga-ui/core/portals/dropdown';
import {TUI_COMMON_ICONS, TUI_MONTHS, TUI_SPIN_TEXTS} from '@taiga-ui/core/tokens';
import {TUI_MONTH_OPTIONS} from '@taiga-ui/experimental/components/month';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

type DatePicker<T> = T extends 'single'
    ? TuiDay
    : T extends 'multi'
      ? readonly TuiDay[]
      : TuiDayRange;

@Directive()
export abstract class TuiDatePicker<
    T extends 'multi' | 'range' | 'single',
> extends AbstractTuiCalendar<DatePicker<T>> {
    protected readonly options = inject(TUI_MONTH_OPTIONS);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly dropdown = inject(TUI_DROPDOWN_HOST, {optional: true});
    protected readonly texts = inject(TUI_SPIN_TEXTS);
    protected readonly i18n = inject(TUI_MONTHS);
    protected readonly disabledDay = computed(
        () => (day: TuiDay) =>
            day < this.min() || day > this.max() || this.disabledItemHandler()(day),
    );

    protected readonly sync = effect(() => {
        const value = this.value();
        const [day] = value instanceof TuiDayRange ? [value.from] : coerceArray(value);

        this.min();
        this.max();

        if (!day || day.year < 9000) {
            untracked(() => this.updateMonth(day));
        }
    });

    public readonly mode = input<T>();
    public readonly contentDay = input<PolymorpheusContent<TuiContext<TuiDay>>>();
    public readonly dayType = input(this.options.dayType);
    public readonly showWeek = input(this.options.showWeek);

    protected getMonth(index: number): TuiMonth {
        return new TuiMonth(Math.floor(index / 12), index % 12);
    }

    protected updateMonth(day?: TuiDay | null): void {
        this.month.update(({month, year}) =>
            (day || new TuiDay(year, month, 1)).dayLimit(this.min(), this.max()),
        );
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
