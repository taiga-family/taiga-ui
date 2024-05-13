import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {concat, endWith, map, merge, repeat, take, takeWhile} from 'rxjs';

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

    return concat(
        tuiTypedFromEvent(element, 'mousedown').pipe(
            take(1),
            map(event => new TuiDragState('start', event)),
        ),
        merge(
            tuiTypedFromEvent(ownerDocument, 'mousemove').pipe(
                map(event => new TuiDragState('continues', event)),
            ),
            merge(
                tuiTypedFromEvent(ownerDocument, 'mouseup'),
                tuiTypedFromEvent(ownerDocument, 'dragend'),
            ).pipe(
                take(1),
                map(event => new TuiDragState('end', event)),
                endWith(null),
            ),
        ).pipe(takeWhile(tuiIsPresent)),
    ).pipe(repeat());
}
