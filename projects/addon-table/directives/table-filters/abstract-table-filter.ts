export abstract class AbstractTuiTableFilter<T, G> {
    public abstract filter(item: T, value: G): boolean;
}
