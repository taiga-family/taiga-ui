import {Directive, inject, input} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {fromEvent, merge} from 'rxjs';

import {TUI_FLUID_TYPOGRAPHY_OPTIONS} from './fluid-typography.options';

const STEP = 1 / 16;

@Directive({
    standalone: true,
    selector: '[tuiFluidTypography]',
    providers: [
        ResizeObserverService,
        MutationObserverService,
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
        inject(ResizeObserverService, {self: true}),
        inject(MutationObserverService, {self: true}),
        fromEvent(this.el, 'input'),
    )
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => {
            const min = Number(this.tuiFluidTypography()[0] || this.options.min);
            const max = Number(this.tuiFluidTypography()[1] || this.options.max);

            for (let i = max; i >= min; i -= STEP) {
                this.el.style.fontSize = `${i}rem`;

                if (this.el.scrollWidth <= this.el.clientWidth) {
                    break;
                }
            }
        });
}
