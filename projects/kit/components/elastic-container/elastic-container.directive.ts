import {Directive, inject, Output} from '@angular/core';
import {
    WaMutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {debounceTime, distinctUntilChanged, map, merge} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiElasticContainer]',
    providers: [
        WaResizeObserverService,
        WaMutationObserverService,
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
    private readonly el = tuiInjectElement();

    @Output()
    public readonly tuiElasticContainer = merge(
        inject(WaResizeObserverService, {self: true}),
        inject(WaMutationObserverService, {self: true}),
    ).pipe(
        debounceTime(0),
        map(() => this.el.clientHeight - 1),
        distinctUntilChanged(),
    );
}
