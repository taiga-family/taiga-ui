import {TuiOwnerDocumentException} from '@taiga-ui/cdk/exceptions';
import {Observable} from 'rxjs';
import {filter, mapTo, startWith, switchMapTo, take} from 'rxjs/operators';

import {tuiMouseDragFinishFrom} from './mouse-drag-finish-from';
import {typedFromEvent} from './typed-from-event';

export interface TuiPressedObservableOptions {
    onlyTrusted: boolean;
}

export function tuiPressedObservable(
    element: Element,
    {onlyTrusted}: TuiPressedObservableOptions = {onlyTrusted: true},
): Observable<boolean> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new TuiOwnerDocumentException();
    }

    return typedFromEvent(element, `mousedown`).pipe(
        filter(({isTrusted}) => isTrusted || !onlyTrusted),
        switchMapTo(
            tuiMouseDragFinishFrom(ownerDocument).pipe(
                mapTo(false),
                take(1),
                startWith(true),
            ),
        ),
    );
}
