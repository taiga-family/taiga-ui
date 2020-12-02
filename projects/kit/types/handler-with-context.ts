export type TuiHandlerWithContext<I, O, C extends Object = {}> = (
    item: I,
    context?: C,
) => O;

export type TuiBooleanHandlerWithContext<
    I,
    C extends Object = {}
> = TuiHandlerWithContext<I, boolean, C>;
