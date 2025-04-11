import {Directive, effect, inject, Renderer2} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {distinctUntilChanged} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiElastic]',
    providers: [
        MutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                childList: true,
                characterData: true,
                subtree: true,
            },
        },
    ],
    host: {
        '[style.overflow]': '"hidden"',
    },
})
export class TuiElastic {
    protected readonly el = tuiInjectElement();
    protected readonly renderer = inject(Renderer2);

    protected readonly mutations = toSignal(
        inject(MutationObserverService, {self: true}).pipe(distinctUntilChanged()),
    );

    protected outerId = 0;
    protected innerId = 0;

    constructor() {
        effect((onCleanup) => {
            this.mutations();

            const previous = this.el.clientHeight;

            this.renderer.setStyle(this.el, 'height', 'auto');

            this.outerId = requestAnimationFrame(() => {
                const current = this.el.clientHeight;

                this.renderer.setStyle(this.el, 'height', `${previous}px`);

                this.innerId = requestAnimationFrame(() => {
                    this.renderer.setStyle(this.el, 'height', `${current}px`);
                });
            });

            onCleanup(() => {
                cancelAnimationFrame(this.outerId);
                cancelAnimationFrame(this.innerId);
            });
        });
    }
}
