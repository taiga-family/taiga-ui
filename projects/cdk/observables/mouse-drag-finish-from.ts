import {TuiEventWith, TuiTypedEventTarget} from '@taiga-ui/cdk/types';
import {merge, Observable} from 'rxjs';

import {typedFromEvent} from './typed-from-event';

/**
 * @deprecated: use {@link tuiMouseDragFinishFrom} instead
 * Letting go of the mouse after it was pressed
 * @param target
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function mouseDragFinishFrom<
    T extends TuiTypedEventTarget<TuiEventWith<DragEvent, T>>,
>(target: Exclude<T, null>): Observable<TuiEventWith<MouseEvent, T>> {
    return merge(typedFromEvent(target, 'mouseup'), typedFromEvent(target, 'dragend'));
}

export const tuiMouseDragFinishFrom = mouseDragFinishFrom;
