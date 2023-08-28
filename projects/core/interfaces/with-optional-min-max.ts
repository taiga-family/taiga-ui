// @bad TODO: declare methods
export interface TuiWithOptionalMinMax<T> {
    max: T | null;
    min: T | null;
}

export interface TuiWithOptionalMinMaxWithValue<T, V> extends TuiWithOptionalMinMax<V> {
    value: T;
}
