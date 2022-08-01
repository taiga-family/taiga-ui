import {TuiEventWith, TuiTypedEventTarget} from '@taiga-ui/cdk/types';
import {merge, Observable} from 'rxjs';

import {typedFromEvent} from './typed-from-event';

/**
 * Letting go of the mouse after it was pressed
 * @param target
 */
export function tuiMouseDragFinishFrom<
    T extends TuiTypedEventTarget<TuiEventWith<DragEvent, T>>,
>(target: Exclude<T, null>): Observable<TuiEventWith<MouseEvent, T>> {
    return merge(typedFromEvent(target, `mouseup`), typedFromEvent(target, `dragend`));
}
