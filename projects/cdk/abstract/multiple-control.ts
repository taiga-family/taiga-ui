import {Directive} from '@angular/core';

import {AbstractTuiControl} from './control';

@Directive()
export abstract class AbstractTuiMultipleControl<T> extends AbstractTuiControl<
    readonly T[]
> {
    clear() {
        this.updateValue([]);
    }

    protected getFallbackValue(): readonly T[] {
        return [];
    }
}
