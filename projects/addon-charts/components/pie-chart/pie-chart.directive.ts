import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_ANIMATION_FRAME, WA_PERFORMANCE} from '@ng-web-apis/common';
import {tuiDescribeSector} from '@taiga-ui/addon-charts/utils';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiEaseInOutQuad} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {BehaviorSubject, map, pairwise, switchMap, takeWhile} from 'rxjs';

@Directive({
    selector: 'path[tuiPieChart]',
})
export class TuiPieChartDirective {
    readonly #sector$ = new BehaviorSubject<readonly [number, number]>([0, 0]);
    readonly #el = tuiInjectElement<SVGPathElement>();
    readonly #performance = inject(WA_PERFORMANCE);
    readonly #animationFrame$ = inject(WA_ANIMATION_FRAME);
    readonly #speed = inject(TUI_ANIMATIONS_SPEED);

    protected readonly $ = this.#sector$
        .pipe(
            pairwise(),
            switchMap(([prev, cur]) => {
                const now = this.#performance.now();
                const startDelta = cur[0] - prev[0];
                const endDelta = cur[1] - prev[1];

                return this.#animationFrame$.pipe(
                    map((timestamp) =>
                        tuiEaseInOutQuad(
                            tuiClamp(
                                (timestamp - now) / tuiGetDuration(this.#speed),
                                0,
                                1,
                            ),
                        ),
                    ),
                    takeWhile((progress) => progress < 1, true),
                    map((progress) => [
                        prev[0] + startDelta * progress,
                        cur[1] > 359 ? cur[1] : prev[1] + endDelta * progress,
                    ]),
                );
            }),
            tuiZonefree(),
            takeUntilDestroyed(),
        )
        .subscribe(([start, end]) =>
            this.#el.setAttribute('d', tuiDescribeSector(start, end)),
        );

    @Input()
    public set tuiPieChart(sector: readonly [number, number]) {
        this.#sector$.next(sector);
    }
}
