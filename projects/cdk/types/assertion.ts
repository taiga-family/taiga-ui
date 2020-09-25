export type TuiAssertion<C extends object, K extends keyof C> = (
    item: C[K],
    context: C,
) => boolean;
