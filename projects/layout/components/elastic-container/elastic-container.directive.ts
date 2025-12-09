import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
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
            useValue: {childList: true, characterData: true, subtree: true},
        },
    ],
})
export class TuiElasticContainerDirective {
    private readonly el = tuiInjectElement();

    public readonly tuiElasticContainer = outputFromObservable(
        merge(inject(ResizeObserverService), inject(MutationObserverService)).pipe(
            debounceTime(0),
            map(() => this.el.clientHeight - 1),
            distinctUntilChanged(),
        ),
    );
}
