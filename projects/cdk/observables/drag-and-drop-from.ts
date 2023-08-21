import {TuiOwnerDocumentException} from '@taiga-ui/cdk/exceptions';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {concat, merge, Observable} from 'rxjs';
import {endWith, map, repeat, take, takeWhile} from 'rxjs/operators';

import {tuiMouseDragFinishFrom} from './mouse-drag-finish-from';
import {tuiTypedFromEvent} from './typed-from-event';

// TODO: change type in v4.0
// eslint-disable-next-line no-restricted-syntax
export enum TuiDragStage {
    Start,
    Continues,
    End,
}

export class TuiDragState {
    constructor(
        readonly stage: TuiDragStage,
        readonly event: MouseEvent,
    ) {}
}

export function tuiDragAndDropFrom(element: Element): Observable<TuiDragState> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new TuiOwnerDocumentException();
    }

    return concat(
        tuiTypedFromEvent(element, `mousedown`).pipe(
            take(1),
            map(event => new TuiDragState(TuiDragStage.Start, event)),
        ),
        merge(
            tuiTypedFromEvent(ownerDocument, `mousemove`).pipe(
                map(event => new TuiDragState(TuiDragStage.Continues, event)),
            ),
            tuiMouseDragFinishFrom(ownerDocument).pipe(
                take(1),
                map(event => new TuiDragState(TuiDragStage.End, event)),
                endWith(null),
            ),
        ).pipe(takeWhile(tuiIsPresent)),
    ).pipe(repeat());
}
