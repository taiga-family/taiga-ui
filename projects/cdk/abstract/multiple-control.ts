import {Directive} from '@angular/core';
import {AbstractTuiControl} from './control';

@Directive()
export abstract class AbstractTuiMultipleControl<T> extends AbstractTuiControl<
    ReadonlyArray<T>
> {
    clear() {
        this.updateValue([]);
    }

    protected getFallbackValue(): ReadonlyArray<T> {
        return [];
    }
}
