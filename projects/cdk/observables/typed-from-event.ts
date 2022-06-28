import {TuiEventWith, TuiTypedEventTarget} from '@taiga-ui/cdk/types';
import {fromEvent, Observable} from 'rxjs';

/**
 * @deprecated: use {@link tuiTypedFromEvent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function typedFromEvent<E extends keyof WindowEventMap>(
    target: Window,
    event: E,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<WindowEventMap[E], typeof target>>;
/**
 * @deprecated: use {@link tuiTypedFromEvent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function typedFromEvent<E extends keyof DocumentEventMap>(
    target: Document,
    event: E,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<DocumentEventMap[E], typeof target>>;
/**
 * @deprecated: use {@link tuiTypedFromEvent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function typedFromEvent<T extends Element, E extends keyof HTMLElementEventMap>(
    target: T,
    event: E,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<HTMLElementEventMap[E], typeof target>>;
/**
 * @deprecated: use {@link tuiTypedFromEvent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function typedFromEvent<
    E extends Event,
    T extends TuiTypedEventTarget<TuiEventWith<E, T>>,
>(
    target: T,
    event: string,
    options?: AddEventListenerOptions,
): Observable<TuiEventWith<E, T>>;
/**
 * @deprecated: use {@link tuiTypedFromEvent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function typedFromEvent<E extends Event>(
    target: TuiTypedEventTarget<E>,
    event: string,
    options?: AddEventListenerOptions,
): Observable<E>;
/**
 * @deprecated: use {@link tuiTypedFromEvent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function typedFromEvent<E extends Event>(
    target: TuiTypedEventTarget<E>,
    event: string,
    options: AddEventListenerOptions = {},
): Observable<E> {
    return fromEvent(target, event, options);
}

export const tuiTypedFromEvent = typedFromEvent;
