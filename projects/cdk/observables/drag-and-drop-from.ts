import {isPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {concat, merge, Observable} from 'rxjs';
import {endWith, map, repeat, take, takeWhile} from 'rxjs/operators';
import {mouseDragFinishFrom} from './mouse-drag-finish-from';
import {typedFromEvent} from './typed-from-event';

export const enum TuiDragStage {
    Start,
    Continues,
    End,
}

export class TuiDragState {
    constructor(readonly stage: TuiDragStage, readonly event: MouseEvent) {}
}

export function dragAndDropFrom(element: Element): Observable<TuiDragState> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new Error('element does not have ownerDocument');
    }

    return concat(
        typedFromEvent(element, 'mousedown').pipe(
            take(1),
            map(event => new TuiDragState(TuiDragStage.Start, event)),
        ),
        merge(
            typedFromEvent(ownerDocument, 'mousemove').pipe(
                map(event => new TuiDragState(TuiDragStage.Continues, event)),
            ),
            mouseDragFinishFrom(ownerDocument).pipe(
                take(1),
                map(event => new TuiDragState(TuiDragStage.End, event)),
                endWith(null),
            ),
        ).pipe(takeWhile(isPresent)),
    ).pipe(repeat());
}
