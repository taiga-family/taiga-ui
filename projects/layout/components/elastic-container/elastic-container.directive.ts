import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {
    WaMutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {debounceTime, distinctUntilChanged, map, merge} from 'rxjs';

@Directive({
    selector: '[tuiElasticContainer]',
    providers: [
        WaResizeObserverService,
        WaMutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {childList: true, characterData: true, subtree: true},
        },
    ],
})
export class TuiElasticContainerDirective {
    private readonly el = tuiInjectElement();

    public readonly tuiElasticContainer = outputFromObservable(
        merge(inject(WaResizeObserverService), inject(WaMutationObserverService)).pipe(
            debounceTime(0),
            map(() => this.el.clientHeight - 1),
            distinctUntilChanged(),
        ),
    );
}
