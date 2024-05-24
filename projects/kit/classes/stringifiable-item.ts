import type {TuiStringHandler} from '@taiga-ui/cdk';

/**
 * Wrapper around an item to add `toString()` method
 * TODO: Consider removing after InputTag refactor to work with T as is without a wrapper in 4.0
 */
export class TuiStringifiableItem<T> {
    constructor(
        public readonly item: T,
        public readonly stringify: TuiStringHandler<T>,
    ) {}

    protected toString(): string {
        return this.stringify(this.item);
    }
}
