import {TuiContext} from '@taiga-ui/cdk/interfaces';

import type {TuiLetDirective} from './let.directive';

/**
 * @internal
 */
export class TuiLetContext<T> implements TuiContext<T> {
    constructor(private readonly internalDirectiveInstance: TuiLetDirective<T>) {}

    public get $implicit(): T {
        return this.internalDirectiveInstance.tuiLet;
    }

    public get tuiLet(): T {
        return this.internalDirectiveInstance.tuiLet;
    }
}
