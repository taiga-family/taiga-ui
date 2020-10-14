import {Observable} from 'rxjs';
import {filter, mapTo, startWith, switchMapTo, take} from 'rxjs/operators';
import {mouseDragFinishFrom} from './mouse-drag-finish-from';
import {typedFromEvent} from './typed-from-event';

export function pressedObservable(element: Element): Observable<boolean> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new Error('element does not have ownerDocument');
    }

    return typedFromEvent(element, 'mousedown').pipe(
        filter(({isTrusted}) => isTrusted),
        switchMapTo(
            mouseDragFinishFrom(ownerDocument).pipe(
                mapTo(false),
                take(1),
                startWith(true),
            ),
        ),
    );
}
