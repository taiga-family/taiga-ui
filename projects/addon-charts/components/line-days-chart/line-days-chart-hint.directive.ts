import {
    ContentChildren,
    Directive,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    NgZone,
    QueryList,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    EMPTY_QUERY,
    TuiContextWithImplicit,
    TuiDay,
    tuiDefaultProp,
    TuiDestroyService,
    tuiPure,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {HINT_HOVERED_CLASS, TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    startWith,
    takeUntil,
    throttleTime,
} from 'rxjs/operators';

import {TuiLineDaysChartComponent} from './line-days-chart.component';

@Directive({
    selector: `[tuiLineChartHint]`,
    providers: [TuiDestroyService],
})
export class TuiLineDaysChartHintDirective {
    @ContentChildren(forwardRef(() => TuiLineDaysChartComponent))
    private readonly charts: QueryList<TuiLineDaysChartComponent> = EMPTY_QUERY;

    @Input(`tuiLineChartHint`)
    @tuiDefaultProp()
    hint: PolymorpheusContent<TuiContextWithImplicit<readonly TuiPoint[]>> = ``;

    constructor(
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        animationFrame$
            .pipe(
                throttleTime(200),
                map(() => !!nativeElement.querySelector(`.${HINT_HOVERED_CLASS}`)),
                startWith(false),
                distinctUntilChanged(),
                tuiZonefree(ngZone),
                filter(v => !v),
                takeUntil(destroy$),
            )
            .subscribe(() => {
                this.charts.forEach(chart => chart.onHovered(null));
            });
    }

    getContext(day: TuiDay): TuiContextWithImplicit<ReadonlyArray<[TuiDay, number]>> {
        return this.computeContext(day, this.charts);
    }

    raise(day: TuiDay): void {
        const current = this.charts
            .map(({value}) => find(value, day))
            .filter(([_, value]) => !isNaN(value));
        const sorted = [...current].sort((a, b) => a[1] - b[1]);

        this.charts.forEach((chart, index) => {
            chart.onHovered(day);
            chart.zIndex = Math.max(sorted.indexOf(current[index]), 0);
        });
    }

    @tuiPure
    private computeContext(
        day: TuiDay,
        charts: QueryList<TuiLineDaysChartComponent>,
    ): TuiContextWithImplicit<ReadonlyArray<[TuiDay, number]>> {
        return {
            $implicit: charts.map(({value}) => find(value, day)),
        };
    }
}

function find(value: ReadonlyArray<[TuiDay, number]>, current: TuiDay): [TuiDay, number] {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}
