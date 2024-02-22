import {TuiStringHandler} from '@taiga-ui/cdk';

/**
 * Wrapper around an item to add `toString()` method
 */
export class TuiStringifiableItem<T> {
    constructor(
        public readonly item: T,
        public readonly stringify: TuiStringHandler<T>,
    ) {}

    public toString(): string {
        return this.stringify(this.item);
    }
}
