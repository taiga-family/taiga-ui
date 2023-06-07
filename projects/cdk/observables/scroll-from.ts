import {Observable} from 'rxjs';

import {tuiTypedFromEvent} from './typed-from-event';

/**
 * Normalizes scroll event in case element is `html` (document.documentElement)
 */
export function tuiScrollFrom(element: Element): Observable<Event> {
    return tuiTypedFromEvent(
        element === element.ownerDocument?.documentElement
            ? element.ownerDocument
            : element,
        `scroll`,
    );
}
