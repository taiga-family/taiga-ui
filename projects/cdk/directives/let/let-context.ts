import {TuiContextWithImplicit} from '@taiga-ui/cdk/interfaces';

import type {TuiLetDirective} from './let.directive';

/**
 * @internal
 */
export class TuiLetContext<T> implements TuiContextWithImplicit<T> {
    constructor(private readonly internalDirectiveInstance: TuiLetDirective<T>) {}

    get $implicit(): T {
        return this.internalDirectiveInstance.tuiLet;
    }

    get tuiLet(): T {
        return this.internalDirectiveInstance.tuiLet;
    }
}
