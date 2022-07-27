import {ElementRef, Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk/observables';
import {defer, merge, Observable} from 'rxjs';

/**
 * Service that subscribes to scroll events of all parent elements
 */
// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Injectable()
export class TuiParentsScrollService extends Observable<Event> {
    private readonly callback$: Observable<Event>;

    constructor(
        @Inject(ElementRef) elementRef: ElementRef<Element>,
        @Inject(WINDOW) windowRef: Window,
    ) {
        super(subscriber => this.callback$.subscribe(subscriber));

        this.callback$ = defer(() => {
            let {nativeElement} = elementRef;
            const eventTargets: Array<Element | Window> = [windowRef, nativeElement];

            while (nativeElement.parentElement) {
                nativeElement = nativeElement.parentElement;
                eventTargets.push(nativeElement);
            }

            return merge<Event>(
                ...eventTargets.map<Observable<Event>>(element =>
                    typedFromEvent(element, `scroll`),
                ),
            );
        });
    }
}
