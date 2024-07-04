import {Directive, inject, Input, NgZone} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ANIMATION_FRAME, PERFORMANCE} from '@ng-web-apis/common';
import {tuiDescribeSector} from '@taiga-ui/addon-charts/utils';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiEaseInOutQuad} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {BehaviorSubject, map, pairwise, switchMap, takeWhile} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'path[tuiPieChart]',
})
export class TuiPieChartDirective {
    private readonly sector$ = new BehaviorSubject<readonly [number, number]>([0, 0]);

    constructor() {
        const el = tuiInjectElement<SVGPathElement>();
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
                        map((timestamp) =>
                            tuiEaseInOutQuad(
                                tuiClamp((timestamp - now) / tuiGetDuration(speed), 0, 1),
                            ),
                        ),
                        takeWhile((progress) => progress < 1, true),
                        map((progress) => [
                            prev[0] + startDelta * progress,
                            cur[1] > 359 ? cur[1] : prev[1] + endDelta * progress,
                        ]),
                    );
                }),
                tuiZonefree(inject(NgZone)),
                takeUntilDestroyed(),
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
