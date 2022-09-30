export type TuiHandlerWithContext<
    I,
    O,
    C extends Record<string, unknown> = Record<string, never>,
> = (item: I, context?: C) => O;

export type TuiBooleanHandlerWithContext<
    I,
    C extends Record<string, any> = Record<string, never>,
> = TuiHandlerWithContext<I, boolean, C>;
