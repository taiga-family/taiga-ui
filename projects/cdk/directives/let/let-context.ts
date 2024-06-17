import type {TuiContext} from '@taiga-ui/cdk/types';

import type {TuiLet} from './let.directive';

/**
 * @internal
 */
export class TuiLetContext<T> implements TuiContext<T> {
    constructor(private readonly internalDirectiveInstance: TuiLet<T>) {}

    public get $implicit(): T {
        return this.internalDirectiveInstance.tuiLet;
    }

    public get tuiLet(): T {
        return this.internalDirectiveInstance.tuiLet;
    }
}
