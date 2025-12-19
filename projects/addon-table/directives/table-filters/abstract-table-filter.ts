import {type Signal} from '@angular/core';

export abstract class AbstractTuiTableFilter<T, G> {
    public abstract filter: Signal<(item: T, value: G) => boolean>;
}
