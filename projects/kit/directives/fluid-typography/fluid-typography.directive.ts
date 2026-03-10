import {Directive, inject, input} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {
    WA_MUTATION_OBSERVER_INIT,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {fromEvent, merge} from 'rxjs';

import {TUI_FLUID_TYPOGRAPHY_OPTIONS} from './fluid-typography.options';

const STEP = 1 / 16;

@Directive({
    selector: '[tuiFluidTypography]',
    providers: [
        WaResizeObserverService,
        WaMutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {characterData: true, subtree: true},
        },
    ],
    host: {tuiFluidTypography: ''},
})
export class TuiFluidTypography {
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_FLUID_TYPOGRAPHY_OPTIONS);

    public readonly tuiFluidTypography = input<readonly [min: number, max: number] | ''>(
        '',
    );

    protected readonly sub = merge(
        toObservable(this.tuiFluidTypography),
        inject(WaResizeObserverService, {self: true}),
        inject(WaMutationObserverService, {self: true}),
        fromEvent(this.el, 'input'),
    )
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => {
            const min = Number(this.tuiFluidTypography()[0] || this.options.min);
            const max = Number(this.tuiFluidTypography()[1] || this.options.max);

            let low = min;
            let high = max;
            let best = min;

            while (high - low >= STEP) {
                const middle = this.snap((low + high) / 2);

                this.setFontSize(middle);

                if (this.el.scrollWidth <= this.el.clientWidth) {
                    best = middle;
                    low = middle + STEP;
                } else {
                    high = middle - STEP;
                }
            }

            this.setFontSize(best);
        });

    private setFontSize(size: number): void {
        this.el.style.fontSize = `calc(${size}rem + var(--tui-font-offset))`;
    }

    private snap(value: number): number {
        return Math.floor(value / STEP) * STEP;
    }
}
