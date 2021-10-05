// @bad TODO: declare methods
export interface TuiWithOptionalMinMax<T> {
    min: T | null;
    max: T | null;
}

export interface TuiWithOptionalMinMaxWithValue<T, V> extends TuiWithOptionalMinMax<V> {
    value: T;
}
