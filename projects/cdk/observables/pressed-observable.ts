import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiOwnerDocumentException} from '@taiga-ui/cdk/exceptions';
import {Observable} from 'rxjs';
import {filter, map, startWith, switchMap, take} from 'rxjs/operators';

import {tuiMouseDragFinishFrom} from './mouse-drag-finish-from';
import {tuiTypedFromEvent} from './typed-from-event';

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

    return tuiTypedFromEvent(element, `mousedown`).pipe(
        filter(({isTrusted}) => isTrusted || !onlyTrusted),
        switchMap(() =>
            tuiMouseDragFinishFrom(ownerDocument).pipe(
                map(ALWAYS_FALSE_HANDLER),
                take(1),
                startWith(true),
            ),
        ),
    );
}
