import {Directive, inject, Output} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {debounceTime, distinctUntilChanged, map, merge} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiElasticContainer]',
    providers: [
        ResizeObserverService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {
                childList: true,
                characterData: true,
                subtree: true,
            },
        },
    ],
})
export class TuiElasticContainerDirective {
    private readonly el = tuiInjectElement();
    private readonly resize$ = inject(ResizeObserverService);
    private readonly mutation$ = inject(MutationObserverService);

    @Output()
    public readonly tuiElasticContainer = merge(this.resize$, this.mutation$).pipe(
        debounceTime(0),
        map(() => this.el.clientHeight - 1),
        distinctUntilChanged(),
    );
}
