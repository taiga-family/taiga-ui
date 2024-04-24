import {TuiOwnerDocumentException} from '@taiga-ui/cdk/exceptions';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {concat, endWith, map, merge, repeat, take, takeWhile} from 'rxjs';

import {tuiMouseDragFinishFrom} from './mouse-drag-finish-from';
import {tuiTypedFromEvent} from './typed-from-event';

export type TuiDragStage = 'continues' | 'end' | 'start';

export class TuiDragState {
    constructor(
        public readonly stage: TuiDragStage,
        public readonly event: MouseEvent,
    ) {}
}

export function tuiDragAndDropFrom(element: Element): Observable<TuiDragState> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new TuiOwnerDocumentException();
    }

    return concat(
        tuiTypedFromEvent(element, 'mousedown').pipe(
            take(1),
            map(event => new TuiDragState('start', event)),
        ),
        merge(
            tuiTypedFromEvent(ownerDocument, 'mousemove').pipe(
                map(event => new TuiDragState('continues', event)),
            ),
            tuiMouseDragFinishFrom(ownerDocument).pipe(
                take(1),
                map(event => new TuiDragState('end', event)),
                endWith(null),
            ),
        ).pipe(takeWhile(tuiIsPresent)),
    ).pipe(repeat());
}
