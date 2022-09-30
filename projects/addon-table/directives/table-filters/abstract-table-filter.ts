export abstract class AbstractTuiTableFilter<T, G> {
    abstract filter(item: T, value: G): boolean;
}
