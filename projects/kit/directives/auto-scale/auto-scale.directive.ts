import type {OnChanges} from '@angular/core';
import {Directive, inject, Input, NgZone} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {fromEvent, merge, Subject} from 'rxjs';

import {TUI_AUTO_SCALE_OPTIONS} from './auto-scale.options';

const STEP = 1 / 16;

@Directive({
    standalone: true,
    selector: '[tuiAutoScale]',
    providers: [
        ResizeObserverService,
        MutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {characterData: true, subtree: true},
        },
    ],
    host: {tuiAutoScale: ''},
})
export class TuiAutoScale implements OnChanges {
    // TODO: refactor to signal inputs after Angular update
    private readonly changes$ = new Subject<void>();
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_AUTO_SCALE_OPTIONS);

    protected readonly sub = merge(
        this.changes$,
        inject(ResizeObserverService),
        inject(MutationObserverService),
        fromEvent(this.el, 'input'),
    )
        .pipe(tuiZonefree(inject(NgZone)), takeUntilDestroyed())
        .subscribe(() => {
            const min = Number(this.tuiAutoScale[0] || this.options.min);
            const max = Number(this.tuiAutoScale[1] || this.options.max);

            for (let i = max; i >= min; i -= STEP) {
                this.el.style.fontSize = `${i}rem`;

                if (this.el.scrollWidth <= this.el.clientWidth) {
                    break;
                }
            }
        });

    @Input()
    public tuiAutoScale: readonly [min: number, max: number] | '' = '';

    public ngOnChanges(): void {
        this.changes$.next();
    }
}
