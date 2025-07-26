export type TuiHandler<T, G> = (item: T) => G;
export type TuiBooleanHandler<T> = TuiHandler<T, boolean>;
export type TuiStringHandler<T> = TuiHandler<T, string>;
export type TuiNumberHandler<T> = TuiHandler<T, number>;
export type TuiSearchHandler<T> = (query: string, items: T[]) => T | null | undefined;
