import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {merge, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Directive({
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
    @Output()
    readonly tuiElasticContainer = merge(this.resize$, this.mutation$).pipe(
        debounceTime(0),
        map(() => this.el.nativeElement.clientHeight - 1),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(ResizeObserverService) private readonly resize$: Observable<unknown>,
        @Inject(MutationObserverService) private readonly mutation$: Observable<unknown>,
    ) {}
}
