import {TuiStringHandler} from '@taiga-ui/cdk/types';

/**
 * Wrapper around an item to add `toString()` method
 */
export class TuiStringifiableItem<T> {
    constructor(readonly item: T, readonly stringify: TuiStringHandler<T>) {}

    toString(): string {
        return this.stringify(this.item);
    }
}
