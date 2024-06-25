import {Directive} from '@angular/core';

import {AbstractTuiControl} from './control';

/**
 * @deprecated: drop in v5.0
 */
@Directive()
export abstract class AbstractTuiNullableControl<T> extends AbstractTuiControl<T | null> {
    protected getFallbackValue(): T | null {
        return null;
    }
}
