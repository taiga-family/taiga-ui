import {Directive, inject, Output} from '@angular/core';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {debounceTime, distinctUntilChanged, map, merge} from 'rxjs';

@Directive({
    selector: '[tuiElasticContainer]',
    providers: [
        ResizeObserverService,
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
})
export class TuiElasticContainerDirective {
    readonly #el = tuiInjectElement();

    @Output()
    public readonly tuiElasticContainer = merge(
        inject(ResizeObserverService, {self: true}),
        inject(MutationObserverService, {self: true}),
    ).pipe(
        debounceTime(0),
        map(() => this.#el.clientHeight - 1),
        distinctUntilChanged(),
    );
}
