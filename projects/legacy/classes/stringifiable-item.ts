import type {TuiStringHandler} from '@taiga-ui/cdk/types';

/**
 * @deprecated: drop in v5.0
 * Wrapper around an item to add `toString()` method
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
