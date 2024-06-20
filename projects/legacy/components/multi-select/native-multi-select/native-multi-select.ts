import {Directive} from '@angular/core';
import type {TuiMapper} from '@taiga-ui/cdk/types';
import type {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {AbstractTuiNativeSelect} from '@taiga-ui/legacy/classes';

import type {TuiMultiSelectDirective} from '../multi-select.directive';

@Directive()
export abstract class AbstractTuiNativeMultiSelect<T> extends AbstractTuiNativeSelect<
    TuiMultiSelectDirective<T>,
    T
> {
    protected get stringify(): TuiItemsHandlers<T>['stringify'] {
        return this.host.stringify;
    }

    protected selectedMapper: TuiMapper<[T, ...any[]], boolean> = (option, value) =>
        value.includes(option);
}
