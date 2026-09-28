import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    input,
    signal,
    viewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WaIntersectionObservee} from '@ng-web-apis/intersection-observer';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core/components/carousel';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {TuiMonthComponent} from '@taiga-ui/experimental/components/month';
import {TuiSlides} from '@taiga-ui/layout/components/slides';

import {TuiCalendarHeader} from './calendar-header.component';
import {TuiDatePicker} from './date-picker';

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-calendar[months]',
    imports: [
        FormsModule,
        TuiButton,
        TuiCalendarHeader,
        TuiCarousel,
        TuiMapperPipe,
        // eslint-disable-next-line @taiga-ui/experience-next/short-tui-imports
        TuiMonthComponent,
        TuiSlides,
        WaIntersectionObservee,
    ],
    templateUrl: './calendar-multi.component.html',
    styleUrl: './calendar-multi.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsAuxiliary(TuiCalendarMultiComponent),
        tuiProvide(AbstractTuiCalendar, TuiCalendarMultiComponent),
        tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'}),
        tuiTextfieldOptionsProvider({size: signal('m'), cleaner: signal(false)}),
    ],
    host: {'[style.--t-months]': 'months()'},
})
export class TuiCalendarMultiComponent<
    T extends 'multi' | 'range' | 'single',
> extends TuiDatePicker<T> {
    protected readonly carousel = viewChild(TuiCarouselComponent);
    protected readonly visible = signal<Record<string, number>>({});
    protected readonly scroll = viewChild.required(TuiCarouselComponent, {
        read: ElementRef,
    });

    protected readonly height = computed(() =>
        Math.max(...Object.values(this.visible())),
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

    public readonly months = input<1 | 2 | 3>(2);

    protected override updateMonth(day?: TuiDay | null): void {
        this.month.update(({year, month}) => {
            const updated = new TuiDay(day?.year || year, day?.month || month, 1);
            const limited = updated.dayLimit(this.min(), this.max());

            return Object.keys(this.visible()).includes(limited.toJSON().slice(0, -3))
                ? new TuiMonth(year, month)
                : limited;
        });
    }

    protected onSpin(step: number): void {
        const el: HTMLElement = this.scroll().nativeElement;
        const sign = el.matches('[dir="rtl"] :scope') ? -1 : 1;
        const left = el.offsetWidth / this.months();

        el.scrollTo({left: el.scrollLeft + left * sign * step, behavior: 'smooth'});
    }

    protected onIntersection(visible: boolean, month: TuiMonth, height: number): void {
        this.visible.update((current) => {
            const {[month.toJSON()]: removed, ...rest} = current;

            return visible ? {...current, [month.toJSON()]: removed || height} : rest;
        });
    }
}
