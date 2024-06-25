import {Directive} from '@angular/core';

import {AbstractTuiControl} from './control';

/**
 * @deprecated: drop in v5.0
 */
@Directive()
export abstract class AbstractTuiMultipleControl<T> extends AbstractTuiControl<
    readonly T[]
> {
    protected clear(): void {
        this.value = [];
    }

    protected getFallbackValue(): readonly T[] {
        return [];
    }
}
