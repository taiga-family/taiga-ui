export interface TuiDataListAccessor<T = unknown> {
    getOptions(includeDisabled?: boolean): ReadonlyArray<T>;
}
