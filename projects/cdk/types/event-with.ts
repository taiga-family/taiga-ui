export interface TuiTypedEventTarget<E> {
    addEventListener(
        type: string,
        listener: ((evt: E) => void) | null,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener?: ((evt: E) => void) | null,
        options?: boolean | EventListenerOptions,
    ): void;
}

/**
 * Wrapper around {@link Event} to add typings to target and currentTarget.
 */
export type TuiEventWith<G extends Event, T extends TuiTypedEventTarget<G>> = G & {
    readonly currentTarget: T;
};
