import {Directive, ElementRef, inject, Input, NgZone} from '@angular/core';
import {ANIMATION_FRAME, PERFORMANCE} from '@ng-web-apis/common';
import {tuiDescribeSector} from '@taiga-ui/addon-charts/utils';
import {tuiClamp, TuiDestroyService, tuiEaseInOutQuad, tuiZonefree} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_SPEED, tuiGetDuration} from '@taiga-ui/core';
import {BehaviorSubject, map, pairwise, switchMap, takeUntil, takeWhile} from 'rxjs';

@Directive({
    selector: 'path[tuiPieChart]',
    providers: [TuiDestroyService],
})
export class TuiPieChartDirective {
    private readonly sector$ = new BehaviorSubject<readonly [number, number]>([0, 0]);

    constructor() {
        const el: SVGPathElement = inject(ElementRef).nativeElement;
        const performance = inject(PERFORMANCE);
        const animationFrame$ = inject(ANIMATION_FRAME);
        const speed = inject(TUI_ANIMATIONS_SPEED);

        this.sector$
            .pipe(
                pairwise(),
                switchMap(([prev, cur]) => {
                    const now = performance.now();
                    const startDelta = cur[0] - prev[0];
                    const endDelta = cur[1] - prev[1];

                    return animationFrame$.pipe(
                        map(timestamp =>
                            tuiEaseInOutQuad(
                                tuiClamp((timestamp - now) / tuiGetDuration(speed), 0, 1),
                            ),
                        ),
                        takeWhile(progress => progress < 1, true),
                        map(progress => [
                            prev[0] + startDelta * progress,
                            cur[1] > 359 ? cur[1] : prev[1] + endDelta * progress,
                        ]),
                    );
                }),
                tuiZonefree(inject(NgZone)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(([start, end]) =>
                el.setAttribute('d', tuiDescribeSector(start, end)),
            );
    }

    @Input()
    public set tuiPieChart(sector: readonly [number, number]) {
        this.sector$.next(sector);
    }
}
